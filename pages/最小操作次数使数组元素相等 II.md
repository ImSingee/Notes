alias:: Minimum Moves to Equal Array Elements II
- #CruelCoding #2022-10-28 #Easy #[[Math]] #[[Median Distance]] Rating-1692
- #算法 #Medium #[[排序]] #[[数组]] #[[数学]]
- #Leetcode #Leetcode-462 [LC国际](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/) [LC中国](https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/)
- #lintcode #Lintcode-1226 [LintCode](https://www.lintcode.com/problem/1226/)
- # 题目
	- 给你一个长度为 `n` 的整数数组 `nums` ，返回使所有数组元素相等需要的最小操作数。
	- 在一次操作中，你可以使数组中的一个元素加 `1` 或者减 `1` 。
	-
	- **示例 1：**
		- **输入：**nums = [1,2,3]
		- **输出：**2
		- **解释：**
		- 只需要两次操作（每次操作指南使一个元素加 1 或减 1）：
		- [***1***,2,3] => [2,2,***3***] => [2,2,2]
	- **示例 2：**
		- **输入：**nums = [1,10,2,9]
		- **输出：**16
		-
	- **提示：**
		- `n == nums.length`
		- `1 <= nums.length <= 105`
		- `-109 <= nums[i] <= 109`
- # 解
	- ```go
	  func minMoves2(nums []int) int {
	      sort.Ints(nums)
	      n := nums[len(nums)/2]
	      
	      count := 0
	      for _, num := range nums {
	          count += abs(num - n)
	      }
	      return count
	  }
	  
	  func abs(x int) int {
	      if x >= 0 { return x } else { return -x }
	  }
	  ```