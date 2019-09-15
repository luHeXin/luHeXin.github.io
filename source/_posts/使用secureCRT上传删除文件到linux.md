---
title: 使用secureCRT对Linux进行文件上传与删除操作
date: 2019-09-15 15:31:46
tags:
- Linux
- secureCRT
categories: Linux
---
# 使用secureCRT上传文件至linux服务器

1. 以SSH2的连接方式，通过secureCRT连接到Linux服务器。<br/>
![](https://luhexin.github.io/images/secureCRT对Linux上传删除/1.jpg)<br/>

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/2.jpg)

2. 在终端使用快捷键`Alt+p`，打开sftp连接窗口。

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/3.jpg)

3. 拖动需上传的文件到该窗口即可。但要注意的一点是，默认上传的位置是根目录。例如我们将一个本地文件`1.txt`进行上传，将出现如下效果：

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/4.jpg)

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/5.jpg)

4. 上传文件到指定linux指定目录下(以`home`目录为例)，先在sftp连接窗口中进入目录：

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/6.jpg)


进行上传操作：

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/7.jpg)


结果：

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/8.jpg)

# 使用secureCRT删除linux服务器上的文件
与在linux服务器上的删除操作相同通过指令`rm 文件名`即可，例如，
删除刚刚上传的`1.txt文件`：

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/9.jpg)

![](https://luhexin.github.io/images/secureCRT对Linux上传删除/10.jpg)