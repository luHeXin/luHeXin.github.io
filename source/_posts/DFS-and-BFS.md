---
title: DFS and BFS
date: 2020-01-28 09:56:21
tags: PAT模板
categories: PAT模板
---
# DFS
## 简述
DFS即深度优先搜索，是一种枚举所有完整路径以遍历所有情况的搜索方法。以“深度”为前进的关键词，不碰到死胡同就不回头。<br/>
使用递归可以很好地实现深度优先搜索，递归中的递归式就是岔道口，递归边界就是死胡同。
## 模板
```c++
DFS(depth,..){
    if(找到解||死胡同){//递归边界
        ...
        return;
    }
    ...
    DFS(depth+1,...);//枚举下一种情况
}
```
## 使用DFS遍历树
对于树而言，DFS的“死胡同”就等价于树中的叶子结点，而“岔道口”相当于树的非叶子结点。
```c++
void DFS(int index){
    if(Node[index].child.size()==0{//到达叶子结点
        return;
    }
    for(int i=0;i<Node[index].child.size();i++){
        int child=Node[index].child[i];
        DFS(child);
    }
}
```
## 使用DFS遍历图
DFS遍历图的基本思路是将经过的顶点设置为已访问，下次递归碰到该顶点时不再去处理，直到整个图的顶点都被标记为已访问。
```c++
DFS(U){//访问顶点u
    vis[u]=true;//设u为已被访问
    for(从u出发能到达的所有顶点v){
        if(vis[v]==false){
            DFS(v);//访问v
        }
    }
}

DFSTrave(G){//遍历图G
    for(G的所有顶点u){
        if(vis[u]==false){//u未被访问
            DFS(u);//访问u所在的连通块
        }
    }
}
```
如果图为连通图(任意两个顶点都联通)，则只需要一个DFS即可。

# BFS
## 简述
BFS即广度优先搜索，以广度为第一搜索。当碰到岔路口时，不是一根筋的往下走，遇到“南墙”为止。而是，依次访问该岔路口可以直接到达的所有结点，然后再按这些结点被访问的顺序去一次访问他们所能达到的所有结点。<br/>
BFS一般由队列实现，且总是按层次的顺序进行遍历。
## 模板
``` c++
void BFS(int s){
    queue<int> q;
    q.push(s);
    while(!q.empty()){
        int front=q.front();//取出队首元素
        //访问队首元素
        q.pop();//队首元素出队
        //将下一层为入队的结点入队，并设置为已入队
    }
}
```

## 使用BFS遍历树
就树而言，BFS问题可转换为层序遍历问题。
```c++
void BFS(int root){
    queue<int> q;
    q.push(root);
    while(!q.empty()){
        int front=q.front();//取出队首元素
        q.pop();
        for(int i=0;i<Node[front].child.size();i++){
            int child=Node[front].child[i];
            q.push(child);
        }
    }
}
```

## 使用BFS遍历图
先建立一个队列，把初始顶点加入队列，此后每次都取出队首顶点进行访问，并把该点出发可以达到的未曾加入过队列(而不是未访问)的顶点全部加入队列，直到队列为空。
```c++
BFS(u){//遍历u所在的连通块
    queue q;
    将u入队;
    inq[u]=true;//设置已入队
    while(!q.empty()){
        取出q的队首元素进行访问;
        for(从u出发可以到达的所有顶点v){
            if(inq[v]==false){//如果为入队
                将v入队;
                inq[v]=true;
            }
        }
    }
}
BFSTrave(G){//遍历图G
    for(G的所有顶点u){//枚举G的所有顶点
        if(inq[u]==false){
            BFS(u);//遍历u所在的连通块
        }
    }
}
``` 
图的BFS和DFS类似，假如图是连通图，则只需要一次BFS即可。