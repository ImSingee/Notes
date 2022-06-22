title:: 算法/题目/数组中的第K个最大元素

- alias:: Kth Largest Element in an Array
- #Algorithm #Medium #[[排序]] #[[数组]] #[[堆]] #[[分治]] #[[快速选择]] #bfprt #快速排序
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
- # 解法一：排序（略）
	- 时间复杂度 O(NlogN)
	- 空间复杂度 O(1)
- # 解法二：快速排序改写
	- 时间复杂度 O(N)
		- 使用 #bfprt 算法是严格 O(N)，否则是概率 O(N)
	- 空间复杂度 O(N+)
	- ```go
	  func findKthLargest(nums []int, k int) int { // k is 1-based    
	      sort.Ints(nums)
	      return findKthMinest(nums, len(nums) - k)
	  }
	  
	  func findKthMinest(nums []int, k int) int { // k is 0-based
	      // fmt.Println("findKthMinest", nums, k)
	      if len(nums) == 1 && k == 0 {
	          return nums[0]
	      }
	      
	      L, R := 0, len(nums) - 1
	      
	      for L <= R {
	          pivot := bfprt(nums[L:R+1]) // nums[L] // bfprt(nums[L:R+1])
	          
	          el, er := handle(nums, L, R, pivot)
	          // fmt.Println(nums, el, er, pivot)
	          
	          if k < el {
	              R = el - 1
	          } else if k > er {
	              L = er + 1
	          } else {
	              return nums[el]
	          }
	      }
	      
	      
	      return -1 // impossible
	  }
	  
	  func handle(nums []int, L, R int, pivot int) (int, int) {
	      p, el, er := L, L, R
	      for p <= er {
	          if nums[p] < pivot {
	              nums[el], nums[p] = nums[p], nums[el]
	              el++
	              p++
	          } else if nums[p] == pivot {
	              p++
	          } else { // >
	              nums[er], nums[p] = nums[p], nums[er]
	              er--
	          }
	      }
	      
	      return el, er
	  }
	  
	  func bfprt(nums []int) int {
	      // fmt.Println("bfprt", nums)
	      mod := len(nums) % 5
	      
	      arr := make([]int, 0, len(nums)/5+1)
	      
	      for i := 0; i < len(nums) / 5; i++ {
	          sort.Ints(nums[5*i:5*i+5])
	          arr = append(arr, nums[5*i+2])
	      }
	      if mod != 0 {
	          r := len(nums) - mod
	          sort.Ints(nums[r:])
	          arr = append(arr, nums[r+mod/2])
	      }
	      
	      return findKthMinest(arr, len(arr) / 2)
	  }
	  ```
- # 解法三：大根堆
	- #TODO
- # 解法四：小根堆
	- #TODO