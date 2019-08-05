---
title: 通过Spring-Data-Jpa连接MySQL,并操作数据库
date: 2019-08-05 22:52:54
tags:
- MySQL
- Springboot
categories: Springboot
---
# 版本
MySQL：5.7.27

jdk：12.0.1

Navicat：12.0.20

IDEA：2018.2.4
# 具体操作
## 1. 引入依赖

`spring-boot-starter-data-jpa`与
`mysql-connector-java`

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
 </dependency>
 ```

 Springboot自动帮我们选择了版本。所以，在这个位置，不必手动选择版本。

## 2. 新建数据库
命名为test，具体格式如下图所示。<br/>
（Character set与Collation的选择是为了后续项目进行所需，读者可根据所需自行选择。当然，对于仅连接连接MySQL而言，就算全为默认也是可以的。）

 ![](https://luhexin.github.io/images/Spring-Data-Jpa连接数据库/1.jpg)

 ## 3. 写配置

 ``` java
 spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/test?serverTimezone=UTC
    username: root
    password: 123456
  jpa:
    hibernate:
      ddl-auto: create
    show-sql: true
```

要注意`url`中，要添加时域`serverTimezone=UTC`，<br/>
否则，可能报错
`Unable to create requested service [org.hibernate.engine.jdbc.env.spi.JdbcEnvironment]`

## 4. 建表

表中含有id，money，producer，consumer四个字段
新建一个类 test.java
``` java
package com.lu.test;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
public class test {
    @Id
    @GeneratedValue
    private Integer id;
    private BigDecimal money;
    private String producer;
    private String consumer;

    public test() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BigDecimal getMoney() {
        return money;
    }

    public void setMoney(BigDecimal money) {
        this.money = money;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getConsumer() {
        return consumer;
    }

    public void setConsumer(String consumer) {
        this.consumer = consumer;
    }
}
```
运行之后，出现如下信息：

Hibernate: drop table if exists hibernate_sequence

Hibernate: drop table if exists luckymoney

Hibernate: create table hibernate_sequence (next_val bigint) engine=MyISAM

Hibernate: insert into hibernate_sequence values ( 1 )

Hibernate: create table luckymoney (id integer not null, consumer varchar(255), money decimal(19,2), producer varchar(255), primary key (id)) engine=MyISAM
返回到。数据库便可以看到，已经建好了一个名为`test`的表。

## 5. 更新表中的内容

在数据库中，向新建的表输入内容并保存之后，返回IDEA再次运行代码，则，springboot会重新建一个名为`test`表，并覆盖旧表，清空旧表数据。

因此，在建好表后，需要更新数据，则应先返回到配置文件中，将 `ddl-auto: create`更改为` ddl-auto: update`，这样，在下一次运行IDEA时，才会保留数据库表中的信息。