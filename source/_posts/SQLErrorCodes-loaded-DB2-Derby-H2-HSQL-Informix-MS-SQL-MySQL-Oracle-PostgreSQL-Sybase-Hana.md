---
title: ' SQLErrorCodes loaded: [DB2, Derby, H2, HSQL, Informix, MS-SQL, MySQL, Oracle, PostgreSQL, Sybase, Hana]'
date: 2019-10-21 23:05:15
tags:
- SpringMVC
- 报错
---
# 错误描述
学习使用SpringMVC框架，在进行数据的插入时出现如下错误:
![](https://luhexin.github.io/images/SQLERROR/1.png)

# 问题原因
哎，问题原因很简单sql传参与该字段在数据库的数据类型不匹配......

网上其实很多针对于该问题的回答，几乎全是将问题归于字段在数据库的数据类型不匹配，这确实是对的，以SpringMVC为例，我的问题就是由于`mapper`中的`SQL语句`里的一个字段与数据库不匹配而造成的。

# 解决办法
1. 查找sql传参与该字段在数据库的数据类型是不是匹配。

2. 在可视化界面（plsql,navicat）里面执行一下自己的sql是不是有语法错误，可视化界面里面报的错误要比项目日志里面报的明确得多。