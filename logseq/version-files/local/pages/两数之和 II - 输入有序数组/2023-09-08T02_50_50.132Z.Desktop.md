alias:: Two Sum II - Input Array Is Sorted

- #CruelCoding #2023-01-01 #Hard #[[Two Pointers]] [讲解](https://youtu.be/stXRx71prEE) Rating-1749
- #算法 #Medium #[[二分查找]] #[[数组]] #[[双指针]]
- #Leetcode #Leetcode-167 [LC国际](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) [LC中国](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)
- #lintcode #Lintcode-608 [LintCode](https://www.lintcode.com/problem/608/)
- # 题目
	- 给你一个下标从 **1** 开始的整数数组 `numbers` ，该数组已按**非递减顺序排列** ，请你从数组中找出满足相加之和等于目标数 `target` 的两个数。如果设这两个数分别是 `numbers[index1]` 和 `numbers[index2]` ，则 `1 <= index1 < index2 <= numbers.length` 。
	- 以长度为 2 的整数数组 `[index1, index2]` 的形式返回这两个整数的下标 `index1`和`index2`。
	- 你可以假设每个输入 **只对应唯一的答案** ，而且你 **不可以** 重复使用相同的元素。
	- 你所设计的解决方案必须只使用常量级的额外空间。
	  	&nbsp;
	- **示例 1：**
		- **输入：**numbers = [***2***,***7***,11,15], target = 9
		- **输出：**[1,2]
		- **解释：**2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
		-
	- **示例 2：**
		- **输入：**numbers = [***2***,3,***4***], target = 6
		- **输出：**[1,3]
		- **解释：**2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
		-
	- **示例 3：**
		- **输入：**numbers = [***-1***,***0***], target = -1
		- **输出：**[1,2]
		- **解释：**-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
		-
	- **提示：**
		- `2 <= numbers.length <= 3 * 104`
		- `-1000 <= numbers[i] <= 1000`
		- `numbers` 按 **非递减顺序** 排列
		- `-1000 <= target <= 1000`
		- **仅存在一个有效答案**
- # 解
	- 双指针（标准模板，可用于 [[3Sum]]）
	- ```go
	  func twoSum(nums []int, target int) []int {
	      i, j := 0, len(nums) - 1
	      for i < j {
	          a, b := nums[i], nums[j]
	          
	          if a + b == target {
	              return []int{i+1, j+1}
	          }
	          
	          if a+b <= target {
	              i++
	              for i < j && nums[i] == nums[i-1] { i++ }
	          }
	          if a+b >= target {
	              j--
	              for i < j && nums[j] == nums[j+1] { j-- }
	          }
	      }
	      return nil
	  }
	  ```
	- 因为题目确认只有一个解法，因此简化成
	- ```go
	  func twoSum(nums []int, target int) []int {
	      i, j := 0, len(nums) - 1
	      for i < j {
	          a, b := nums[i], nums[j]
	          
	          if a + b == target {
	              return []int{i+1, j+1}
	          } else if a + b > target {
	              j--
	          } else {
	              i++
	          }
	      }
	      return nil
	  }
	  ```