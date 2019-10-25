---
title: 01-复杂度2 Maximum Subsequence Sum (25 分)
date: 2019-10-26 00:05:45
tags:
- 浙大数据结构编程练习
categories: 浙大数据结构编程练习
---
# Problem Description
Given a sequence of K integers { N
​1
​​ , N
​2
​​ , ..., N
​K
​​  }. A continuous subsequence is defined to be { N
​i
​​ , N
​i+1
​​ , ..., N
​j
​​  } where 1≤i≤j≤K. The Maximum Subsequence is the continuous subsequence which has the largest sum of its elements. For example, given sequence { -2, 11, -4, 13, -5, -2 }, its maximum subsequence is { 11, -4, 13 } with the largest sum being 20.

Now you are supposed to find the largest sum, together with the first and the last numbers of the maximum subsequence.
# Input Specification
Each input file contains one test case. Each case occupies two lines. The first line contains a positive integer K (≤10000). The second line contains K numbers, separated by a space.
# Output Specification
For each test case, output in one line the largest sum, together with the first and the last numbers of the maximum subsequence. The numbers must be separated by one space, but there must be no extra space at the end of a line. In case that the maximum subsequence is not unique, output the one with the smallest indices i and j (as shown by the sample case). If all the K numbers are negative, then its maximum sum is defined to be 0, and you are supposed to output the first and the last numbers of the whole sequence.
# Sample Input
10
-10 1 2 3 4 -5 -23 3 7 -21
# Sample Output
10 1 4
<hr/>

# 题目类型
最大子列问题

# 参考代码
```c++
#include<iostream>

using namespace std;

int main() {
	int A[10010],K=0;
	cin >>K;
	//在线处理
	int thisSum=0, maxSum=-1;//此处注意，maxSum赋值为-1，否则负数和0通不过
	int tempL = 0,left=0,right=K-1;
	for (int i = 0; i < K; i++) {
		cin >> A[i];
		thisSum += A[i];
		if (thisSum > maxSum) {//在线更新
			maxSum = thisSum;
			right = i;//当前子列右侧
			left = tempL;//当前子列的左侧
		}
		else if(thisSum<0){//当前子列是负的，肯定不是最大子列;且可满足最大子列小于零结果置零的条件
			thisSum = 0;
			tempL = i+1;//子列"另起山头"。当前子列左端为i，因此，新子列左端从i+1开始。
		}
	}
	if (maxSum<0) {
		cout << 0 << " " << A[0] << " " << A[K - 1] << endl;    //全为负数，输出第一个和最后一个
	
	}
	else{
		cout << maxSum << " " << A[left] << " " << A[right] << endl;   //存在最大子列和，正常输出
	}
		
	return 0;

}
```