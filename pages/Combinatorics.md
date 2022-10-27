id:: 6357e6f5-4954-4e4c-bfbe-8d0dc9df1f6e
alias:: 组合数学

- 组合数 C
	- C(n, k) 在 n 个数中取 k 个有多少种取法
	- C(n, k) = A(n, k) / k! = n! / (k! * (n-k)!)
	- C(n, k) = C(n, n-k)
		- 在 n 个数中取 k 个的取法与取 n-k 个的取法相同
	- C(n, k) = C(n-1, k-1) + C(n-1, k)
		- [杨辉三角](https://zh.m.wikipedia.org/zh-cn/%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92%E5%BD%A2)
	- C(n, 0) = C(n, n) = 1
-
- ### 求组合数
	- ```go
	  var combs [][]int
	  func C(n, k int) int {
	      return combs[n][k]
	  } 
	  
	  
	  func init() {
	      N := 10000
	      combs = new2dSlice(N, N)
	      for n := 1; n < N; n++ {
	          combs[n][0] = 1
	          combs[n][n] = 1
	          for k := 1; k < n; k++ {
	              combs[n][k] = combs[n-1][k] + combs[n-1][k-1] 
	          }
	      }
	  }
	  
	  // generate a m*n grid slice
	  func new2dSlice(m, n int) [][]int {
	      matrix := make([][]int, m)
	      for i := range matrix {
	          matrix[i] = make([]int, n)
	      }
	      return matrix
	  }
	  ```
- ### 插排法
	-