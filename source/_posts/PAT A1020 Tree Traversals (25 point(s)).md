---
title: PAT A1020 Tree Traversals (25 point(s))
date: 2019-08-02 17:46:40
tags:
- PAT
categories: PAT 甲级
---
# Problem Description
Suppose that all the keys in a binary tree are distinct positive integers. Given the postorder and inorder traversal sequences, you are supposed to output the level order traversal sequence of the corresponding binary tree.
## Input Specification
Each input file contains one test case. For each case, the first line gives a positive integer N (≤30), the total number of nodes in the binary tree. The second line gives the postorder sequence and the third line gives the inorder sequence. All the numbers in a line are separated by a space.
## Output Specification
For each test case, print in one line the level order traversal sequence of the corresponding binary tree. All the numbers in a line must be separated by exactly one space, and there must be no extra space at the end of the line.
## Sample Input
7<br/>
2 3 1 5 7 6 4<br/>
1 2 3 4 5 6 7<br/>
## Sample Output
4 1 6 3 5 7 2
<hr/>

# 题目大意
假设二叉树的所有键都是不同的正整数，并给出后序遍历和中序遍历，要求输出相应二叉树的层序遍历。<br/>
<hr/>

# 思路
二叉树的遍历问题<br/>
## 输入案例分析
在输入样例中，第一行给的是二叉树总共的节点数，第二行给出的是前序遍历序列，第三行给出的是终须遍历序列。<br/>
## 具体操作
通过输入案例第一行给出的数字，确定遍历序列的元素总数。<br/>
在前序遍历序列中，序列最后一个元素便是二叉树的根节点，所以，我们可以拿根节点，在中序遍历序列中，进行元素的比较，从而，确定在中序遍历序列中根节点的位置。<br/>
由中序遍历的性质知，中序遍历序列根节点左侧的元素便是左子树中的元素，根节点右侧的元素便是右子树中的元素。进行递归调用后，便可得到这棵的二叉树。<br/>
最后，对二叉树进行层序遍历即可。<br/>
应注意的是，输出的最后一个节点的数据后是没有空格的。
<hr>

# 参考代码

``` C++
# include<cstdio>
# include<cstring>
# include<algorithm>
# include<queue>
using namespace std;

int n;//接受第一行输入的节点数
int post[50], in[50];//接受二三行输入的后序与中序遍历序列

struct node
{
	int data;
	node* lchild;
	node* rchild;
};

//建树，返回为建好树的根节点
node* create(int postL, int postR, int inL, int inR) {
	if (postL > postR) {
		return NULL;//如果后序序列的长度小于1，直接返回
	}
	node* root = new node;//新建节点，存储当前根节点
	root->data = post[postR];//根节点数据域为根节点的值
	int k;//k用来存储，根节点在中序遍历中的位置
	for (k = inL; k <= inR; k++) {
		if (in[k] == post[postR]) {//找到中序遍历序列中根节点
			break;
		}
	}

	int numLChild = k - inL;//左子树节点个数
	//递归调用，左(右)子树根节点地址给左(右)指针
	root->lchild = create(postL, postL + numLChild - 1, inL, k - 1);
	root->rchild = create(postL + numLChild, postR - 1, k + 1, inR);

	return root;
}

//输出层序遍历
int num = 0;//已输出节点数
void LayerOrder(node* root) {
	queue<node*> q;
	q.push(root);//根节点入队
	while (!q.empty()) {//
		node* now = q.front();
		q.pop();
		printf("%d", now->data);//输出队首元素的值
		num++;
		if (num < n) {
			printf(" ");//节点数据后有空格，而最后一个节点的输没有每空格。
		}
		if (now->lchild != NULL) q.push(now->lchild);
		if (now->rchild != NULL) q.push(now->rchild);
	}
}

int main() {
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d", &post[i]);
	}
	for (int i = 0; i < n; i++) {
		scanf("%d", &in[i]);
	}
	node* root = create(0, n - 1, 0, n - 1);//建树
	LayerOrder(root);//层序遍历
	return 0;
}
```