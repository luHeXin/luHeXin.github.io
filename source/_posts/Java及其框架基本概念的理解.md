---
title: Java相关概念的概述
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
http://www.ruanyifeng.com/blog/2011/09/restful.html<br/>
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

# XML
XML: extensiable markup language 指可扩展标记语言
## 用途 
在没有XML这种语言之前，使用String作为两个程序之间的通讯，但string无法描述关系型数据。<br/>
HTML 也是一种标志性语言，但其标签本身就缺少含义，所以被设计用来显示数据。<br/>
为了解决以上问题，引入XML，其用途为：
* 配置文件
* 传输数据
* 存储数据
## 元素
XML 元素指的是从（且包括）开始标签直到（且包括）结束标签的部分。

元素可包含其他元素、文本或者两者的混合物。元素也可以拥有属性。

在XML中元素和标签并无差别。
## 属性
属性是作为XML元素中的一部分的，提供关于元素的额外（附加）信息。
``` XML
<person sex="female">
  <firstname>Anna</firstname>
  <lastname>Smith</lastname>
</person> 
```
## XML解析
XML解析就是读取XML的数据。<br/>
主要有如下两种方式：<br/>
* dom(Document Object Model)文档对象模型，是W3C组织推荐解析XML的一种方式。DOM解析会把XML文档加载到内存中，生成DOM树的元素都是以对象的形式存在的，通过操作这些对象就能够操作XML文档。

* sax(Simple API For XML)，它是XML社区的标准，几乎所有XML解析器都支持它。sax是一种推式的机制,你创建一个sax 解析器,解析器在发现xml文档中的内容时就告诉你(把事件推给你)。 如何处理这些内容，由程序员自己决定。

<hr/>