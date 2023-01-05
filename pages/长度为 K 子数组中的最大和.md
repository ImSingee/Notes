alias:: Maximum Sum of Distinct Subarrays With Length K

- #CruelCoding #2023-01-04 #Easy #[[Two Pointers]] [讲解](https://youtu.be/kl9iE2tQh_A) Rating-1552
- #Algorithm #Medium #[[滑动窗口]] #[[哈希表]] #[[数组]]
- #Leetcode #Leetcode-2461 [LC国际](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/) [LC中国](https://leetcode.cn/problems/maximum-sum-of-distinct-subarrays-with-length-k/)
- # 题目
	- 给你一个整数数组 `nums` 和一个整数 `k` 。请你从 `nums` 中满足下述条件的全部子数组中找出最大子数组和：
	- 子数组的长度是 `k`，且
	- 子数组中的所有元素 **各不相同 。**
	- 返回满足题面要求的最大子数组和。如果不存在子数组满足这些条件，返回 `0` 。
	- **子数组** 是数组中一段连续非空的元素序列。
	-
	- **示例 1：**
		- **输出：**15
		- **解释：**nums 中长度为 3 的子数组是：
		- - [1,5,4] 满足全部条件，和为 10 。
		- - [5,4,2] 满足全部条件，和为 11 。
		- - [4,2,9] 满足全部条件，和为 15 。
		- - [2,9,9] 不满足全部条件，因为元素 9 出现重复。
		- - [9,9,9] 不满足全部条件，因为元素 9 出现重复。
		- 因为 15 是满足全部条件的所有子数组中的最大子数组和，所以返回 15 。
	- **示例 2：**
		- **输出：**0
		- **解释：**nums 中长度为 3 的子数组是：
		- - [4,4,4] 不满足全部条件，因为元素 4 出现重复。
		- 因为不存在满足全部条件的子数组，所以返回 0 。
		-
	- **提示：**
		- `1 <= k <= nums.length <= 105`
		- `1 <= nums[i] <= 105`
- # 解
	- ## 暴力
		- ```go
		  func maximumSubarraySum(nums []int, k int) int64 {
		      curSum := 0
		      curCount := make([]int, 100005)
		      for i := 0; i < k; i++ {
		          curSum += nums[i]
		          curCount[nums[i]]++
		      }
		      
		      var maxSum int
		      if isUnique(curCount) {
		          maxSum = curSum
		      }
		      
		      for j := k; j < len(nums); j++ {
		          i := j-k
		          
		          curSum = curSum - nums[i] + nums[j]
		          curCount[nums[i]]--
		          curCount[nums[j]]++
		          
		          if isUnique(curCount) {
		              maxSum = max(maxSum, curSum)
		          }
		      }
		      
		      return int64(maxSum)
		  }
		  
		  func isUnique(curCount []int) bool {
		      for _, v := range curCount {
		          if v > 1 {
		              return false
		          }
		      }
		      return true
		  }
		  
		  func max(a, b int) int {
		      if a > b { return a } else { return b }
		  }
		  ```
	- ## 记录中间状态
		- ```go
		  func maximumSubarraySum(nums []int, k int) int64 {
		      curSum := 0
		      curCount := make([]int, 100005)
		      uniqueCount := 0
		      for i := 0; i < k; i++ {
		          curSum += nums[i]
		          curCount[nums[i]]++
		          
		          if curCount[nums[i]] == 1 {
		              uniqueCount++
		          }
		      }
		      
		      var maxSum int
		      if uniqueCount == k {
		          maxSum = curSum
		      }
		      
		      for j := k; j < len(nums); j++ {
		          i := j-k
		          
		          curSum = curSum - nums[i] + nums[j]
		          
		          curCount[nums[i]]--
		          if curCount[nums[i]] == 0 {
		              uniqueCount--
		          }
		          
		          curCount[nums[j]]++
		          if curCount[nums[j]] == 1 {
		              uniqueCount++
		          }
		          
		          if uniqueCount == k {
		              maxSum = max(maxSum, curSum)
		          }
		      }
		      
		      return int64(maxSum)
		  }
		  
		  func max(a, b int) int {
		      if a > b { return a } else { return b }
		  }
		  ```
	- ## 哈希表
		- ```go
		  type MultiSet struct {
		      values map[int]int
		  }
		  
		  func New() *MultiSet {
		      return &MultiSet{map[int]int{}}
		  }
		  
		  func (s *MultiSet) Add(x int) {
		      s.values[x]++
		  }
		  
		  func (s *MultiSet) Remove(x int) {
		      s.values[x]--
		      if s.values[x] == 0 {
		          delete(s.values, x)
		      }
		  }
		  
		  func (s *MultiSet) UniqueCount() int {
		      return len(s.values)
		  }
		  
		  func maximumSubarraySum(nums []int, k int) int64 {
		      n := len(nums)
		      sum := int64(0)
		      maxSum := int64(0)
		      set := New()
		      
		      for i := 0; i < k; i++ {
		          sum += int64(nums[i])
		          set.Add(nums[i])
		      }
		      if set.UniqueCount() == k {
		          maxSum = sum
		      }
		      
		      
		      for i := k; i < n; i++ {
		          sum += int64(nums[i]) - int64(nums[i-k])
		          set.Add(nums[i])
		          set.Remove(nums[i-k])
		          
		          // fmt.Println("sum to", i, "is", sum)
		          // fmt.Println(i, set.values, set.UniqueCount() )
		                  
		          if set.UniqueCount() == k {
		              maxSum = max(maxSum, sum)
		          }
		      }
		      
		      return maxSum
		  }
		  
		  func max(a, b int64) int64 {
		      if a > b {
		          return a
		      } else {
		          return b
		      }
		  }
		  ```