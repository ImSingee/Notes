title:: 算法/题目/数组中的第K个最大元素

- alias:: Kth Largest Element in an Array
- #Algorithm #Medium #[[排序]] #[[数组]] #[[堆（优先队列）]] #[[分治]] #[[快速选择]]
- #Leetcode #Leetcode-215 [LC国际](https://leetcode.com/problems/kth-largest-element-in-an-array/) [LC中国](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
- # 题目
	- 给定整数数组 `nums` 和整数 `k`，请返回数组中第 `**k**` 个最大的元素。
	- 请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。
	-
	- **示例 1:**
		- **输入:** `[3,2,1,5,6,4] 和` k = 2
		- **输出:** 5
	- **示例 2:**
		- **输入:** `[3,2,3,1,2,4,5,5,6] 和` k = 4
		- **输出:** 4
		-
	- **提示：**
		- `1 <= k <= nums.length <= 104`
		- `-104 <= nums[i] <= 104`
-