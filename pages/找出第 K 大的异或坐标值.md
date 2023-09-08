alias:: Find Kth Largest XOR Coordinate Value
- #CruelCoding #2023-01-30 #Medium #[[Bit Manipulation]] #[[XOR]] [讲解](https://youtu.be/lTF3ilFtbyw) Rating-1671
- #算法 #Medium #[[矩阵]] #[[快速选择]] #[[前缀和]] #[[数组]] #[[位运算]] #[[分治]] #[[堆（优先队列）]]
- #Leetcode #Leetcode-1738 [LC国际](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/) [LC中国](https://leetcode.cn/problems/find-kth-largest-xor-coordinate-value/)
- # 题目
	- 给你一个二维矩阵 `matrix` 和一个整数 `k` ，矩阵大小为 `m x n` 由非负整数组成。
	- 矩阵中坐标 `(a, b)` 的 **值** 可由对所有满足 `0 <= i <= a < m` 且 `0 <= j <= b < n` 的元素 `matrix[i][j]`（**下标从 0 开始计数**）执行异或运算得到。
	- 请你找出 `matrix` 的所有坐标中第 `k` 大的值（**`k` 的值从 1 开始计数**）。
	-
	- **示例 1：**
		- **输出：**7
		- **解释：**坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
		-
	- **示例 2：**
		- **输出：**5
		- **解释：**坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
		-
	- **示例 3：**
		- **输出：**4
		- **解释：**坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
		-
	- **示例 4：**
		- **输出：**0
		- **解释：**坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。
		-
		-
		-
	- **提示：**
		- `m == matrix.length`
		- `n == matrix[i].length`
		- `1 <= m, n <= 1000`
		- `0 <= matrix[i][j] <= 106`
		- `1 <= k <= m * n`
