alias:: 4Sum II

- #CruelCoding #2023-01-01 #Hard #[[Two Pointers]] [讲解](https://youtu.be/stXRx71prEE) Rating-1749
- #Algorithm #Medium #[[哈希表]] #[[数组]]
- #Leetcode #Leetcode-454 [LC国际](https://leetcode.com/problems/4sum-ii/) [LC中国](https://leetcode.cn/problems/4sum-ii/)
- # 题目
	- 给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4` ，数组长度都是 `n` ，请你计算有多少个元组 `(i, j, k, l)` 能满足：
	- `0 <= i, j, k, l < n`
	- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`
	-
	- **示例 1：**
		- **输入：**nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
		- **输出：**2
		- **解释：**
		- 两个元组如下：
		- 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
		- 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
	- **示例 2：**
		- **输入：**nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
		- **输出：**1
		-
		- **提示：**
		- `n == nums1.length`
		- `n == nums2.length`
		- `n == nums3.length`
		- `n == nums4.length`
		- `1 <= n <= 200`
		- `-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228`
- # 解
	- ```go
	  func fourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
	      m := map[int]int{}
	      
	      for _, x1 := range nums1 {
	          for _, x2 := range nums2 {
	              m[x1+x2]++
	          }
	      }
	      
	      count := 0
	      for _, x3 := range nums3 {
	          for _, x4 := range nums4 {
	              count += m[-(x3+x4)]
	          }
	      }
	      
	      return count
	  }
	  ```