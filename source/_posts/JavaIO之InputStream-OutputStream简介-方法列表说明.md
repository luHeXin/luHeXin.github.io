---
title: JavaIO之InputStream OutputStream常用方法说明
date: 2019-10-06 13:00:33
tags:
- JAVA基础
- IO流
categories: JAVA基础
---
# 基本含义
InputStream:输入字节流，是一个抽象类，包含了读取方法以及辅助方法。

OutputStream:输出字节流，是一个抽象类，包含了写入方法以及辅助方法。
# 常用方法详解
## InputStream
### read()
- read()  从输入流中读取数据的下一个字节。返回 0 到 255 范围内的 int 字节值，如果因为已经到达流末尾而没有可用的字节，则返回值 -1。
- 方法将会一直阻塞,直到数据可用,检测到流的末尾或者抛出异常。
- 无参数的read() 是抽象方法,由实现类提供实现。
- 无参数的read()返回的数据为读取到的字节值，而有参数的则是读取到字节数组中,所以返回值为读取到的个数。
- read方法关键点就是要么就是直接返回读取的字节，要么就是将读取到的字节放入字节数组中,字节数组是你传递进去的。
### close()
- 关闭流并释放与此流有关的系统资源,可能抛出IOException。
- close方法是空方法。

### 示例代码
``` java
public class IO {
	public static void main(String[] args) throws IOException {

        File file=new File("C:\\1.txt");
        /**
         *  读取数据
         *  为了防止中文乱码，一个汉字需三个字节
         */
        //输入流读取数据
        InputStream inputStream = new FileInputStream(file);
        int length;
        byte[] bs = new byte[100];//设置缓冲byte数组接受读取文件内容
        //一次读取一个字节
        while ((length=inputStream.read(bs))!=-1) {//读取数据存到bs中
          System.out.print(new String(bs));
        }
        //关闭IO流
        inputStream.close();
        
        //方式二，会导致中文乱码,因为一个中文是三个字节
//        InputStream inputStream2=new FileInputStream(file);
//        int i;
//        while((i=inputStream2.read())!=-1) {//读取的数据存到i中
//        	System.out.println((char)i);
//        }
//        inputStream2.close();
    }
}
```
<hr/>

## OutputStream
### write(int b)
- 将指定的字节写入此输出流。
- 虽然参数是int，但写入的是byte。
### write(byte[] b)
- 将 b.length 个字节从指定的 byte 数组写入此输出流
### write(byte[] b,int off,int len)
- 将指定 `byte 数组`中从偏移量 `off` 开始的 `len` 个字节写入此输出流,
`write(b, off, len)` 的常规协定是：将数组 b 中的某些字节按顺序写入输出流；
元素 `b[off]` 是此操作写入的第一个字节，`b[off+len-1]` 是此操作写入的最后一个字节。
### flush()
- flush的含义为刷新,在写入数据时使用
- 之所以需要刷新,是因为有的输出流的写方法实现,可能已经缓冲了以前写入的任何字节,那么,这个方法用于提供能够立即将数据写入到磁盘的功能,不过,只是立即请求操作系统进行处理,而不保证这些字节实际已经写入到物理设备,比如磁盘。
### 示例代码
```java
public class IO {
	public static void main(String[] args) throws IOException {

        File file=new File("C:\\1.txt");
        /**
		 * 写入数据
		 */
        //输出流写入数据,没有指定文件则创建
        OutputStream outputStream = new FileOutputStream(file);
        // 写入数据
        byte[] datas="你好".getBytes();
        outputStream.write(datas);
        outputStream.flush();//内存中数据刷新到硬盘
        // 关闭IO流
        outputStream.close();
    }
}
```
# 运用字节流，复制文件
## 示例代码
```java
public class IO {
	public static void main(String[] args) throws IOException {

              /**
         * @ 复制文件
         */
       FileInputStream inputStream=new FileInputStream("C:\\1.txt");
       FileOutputStream outputStream=new FileOutputStream("C:\\2.txt");
       
       int length=0;
       while((length=inputStream.read())!=-1) {
       	outputStream.write(length);
       }
       inputStream.close();
       outputStream.flush();
       outputStream.close();
       System.out.println("复制完毕")
}
```
<hr/>

# 参考文章：
[JavaIO之InputStream OutputStream简介 方法列表说明](https://www.cnblogs.com/noteless/p/9618521.html)