title:: 算法/题目/最少移动次数使数组元素相等 II

- alias:: Minimum Moves to Equal Array Elements II
- #Algorithm #Medium #[[排序]] #[[数学]] #[[数组]]
- #Leetcode #Leetcode-462 [LC国际](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/) [LC中国](https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii/)
- #lintcode #Lintcode-1226 [LintCode](https://www.lintcode.com/problem/1226/)
- # 题目
	- 给你一个长度为 `n` 的整数数组 `nums` ，返回使所有数组元素相等需要的最少移动数。
	- 在一步操作中，你可以使数组中的一个元素加 `1` 或者减 `1` 。
	-
	- **示例 1：**
		- **输入：**nums = [1,2,3]
		- **输出：**2
		- **解释：**
		- 只需要两步操作（每步操作指南使一个元素加 1 或减 1）：
		- [***1***,2,3] => [2,2,***3***] => [2,2,2]
	- **示例 2：**
		- **输入：**nums = [1,10,2,9]
		- **输出：**16
		-
	- **提示：**
		- `n == nums.length`
		- `1 <= nums.length <= 105`
		- `-109 <= nums[i] <= 109`
- # 解：排序
	- ```go
	  func minMoves2(nums []int) int {
	      sort.Ints(nums)
	      
	      return calcMoves(nums, nums[len(nums) / 2])
	  }
	  
	  func calcMoves(nums []int, target int) int {
	      count := 0
	      for _, num := range nums {
	          count += abs(num - target)
	      }
	      return count
	  }
	  
	  func abs(x int) int {
	      if x >= 0 { return x } else { return -x }
	  }
	  ```
	- 时间复杂度 O(NlogN)
	- 空间复杂度 O(logN) （排序）
	- https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/solution/by-fuxuemingzhu-13z3/
- # 解：快速选择
	- 直接取出第 N/2 大的数字，然后进行计算
	- #TODO https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/solution/zui-shao-yi-dong-ci-shu-shi-shu-zu-yuan-xt3r2/ 方法二
	- 参考：[[算法/题目/数组中的第K个最大元素]]