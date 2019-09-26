---
title: Unity Animation与Animator的创建
date: 2019-09-26 11:09:37
tags:
- Animation
- Animator
- Unity
categories: Unity
---
# Animation与Animator的差异：

Animation:是历史遗留下来的版本，专用于做简单动画。只支持控制一个动画的播放。<br/>
Animator:有一个动画控制器，俗称动画状态机，是5.X之后新设计的版本，用于复杂动画的控制。

# Animator的创建：

方法一： 首先，创建一个Cube对象，接着，按路径Window->Animation->Animation查找Animation视图，打开Animation视图，然后，选中Cube对象，此时在Animation视图中出现如下提示：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/1.png)

点击Create进行Animator的创建，创建完毕后，在`Project`视图中可看到，刚刚创建的Animator（Cube）与Animation(New Animation)：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/2.png)

点击New Animation查看属性(此处留意，通过Animator创建的Animation与今创建的Animation属性有所不同)：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/3.png)

点击Cube查看Cube属性，可以看到Animator已经创建好了：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/4.png)


方法二：点击Cube查看属性，在`Inspector`界面中点击`Add Component`，查找Animator进行创建：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/9.png)

点击Cube，在Animation界面中点击`Create`进行Animator的创建，查看`Project`列表，刚刚创建的Animator（Cube）与Animation(New Animation)。

# Animation创建：

点击Cube查看属性，在`Inspector`界面中点击`Add Component`，查找Animation进行创建：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/5.png)

点击Cube，在Animation界面中点击`Create`进行Animaton的创建:

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/6.png)

查看`Project`列表，此时列表中只有Animation(New Animation)：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/7.png)

再次，点击`Project`列表中的`New Animation`查看其属性：

![](https://luhexin.github.io/images/Unity-Animation与Animator的创建/8.png)

可以看到，通过Animation创建的Animation与通过Animator创建的Animation的属性是不同的。