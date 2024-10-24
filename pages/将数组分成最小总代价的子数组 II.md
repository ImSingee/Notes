alias:: Divide an Array Into Subarrays With Minimum Cost II
- #Algorithm #Hard
- #Leetcode #Leetcode-3013 [LC国际](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/) [LC中国](https://leetcode.cn/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/)
- # 题目
	- 给你一个下标从 **0** 开始长度为 `n` 的整数数组 `nums` 和两个 **正** 整数 `k` 和 `dist` 。
	- 一个数组的 **代价** 是数组中的 **第一个** 元素。比方说，`[1,2,3]` 的代价为 `1` ，`[3,4,1]` 的代价为 `3` 。
	- 你需要将 `nums` 分割成 `k` 个 **连续且互不相交** 的子数组，满足 **第二** 个子数组与第 `k` 个子数组中第一个元素的下标距离 **不超过** `dist` 。换句话说，如果你将 `nums` 分割成子数组 `nums[0..(i1 - 1)], nums[i1..(i2 - 1)], ..., nums[ik-1..(n - 1)]` ，那么它需要满足 `ik-1 - i1 <= dist` 。
	- 请你返回这些子数组的 **最小** 总代价。
	-
	- **示例 1：**
	- **输入：**nums = [1,3,2,6,4,2], k = 3, dist = 3
	- **输出：**5
	- **解释：**将数组分割成 3 个子数组的最优方案是：[1,3] ，[2,6,4] 和 [2] 。这是一个合法分割，因为 ik-1 - i1 等于 5 - 2 = 3 ，等于 dist 。总代价为 nums[0] + nums[2] + nums[5] ，也就是 1 + 2 + 2 = 5 。
	- 5 是分割成 3 个子数组的最小总代价。
	- **示例 2：**
	- **输入：**nums = [10,1,2,2,2,1], k = 4, dist = 3
	- **输出：**15
	- **解释：**将数组分割成 4 个子数组的最优方案是：[10] ，[1] ，[2] 和 [2,2,1] 。这是一个合法分割，因为 ik-1 - i1 等于 3 - 1 = 2 ，小于 dist 。总代价为 nums[0] + nums[1] + nums[2] + nums[3] ，也就是 10 + 1 + 2 + 2 = 15 。
	- 分割 [10] ，[1] ，[2,2,2] 和 [1] 不是一个合法分割，因为 ik-1 和 i1 的差为 5 - 1 = 4 ，大于 dist 。
	- 15 是分割成 4 个子数组的最小总代价。
	- **示例 3：**
	- **输入：**nums = [10,8,18,9], k = 3, dist = 1
	- **输出：**36
	- **解释：**将数组分割成 4 个子数组的最优方案是：[10] ，[8] 和 [18,9] 。这是一个合法分割，因为 ik-1 - i1 等于 2 - 1 = 1 ，等于 dist 。总代价为 nums[0] + nums[1] + nums[2] ，也就是 10 + 8 + 18 = 36 。
	- 分割 [10] ，[8,18] 和 [9] 不是一个合法分割，因为 ik-1 和 i1 的差为 3 - 1 = 2 ，大于 dist 。
	- 36 是分割成 3 个子数组的最小总代价。
	-
	- **提示：**
		- `3 <= n <= 105`
		- `1 <= nums[i] <= 109`
		- `3 <= k <= n`
		- `k - 2 <= dist <= n - 2`
- # 解
	- #TODO
- # 关联题目
	- TODO [[滑动窗口中位数]]