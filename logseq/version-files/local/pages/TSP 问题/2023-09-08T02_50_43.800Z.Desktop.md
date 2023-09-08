alias:: TSP,travelling salesman problem,travelling salesperson problem

- # 问题
- 有N个城市，任何两个城市之间的都有距离，任何一座城市到自己的距离都为0。所有点到点的距
  离都存在一个N*N的二维数组matrix里，也就是整张图由邻接矩阵表示。现要求一旅行商从k城市
  出发必须经过每一个城市且只在一个城市逗留一次，最后回到出发的k城，返回总距离最短的路的 距离。参数给定一个matrix，给定k。
-
- # 解
	- ## 状态压缩 + 记忆化搜索
	  collapsed:: true
		- [Test](https://github.com/singee-study/algorithm-go/blob/master/zuo-algorithm-2020/class44/02_tsp.go)
		- ```go
		  func TSP(matrix [][]int, k int) int {
		  	n := len(matrix)
		  
		  	state := (1 << n) - 1
		  	dp := new2dSlice(1<<n, len(matrix))
		  
		  	return process(matrix, k, dp, state, k)
		  }
		  
		  func process(matrix [][]int, k int, dp [][]int, state int, start int) int {
		  	if dp[state][start] != -1 {
		  		return dp[state][start]
		  	}
		  
		  	xs := state - (1 << start)
		  
		  	if xs == 0 { // 只剩下一个城市（这个城市必为 start）
		  		return matrix[start][k]
		  	}
		  
		  	dp[state][start] = math.MaxInt32
		  
		  	for i := 0; i < len(matrix); i++ {
		  		if xs&(1<<i) == 0 { // 这个城市已经被访问过了
		  			continue
		  		}
		  
		  		dp[state][start] = min(
		  			dp[state][start],
		  			process(matrix, k, dp, xs, i)+matrix[start][i],
		  		)
		  	}
		  
		  	return dp[state][start]
		  }
		  
		  func min(a, b int) int {
		  	if a < b {
		  		return a
		  	}
		  	return b
		  }
		  
		  // generate a m*n grid slice
		  func new2dSlice(m, n int) [][]int {
		  	matrix := make([][]int, m)
		  	for i := range matrix {
		  		matrix[i] = make([]int, n)
		  		for j := range matrix[i] {
		  			matrix[i][j] = -1
		  		}
		  	}
		  	return matrix
		  }
		  ```
	- ## 动态规划
		- #TODO 可行 [Code](https://github.com/algorithmzuo/algorithmbasic2020/blob/master/src/class43/Code02_TSP.java#L204)