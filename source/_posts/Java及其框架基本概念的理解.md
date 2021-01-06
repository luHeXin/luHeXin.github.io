---
title: Java及其框架的专业名词的汇总
date: 2021-01-07 00:58:41
tags: Java
categories: Java
---
# RESTful架构
`REST`(即Representational State Transfer，译为，表现层状态转化)是一种互联网软件的架构原则，如果一个架构符合REST原则，就称它为RESTful架构。通俗的讲便是，“资源”在网络传输中以某种“表现形式(表现层)”进行“状态转化” 。
## 资源（Resource）
我们可以把真实的对象数据称为资源。一个资源既可以是一个集合，也可以是单个个体。任何事物，只要有被引用到的必要，它就是一个资源。每种资源对应一个特定的URI(Uniform Resource Identifier)。
## 表现层（Representational）
资源的表现形式，比如HTML格式、XML格式、JSON格式等。

RESTFUL是一种网络应用程序的设计风格和开发方式，基于HTTP，可以使用XML格式定义或JSON格式定义。

## 状态转化（State Transfer）
互联网通信协议 HTTP 协议，是一个无状态协议，所有的资源状态都保存在服务器端。客户端通过特定的 HTTP 动词，对服务器端资源进行操作，实现"表现层状态转化"。
## 总结
* 每一个 URI (Uniform Resource Identifier) 代表一种资源；
* 客户端和服务器之间，传递这种资源的某种表现形式比如 json，xml，image,txt 等等；
* 客户端通过特定的 HTTP 动词(GET、POST、PUT、DELETE)，对服务器端资源进行操作，实现"表现层状态转化"。
## 参考文章
http://www.ruanyifeng.com/blog/2011/09/restful.html

https://www.runoob.com/w3cnote/restful-architecture.html
<hr/>

# Java bean
Java欠缺属性、事件、多重继承功能。所以，如果要在Java程序中实现一些面向对象编程的常见需求，只能手写大量胶水代码。Java Bean正是编写这套胶水代码的惯用模式或约定。

Java bean是表达实体和信息的规范，便于封装重用。通常与数据库中的表对应。也称为pojo，entity，domain。

## 特点
* 所有属性为private
* 提供默认构造方法
* 提供getter和setter
* 实现serializable接口

## 参考文章
https://www.zhihu.com/question/19773379
<hr/>