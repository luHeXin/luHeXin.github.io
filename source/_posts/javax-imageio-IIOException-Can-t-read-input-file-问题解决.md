---
title: 'javax.imageio.IIOException: Can't read input file!问题解决'
date: 2021-01-05 22:19:53
tags:
- Java
categories: Java
---
# 问题描述
单元测试时，报错：javax.imageio.IIOException: Can't read input file!

## 问题代码

``` java
    private static String basePath = Thread.currentThread().getContextClassLoader().getResource("").getPath();
	// 调用Thumbnails生成带有图片
	try {
		Thumbnails.of(thumbnail.getImage()).size(200, 200)
			.watermark(Positions.BOTTOM_RIGHT, ImageIO.read(new File(basePath + "/watermark.jpg")), 0.25f)
			.outputQuality(0.8f).toFile(dest);
		} catch (IOException e) {
			logger.error(e.toString());
			throw new RuntimeException("创建缩略图失败：" + e.toString());
		}
```

## 报错信息

`javax.imageio.IIOException: Can't read input file!`
<hr/>

# 问题分析及解决

图片的路径出了问题，图片是放在`D:\JAVA_places\schoolShop\schoolShop\src\main\resources`下的，在文件单元测试编译时，会被放在`D:\JAVA_places\schoolShop\schoolShop\target\test-classes`文件夹中。
但是，在单元测试中不能读取`D:\JAVA_places\schoolShop\schoolShop\src\main\resources`中的内容，因此需将图片放到`D:\JAVA_places\schoolShop\schoolShop\src\test\resources`文件夹下，这样在编译执行的时候，文件便加载到`D:\JAVA_places\schoolShop\schoolShop\target\test-classes`文件夹中。
当然，直接将图片复制到`D:\JAVA_places\schoolShop\schoolShop\target\test-classes`文件夹中也是可以解决该问题的。