- # 解
	- ## 暴力
		- ```go
		  func kthLargestValue(matrix [][]int, k int) int {
		      m, n := len(matrix), len(matrix[0])
		      
		      rowPrefix := new2dSlice(m, n)
		      for i := 0; i < m; i++ {
		          rowPrefix[i][0] = matrix[i][0]
		          for j := 1; j < n; j++ {
		              rowPrefix[i][j] = rowPrefix[i][j-1] ^ matrix[i][j]
		          }
		      }
		      columnPrefix := new2dSlice(m, n)
		      for j := 0; j < n; j++ {
		          columnPrefix[0][j] = matrix[0][j]
		          for i := 1; i < m; i++ {
		              columnPrefix[i][j] = columnPrefix[i-1][j] ^ matrix[i][j]
		          }
		      }
		      
		      coordinates := new2dSlice(m, n)
		      
		      for i := 0; i < m; i++ {
		          coordinates[i][0] = columnPrefix[i][0]
		      }
		      for j := 0; j < n; j++ {
		          coordinates[0][j] = rowPrefix[0][j]
		      }
		      
		      for i := 1; i < m; i++ {
		          for j := 1; j < n; j++ {
		              coordinates[i][j] = coordinates[i-1][j-1] ^ rowPrefix[i][j-1] ^ columnPrefix[i-1][j] ^ matrix[i][j]
		          }
		      }
		      
		      nums := make([]int, 0, m*n)
		      for i := 0; i < m; i++ {
		          for j := 0; j < n; j++ {
		              nums = append(nums, coordinates[i][j])
		          }
		      }
		      sort.Ints(nums)
		      
		      return nums[m*n-k]
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
	- ## 优化前缀和
		- ```go
		  func kthLargestValue(matrix [][]int, k int) int {
		      m, n := len(matrix), len(matrix[0])
		      
		      coordinates := new2dSlice(m, n)
		      coordinates[0][0] = matrix[0][0]
		      for j := 1; j < n; j++ {
		          coordinates[0][j] = coordinates[0][j-1] ^ matrix[0][j]
		      }
		      for i := 1; i < m; i++ {
		          coordinates[i][0] = coordinates[i-1][0] ^ matrix[i][0]
		      }
		      
		      for i := 1; i < m; i++ {
		          for j := 1; j < n; j++ {
		              coordinates[i][j] = coordinates[i-1][j] ^ coordinates[i][j-1] ^ coordinates[i-1][j-1] ^ matrix[i][j]
		          }
		      }
		      
		      nums := make([]int, 0, m*n)
		      for i := 0; i < m; i++ {
		          for j := 0; j < n; j++ {
		              nums = append(nums, coordinates[i][j])
		          }
		      }
		      sort.Ints(nums)
		      
		      return nums[m*n-k]
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
	- ## 堆优化
		- ```go
		  func kthLargestValue(matrix [][]int, k int) int {
		      m, n := len(matrix), len(matrix[0])
		      
		      coordinates := new2dSlice(m, n)
		      coordinates[0][0] = matrix[0][0]
		      for j := 1; j < n; j++ {
		          coordinates[0][j] = coordinates[0][j-1] ^ matrix[0][j]
		      }
		      for i := 1; i < m; i++ {
		          coordinates[i][0] = coordinates[i-1][0] ^ matrix[i][0]
		      }
		      
		      for i := 1; i < m; i++ {
		          for j := 1; j < n; j++ {
		              coordinates[i][j] = coordinates[i-1][j] ^ coordinates[i][j-1] ^ coordinates[i-1][j-1] ^ matrix[i][j]
		          }
		      }
		      
		      h := make(Heap, 0, k+1)
		      for i := 0; i < m; i++ {
		          for j := 0; j < n; j++ {
		              heap.Push(&h, coordinates[i][j])
		              if len(h) > k {
		                  heap.Pop(&h)
		              }
		          }
		      }
		      
		      return h[0]
		  }
		  
		  // generate a m*n grid slice
		  func new2dSlice(m, n int) [][]int {
		      matrix := make([][]int, m)
		      for i := range matrix {
		          matrix[i] = make([]int, n)
		      }
		      return matrix
		  }
		  
		  type Heap []int // Min Heap
		  
		  func (h Heap) Len() int            { return len(h) }
		  func (h Heap) Less(i, j int) bool  { return h[i] < h[j] }
		  func (h Heap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
		  func (h *Heap) Push(x interface{}) { *h = append(*h, x.(int)) }
		  func (h *Heap) Pop() interface{} {
		  	old := *h
		  	n := len(old)
		  	x := old[n-1]
		  	*h = old[0 : n-1]
		  	return x
		  }
		  ```
	- ## 二分
		- ```go
		  func kthLargestValue(matrix [][]int, k int) int {
		      m, n := len(matrix), len(matrix[0])
		      
		      coordinates := new2dSlice(m, n)
		      coordinates[0][0] = matrix[0][0]
		      for j := 1; j < n; j++ {
		          coordinates[0][j] = coordinates[0][j-1] ^ matrix[0][j]
		      }
		      for i := 1; i < m; i++ {
		          coordinates[i][0] = coordinates[i-1][0] ^ matrix[i][0]
		      }
		      
		      for i := 1; i < m; i++ {
		          for j := 1; j < n; j++ {
		              coordinates[i][j] = coordinates[i-1][j] ^ coordinates[i][j-1] ^ coordinates[i-1][j-1] ^ matrix[i][j]
		          }
		      }
		      
		      count := func(x int) int {
		          ret := 0
		          for i := 0; i < m; i++ {
		              for j := 0; j < n; j++ {
		                  if coordinates[i][j] >= x {
		                      ret++
		                  }
		              }
		          }
		          return ret
		      }
		      
		      L, R := 0, math.MaxInt32
		      for L < R {
		          mid := R - (R-L)/2
		          
		          if count(mid) < k {
		              R = mid-1
		          } else {
		              L = mid
		          }
		      }
		      return L
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
		- 最后的二分时间复杂度为 O(32 *m*n)