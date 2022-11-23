alias:: Number of Ways to Reach a Position After Exactly k Steps

- #CruelCoding #2022-11-22 #Medium #[[Combinatorics]] [讲解](https://youtu.be/1OdZ5lrdHPY) Rating-1751
- #Algorithm #Medium #[[组合数学]] #[[数学]] #[[动态规划]]
- #Leetcode #Leetcode-2400 [LC国际](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/) [LC中国](https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)
- # 题目
	- 给你两个 **正** 整数 `startPos` 和 `endPos` 。最初，你站在 **无限** 数轴上位置 `startPos` 处。在一步移动中，你可以向左或者向右移动一个位置。
	- 给你一个正整数 `k` ，返回从 `startPos` 出发、**恰好** 移动 `k` 步并到达 `endPos` 的 **不同** 方法数目。由于答案可能会很大，返回对 `10^9 + 7` **取余** 的结果。
	- 如果所执行移动的顺序不完全相同，则认为两种方法不同。
	- **注意：**数轴包含负整数**。**
		-
	- **示例 1：**
		- **输出：**3
		- **解释：**存在 3 种从 1 到 2 且恰好移动 3 步的方法：
		- - 1 -> 2 -> 3 -> 2.
		- - 1 -> 2 -> 1 -> 2.
		- - 1 -> 0 -> 1 -> 2.
		- 可以证明不存在其他方法，所以返回 3 。
		-
	- **示例 2：**
		- **输出：**0
		- **解释：**不存在从 2 到 5 且恰好移动 10 步的方法。
		-
		-
		-
	- **提示：**
		- `1 <= startPos, endPos, k <= 1000`
- # 解
	- ## 动态规划
		- ```go
		  const M = 1000000007
		  
		  func numberOfWays(startPos int, endPos int, k int) int {
		      d := abs(endPos-startPos)
		      
		      // 求 k 步从 0 走到 d 的方案数
		      if d > k {
		          return 0
		      }
		      
		      OFF := k+1
		      dp := new2dSlice(k+1, 2*k+5) // i 步从 0 走到 j 的方案数
		      
		      dp[0][OFF] = 1
		      
		      for i := 1; i <= k; i++ {
		          for j := -k; j <= k; j++ {
		              dp[i][j+OFF] = (dp[i-1][j-1+OFF] + dp[i-1][j+1+OFF]) % M
		          }
		      }
		      
		      return dp[k][d+OFF]
		  }
		  
		  // generate a m*n grid slice
		  func new2dSlice(m, n int) [][]int {
		      matrix := make([][]int, m)
		      for i := range matrix {
		          matrix[i] = make([]int, n)
		      }
		      return matrix
		  }
		  
		  func abs(x int) int {
		      if x >= 0 { return x } else { return -x }
		  }
		  ```
	- ## 组合数
		- d = endPos - startPos
		- ```go
		  const M = 1000000007
		  
		  func numberOfWays(startPos int, endPos int, k int) int {
		      d := abs(endPos-startPos)
		      
		      // 求 k 步从 0 走到 d 的方案数
		      if d > k {
		          return 0
		      }
		      
		      if (d+k) % 2 == 1 {
		          return 0
		      }
		      
		      return combs[k][(d+k)/2] % M
		  }
		  
		  var combs [][]int
		  
		  func init() {
		      N := 1005
		      combs = make([][]int, N)
		      
		      combs[0] = []int{1}
		      
		      for i := 1; i < N; i++ {
		          combs[i] = make([]int, i+1)
		          
		          combs[i][0] = 1
		          for j := 1; j < i; j++ {
		              combs[i][j] = (combs[i-1][j-1] + combs[i-1][j]) % M
		          }
		          combs[i][i] = 1        
		      }
		  }
		  
		  func abs(x int) int {
		      if x >= 0 { return x } else { return -x }
		  }
		  ```