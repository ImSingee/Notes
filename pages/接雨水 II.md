alias:: Trapping Rain Water II
- #CruelCoding #2022-12-15 #Hard #[[BFS+PQ]] #[[Dijkstra]] [讲解](https://youtu.be/uupOnJJxPbI)
- #算法 #Hard #[[矩阵]] #[[数组]] #[[堆（优先队列）]] #[[广度优先搜索]]
- #Leetcode #Leetcode-407 [LC国际](https://leetcode.com/problems/trapping-rain-water-ii/) [LC中国](https://leetcode.cn/problems/trapping-rain-water-ii/)
- #lintcode #Lintcode-364 [LintCode](https://www.lintcode.com/problem/364/)
- # 题目
	- 给你一个 `m x n` 的矩阵，其中的值均为非负整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。
	-
	- **示例 1:**
		- ![](https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg)
		- **输入:** heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
		- **输出:** 4
		- **解释:** 下雨后，雨水将会被上图蓝色的方块中。总的接雨水量为1+2+1=4。
	- **示例 2:**
		- ![](https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg)
		- **输入:** heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
		- **输出:** 10
		-
	- **提示:**
		- `m == heightMap.length`
		- `n == heightMap[i].length`
		- `1 <= m, n <= 200`
		- `0 <= heightMap[i][j] <= 2 * 104`
		-
- # 解
	- ```go
	  func trapRainWater(heightMap [][]int) int {
	      m, n := len(heightMap), len(heightMap[0])
	      h := &Heap{}
	      visited := new2dSlice(m, n)
	      for i := range heightMap {
	          for j, v := range heightMap[i] {
	              if i == 0 || i == m-1 || j == 0 || j == n-1 {
	                  heap.Push(h, Record{v, i, j})
	              }
	          }
	      }
	      
	      cur := 0
	      result := 0
	      for h.Len() != 0 {
	          record := heap.Pop(h).(Record)
	          x, y, v := record.X, record.Y, record.Weight
	          
	          if visited[x][y] {
	              continue
	          }
	          visited[x][y] = true
	          
	          if cur < v {
	              cur = v
	          }
	          result += cur - v
	  
	          
	          if x-1 >= 0 && !visited[x-1][y] {
	              heap.Push(h, Record{heightMap[x-1][y], x-1, y})
	          }
	          if x+1 < m && !visited[x+1][y] {
	              heap.Push(h, Record{heightMap[x+1][y], x+1, y})
	          }
	          if y-1 >= 0 && !visited[x][y-1] {
	              heap.Push(h, Record{heightMap[x][y-1], x, y-1})
	          }
	          if y+1 < n && !visited[x][y+1] {
	              heap.Push(h, Record{heightMap[x][y+1], x, y+1})
	          }
	      }
	      
	      return result
	  }
	  
	  type Record struct {
	      Weight int
	      X, Y int
	  }
	  
	  type Heap []Record // Min Heap
	  
	  func (h Heap) Len() int            { return len(h) }
	  func (h Heap) Less(i, j int) bool  { return h[i].Weight < h[j].Weight }
	  func (h Heap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
	  func (h *Heap) Push(x interface{}) { *h = append(*h, x.(Record)) }
	  func (h *Heap) Pop() interface{} {
	  	old := *h
	  	n := len(old)
	  	x := old[n-1]
	  	*h = old[0 : n-1]
	  	return x
	  }
	  
	  // generate a m*n grid slice
	  func new2dSlice(m, n int) [][]bool {
	      matrix := make([][]bool, m)
	      for i := range matrix {
	          matrix[i] = make([]bool, n)
	      }
	      return matrix
	  }
	  ```