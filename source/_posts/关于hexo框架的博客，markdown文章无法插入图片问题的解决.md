---
title: 关于hexo框架的博客，Markdown文章无法插入图片问题的解决
date: 2019-08-01 01:20:46
tags:
- Markdown
- 路径
categories: 文件路径问题
---

# 前言：
在使用Markdown编辑博客文章时，在markdown文件中可以看到插入的图片，但是，在Next主题以及很多其他主题下，博客页面均无法显示图片。在查询了很多资料无果后，发现是简单的存储路径的问题。

# 使用Markdown将图片插入文章

Markdown支持图片的后缀名为`.jpg `,`.png `, `.gif `,<br/>
通过Markdown语法`![图片描述]（图片路径） `即可插入图片。<br/>
如，我将一个图片保存到`D:\Blog\luHeXin\source\images\文件路径\1.jdg`路径，<br/>
此篇Markdown文章保存在`D:\Blog\luHeXin\source\_posts`路径，<br/>
则只需要使用语法`![图片](/source/images/文件路径/1.jpg)`便可在本地中看到图片，但是部署到githubPages时却出现如下效果。<br/>
![图片](/source/images/文件路径/1.jpg).<br/>
只有将上述路径修改为`![图片]![](https://luhexin.github.io/images/文件路径/1.jpg)`并重新部署到服务器上时，才能正常显示图片，效果如下.<br/>
![](https://luhexin.github.io/images/文件路径/1.jpg)

 # 相对路径的表示方法

在解决此问题前，我们应了解一下相对路径的几种表示方法，
- **./ ：代表文件所在的目录（可以省略不写）**

- **../ ：代表文件所在的父级目录**

- **../../ ：代表文件所在的父级目录的父级目录**

- **/ ：代表文件所在的根目录**

# 产生问题的原因
上述例子中第一种路径的写法<br>
`/source/images/文件路径/1.jpg`<br/>
便是告诉计算机去文件所在的根目录(`D:\Blog\luHeXin\`)中寻找图片,寻找的路径为

`d:\Blog\luHeXin\images\文件路径\1.jpg`

这正是图片所在的路径，所以在markdown文件中查看是没有问题的。<br/>

但是部署到服务器上时，所显示页面的`index.html`文件，是由hexo博客框架静态生成的，而该文件的位置与`Markdown`所编辑的文章并在一个文件夹里。所以，使用相对路径的写法，即使在markdown文件中可以看到图片，但，在所生成的静态文件中，也会因为`index.html`文件所在目录的不同，而导致寻找图片路径不同。
# 问题的最终解决
我发现部署在服务器上图片的绝对路径是`https://luhexin.github.io/images/文件路径/1.jpg`,<br/>
（此图片在工作区文件夹中的位置为`D:\Blog\luHeXin\source\images\文件路径\1.jpg`）
因此，我们一律采用绝对路径的方式添加图片<br/>`![](https://luhexin.github.io/images/文件路径/1.jpg)`。

# 参考文章
https://baijiahao.baidu.com/s?id=1606046350230601762&wfr=spider&for=pc