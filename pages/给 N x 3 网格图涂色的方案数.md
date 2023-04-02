alias:: Number of Ways to Paint N × 3 Grid

- #CruelCoding #2023-04-01 #Medium #[[DP]] #[[BitMask]] [讲解](https://youtu.be/LwD9UIDIvHE)
- #Algorithm #Hard #[[动态规划]]
- #Leetcode #Leetcode-1411 [LC国际](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/) [LC中国](https://leetcode.cn/problems/number-of-ways-to-paint-n-3-grid/)
- # 题目
	- 你有一个 `n x 3` 的网格图 `grid` ，你需要用 **红，黄，绿** 三种颜色之一给每一个格子上色，且确保相邻格子颜色不同（也就是有相同水平边或者垂直边的格子颜色不同）。
	- 给你网格图的行数 `n` 。
	- 请你返回给 `grid` 涂色的方案数。由于答案可能会非常大，请你返回答案对 `10^9 + 7` 取余的结果。
	-
	- **示例 1：**
		- **输出：**12
		- **解释：**总共有 12 种可行的方法：
		- ![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/04/12/e1.png)
	- **示例 2：**
		- **输出：**54
	- **示例 3：**
		- **输出：**246
	- **示例 4：**
		- **输出：**106494
	- **示例 5：**
		- **输出：**30228214
		-
	- **提示：**
		- `n == grid.length`
		- `grid[i].length == 3`
		- `1 <= n <= 5000`
- # 解
	- ## 动态规划
		- 利用三进制规划模式
		- ```go
		  const MOD = 1_000_000_000 + 7
		  
		  func numOfWays(n int) int {
		      dp := [27]int{}
		      
		      for j := 0; j < 27; j++ {
		          if selfOK(j) {
		              dp[j] = 1
		          }
		      }
		      
		      for i := 1; i < n; i++ {
		          prev := dp
		          
		          for p := 0; p < 27; p++ {
		              if !selfOK(p) {
		                  continue
		              }
		              
		              for q := 0; q < 27; q++ {
		                  if !selfOK(q) || !crossOK(p, q) {
		                      continue
		                  }
		                  
		                  dp[p] = (dp[p] + prev[q]) % MOD
		              }
		          }
		      }
		      
		      return sum(dp[:]) 
		  }
		  
		  func sum(arr []int) int {
		      s := 0
		      for _, x := range arr {
		          s = (s + x) % MOD
		      }
		      return s
		  }
		  
		  
		  func convert(p int) (result [3]int) {
		      i := 0
		      
		      for p != 0 {
		          result[i] = p % 3
		          p /= 3
		          i++
		      }
		      
		      return
		  }
		  
		  func selfOK(p int) bool {
		      temp := convert(p)
		      
		      return temp[0] != temp[1] && temp[1] != temp[2]
		  }
		  
		  func crossOK(p, q int) bool {
		      temp1 := convert(p)
		      temp2 := convert(q)
		      
		      return temp1[0] != temp2[0] && temp1[1] != temp2[1] && temp1[2] != temp2[2]
		  }
		  ```