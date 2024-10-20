alias:: Find Xor-Beauty of Array
- #CruelCoding #2023-02-01 #Hard #[[Bit Manipulation]] #[[XOR]] [讲解](https://youtu.be/luCMwYL3_K4) Rating-1549
- #算法 #Medium #[[数学]] #[[位运算]] #[[数组]]
- #Leetcode #Leetcode-2527 [LC国际](https://leetcode.com/problems/find-xor-beauty-of-array/) [LC中国](https://leetcode.cn/problems/find-xor-beauty-of-array/)
- # 题目
	- 给你一个下标从 **0** 开始的整数数组 `nums` 。
	- 三个下标 `i` ，`j` 和 `k` 的 **有效值** 定义为 `((nums[i] | nums[j]) & nums[k])` 。
	- 一个数组的 **xor 美丽值** 是数组中所有满足 `0 <= i, j, k < n`  **的三元组** `(i, j, k)` 的 **有效值** 的异或结果。
	- 请你返回 `nums` 的 xor 美丽值。
	- **注意：**
	- `val1 | val2` 是 `val1` 和 `val2` 的按位或。
	- `val1 & val2` 是 `val1` 和 `val2` 的按位与。
	-
	- **示例 1：**
		- **输入：**nums = [1,4]
		- **输出：**5
		- **解释：**
		- 三元组和它们对应的有效值如下：
		- - (0,0,0) 有效值为 ((1 | 1) & 1) = 1
		- - (0,0,1) 有效值为 ((1 | 1) & 4) = 0
		- - (0,1,0) 有效值为 ((1 | 4) & 1) = 1
		- - (0,1,1) 有效值为 ((1 | 4) & 4) = 4
		- - (1,0,0) 有效值为 ((4 | 1) & 1) = 1
		- - (1,0,1) 有效值为 ((4 | 1) & 4) = 4
		- - (1,1,0) 有效值为 ((4 | 4) & 1) = 0
		- - (1,1,1) 有效值为 ((4 | 4) & 4) = 4
		- 数组的 xor 美丽值为所有有效值的按位异或 1 ^ 0 ^ 1 ^ 4 ^ 1 ^ 4 ^ 0 ^ 4 = 5 。
		-
	- **示例 2：**
		- **输入：**nums = [15,45,20,2,34,35,5,44,32,30]
		- **输出：**34
		- `**解释：**数组的 xor 美丽值为 34 。`
		-
	- **提示：**
		- `1 <= nums.length <= 105`
		- `1 <= nums[i] <= 109`
- # 解
	- ```go
	  func xorBeauty(nums []int) int {
	      result := 0
	      for _, x := range nums {
	          result ^= x
	      }
	      return result
	  }
	  ```