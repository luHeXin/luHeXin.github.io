---
title: c++ 进制转换
date: 2019-12-27 20:20:11
tags:
- 基础算法
---
# 任意2-36进制数转换为10进制数
以二进制转换为十进制为例：<br/>
基本规则：把二进制数按权展开、相加即得十进制数。
![](https://luhexin.github.io/images/进制转换/20190419181818210.png)
## c++代码实现
``` c++
int toDecimal(string s,int radix){    //s是给定的radix进制字符串
	int ans=0;
	for(int i=0;i<s.size();i++){
		char t=s[i];
		if(t>='0'&&t<='9') ans=ans*radix + (t-'0');
		else ans=ans*radix + (t-'a'+10);
	}
		return ans;
}

```
## Demo
``` c++
#include<cstdio>
#include<string>

using namespace std;

int toDecimal(string s,int radix){ //将二进制的11011转换为十进制
	int ans=0;
	for(int i=0;i<s.size();i++){
		char t=s[i];
		if(t>='0'&&t<='9') ans=ans*radix+(t-'0');
		else ans=ans*radix+t-'a'+10;
	}
		return ans;
}


int main(){
	string s="11011";
	int radix=2;
	int res=toDecimal(s,2);
    //通过to_string()方法将int转换为string
    //string s1=to_string(res);
	printf("%d",res);
	return 0;
}
```
<hr/>


# 十进制转换为其他进制
## 方法一
以十进制转换为二进制为例：<br/>
基本规则：十进制数除2取余法，即十进制数除2，余数为权位上的数，得到的商值继续除，直到商为0为止。
![](https://luhexin.github.io/images/进制转换/20190419181734241.png)
## c++代码实现
``` c++
string decimalToA(int n,int radix){//n是待转数字(十进制)，radix是需转换为的进制
	string ans="";
	do{
		int t=n%radix;
		if(t>=0&&t<=9)	ans+=t+'0';//将数字转换为字符
		else ans+=t-10+'a';//转换为相应的字母，比如讲十进制的11转换为16进制的b
		n/=radix;
	}while(n!=0);	//使用do{}while()以防止输入为0的情况
	reverse(ans.begin(),ans.end());
	return ans;	
}
```

## Demo
``` c++
#include<cstdio>
#include<algorithm>

using namespace std;

string decimalToA(int n,int radix){//将十进制150转换为二进制
	string ans="";
	do{
		int t=n%radix;
		if(t>=0&&t<=9)	ans+=t+'0';//将数字转换为字符
		else ans+=t-10+'a';//转换为相应的字母，比如讲十进制的11转换为16进制的b
		n/=radix;
	}while(n!=0);	//使用do{}while()以防止输入为0的情况
	reverse(ans.begin(),ans.end());
	return ans;	
}
 

int main(){
	int n=150;
	int radix=2;
	string res=decimalToA(n,2);
    //可以用stoi()函数将string类型转换为int
    //int res1=stoi(res.c_str());
	printf("%s", res.c_str());
	return 0;
}
```


## 方法二
itoa()函数（可以将一个10进制数转换为任意的2-36进制字符串）<br/>
用法：char*itoa(int value,char*string,int radix);

## Demo
``` c++
#include<cstdio>
#include<string>

using namespace std;

int main(){
	int num=10;
	char str[10];
	itoa(num, str, 16);  //将十进制的10，转换为16进制，并存在字符串str中
	printf("%s",str);
	return 0;
}
```