---
title: redis-server报错：Could not create server TCP listening socket *:6379 问题的解决
tags:
- redis
---
# 问题描述：

![](https://luhexin.github.io/images/redis-server报错/1.png)

# 问题解决：
输入指令`ps -ef | grep -i redis`检测后台进程：

![](https://luhexin.github.io/images/redis-server报错/2.png)

通过指令`kill -9 1473`终止1473进程：

![](https://luhexin.github.io/images/redis-server报错/3.png)

这时，问题就已经解决了，重新运行服务器：

![](https://luhexin.github.io/images/redis-server报错/4.png)

此时已经可以正常运行服务器了。