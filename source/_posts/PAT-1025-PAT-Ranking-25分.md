---
title: PAT 1025 PAT Ranking (25分)
date: 2020-02-16 21:07:45
tags:
- PAT
categories: PAT 甲级
---
# Problem Description
Programming Ability Test (PAT) is organized by the College of Computer Science and Technology of Zhejiang University. Each test is supposed to run simultaneously in several places, and the ranklists will be merged immediately after the test. Now it is your job to write a program to correctly merge all the ranklists and generate the final rank.
## Input Specification
Each input file contains one test case. For each case, the first line contains a positive number N (≤100), the number of test locations. Then N ranklists follow, each starts with a line containing a positive integer K (≤300), the number of testees, and then K lines containing the registration number (a 13-digit number) and the total score of each testee. All the numbers in a line are separated by a space.
## Output Specification
For each test case, first print in one line the total number of testees. Then print the final ranklist in the following format:

```
registration_number final_rank location_number local_rank
```

The locations are numbered from 1 to N. The output must be sorted in nondecreasing order of the final ranks. The testees with the same score must have the same rank, and the output must be sorted in nondecreasing order of their registration numbers.
## Sample Input
2

5

1234567890001 95

1234567890005 100

1234567890003 95

1234567890002 77

1234567890004 85

4

1234567890013 65

1234567890011 25

1234567890014 100

1234567890012 85

## Sample Output
9<br/>
1234567890005 1 1 1<br/>
1234567890014 1 2 1<br/>
1234567890001 3 1 2<br/>
1234567890003 3 1 2<br/>
1234567890004 5 1 4<br/>
1234567890012 5 2 2<br/>
1234567890002 7 1 5<br/>
1234567890013 8 2 3<br/>
1234567890011 9 2 4<br/>

<hr/>

# 题目大意
有N个考场，每个考场有K名学生，根据考生PAT分数，分别记录本考场成绩的排名，以及所有考场所有考生成绩的总排名，若名次相同则按学号升序排列。
# 思路
排序问题<br/>
因为有N个考场，每个考场有K名考生(K是变量)，因此总共有N*K名学生。<br/>
考场排序：定义一个变量'count'(0≤count≤N x K-1)给每位考生进行编号。每读入一个考场的信息，将该考场的考生依次编号为count-k至count,并按排序规则排序(成绩降序，成绩相同，考号升序)，若编号为j的考生的分数与j-1考生分数相同，说明名次并列，令j排名与j-1相等；若不同则令j考生的名次为j-count+k+1。<br/>
全部排序：按照排序规则sort(0,count,cmp)<br/>
变量间关系详见参考代码
<hr/>

# 参考代码 
``` c++
#include<cstdio>
#include<iostream>
#include<algorithm>
#include<cstring>
#include<string>

using namespace std;

const int maxn=100010;

struct Node{
	char id[15];
	int score=-1;
	int frank;
	int lrank;
	int lnum;
}node[maxn];

bool cmp(Node a,Node b){
	if(a.score!=b.score) return a.score>b.score;
	else return strcmp(a.id,b.id)<0;
}

int main() {
	int n,k,score;
	char id[15];
	scanf("%d",&n);
	int count=0;
	for(int i=1;i<=n;i++){//有n个考场，其编号依次为[1,n]
		scanf("%d",&k);
		for(int j=0;j<k;j++){
			scanf("%s %d",id,&score);
			strcpy(node[count].id,id);
			node[count].score=score;
			node[count].lnum=i;
			count++;//记录总考试人数
		}
		sort(node+count-k,node+count,cmp);//该考场考生序号为[count-k,count-1],因此按照sort()函数语法，指向末地址下一个
		node[count-k].lrank=1;//将该考场最高分名次置为1，为了后续与前者比较，分数相同则并列
		for(int j=count-k+1;j<count;j++){//循环记录每位考生在自己考场的排名
			if(node[j-1].score==node[j].score) node[j].lrank=node[j-1].lrank;//并列
			else node[j].lrank=j-count+k+1;//注意排名是从1开始的，而j-count+k为该考场第一个人的结构体数组下标其数值为0.
		}
	}
	sort(node,node+count,cmp);//所有考场，所有学生排序
	node[0].frank=1;
	for(int j=1;j<count;j++){//记录每位考生在所有考场的总排名
		if(node[j].score==node[j-1].score) node[j].frank=node[j-1].frank;
		else node[j].frank=j+1;
	} 
	printf("%d\n",count);
	for(int i=0;i<count;i++){
		printf("%s %d %d %d\n",node[i].id,node[i].frank,node[i].lnum,node[i].lrank);
		
	}
	return 0;
	
}
```
其实，这么写时间复杂度是非常高的，我有一个好的办法只是这里位置太小写不下(手动狗头)，(By the way,感谢姥姥对小白的不杀之恩，呜呜呜~~~)，哎，路漫漫其修远兮，(表述能力)&&(代码功底)还需加强兮。