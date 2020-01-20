---
title: PAT模板———使用Dijkstra算法记录所有最短路径
date: 2020-01-20 19:05:45
tags: PAT模板
categories: PAT模板
---

```c++
vector<int> pre[maxv];//保留前驱结点
int d[maxv];//记录距离，如d[2]便是起点到节点2的距离
int n;//n个结点
bool vis[maxv]={false};//标记结点是否被访问
void Dijkstra(int s){//s为起点2
    fill(d,d+maxv,inf);//数组初始化，inf为无穷
    d[s]=0;
    for(int i=0;i<n;i++){//寻找中介结点
        int u=-1,min=inf;//u为中介结点（与起始节点最近的点），min为最近距离
        for(int j=0;j<n;j++){
            if(vis[j]==false&&d[u]<min){
                min=d[j];
                u=j;
            }
        }
        if(u==-1) return;
        vis[u]=true;
        for(int v=0;v<n;v++){//进行松弛
            if(vis[u]==false&&G[u][v]!=inf){//中介点u未访问，且中介点u与目标终点v之间连通
                if(d[u]+G[u][v]<d[v]){//可以松弛
                    d[v]=d[u]+G[u][v];
                    pre[v].clear();//清空pre[v]
                    pre[v].push_back(u);//v的前驱为u
                }else if(d[u]+G[u][v]==d[v]){//存在长度相同的不同路线的最短路径
                    pre[v].push_back(u);
                }
            }
        }
    }

}
```