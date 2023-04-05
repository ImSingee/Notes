alias:: travelling salesman problem,travelling salesperson problem

- # 问题
- 有N个城市，任何两个城市之间的都有距离，任何一座城市到自己的距离都为0。所有点到点的距
  离都存在一个N*N的二维数组matrix里，也就是整张图由邻接矩阵表示。现要求一旅行商从k城市
  出发必须经过每一个城市且只在一个城市逗留一次，最后回到出发的k城，返回总距离最短的路的 距离。参数给定一个matrix，给定k。
-
- # 解
	- ## 状态压缩 + 记忆化搜索
		-