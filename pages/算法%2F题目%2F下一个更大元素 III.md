title:: 算法/题目/下一个更大元素 III

- alias:: Next Greater Element III
- #Algorithm #Medium #[[双指针]] #[[数学]] #[[字符串]]
- #Leetcode #Leetcode-556 [LC国际](https://leetcode.com/problems/next-greater-element-iii/) [LC中国](https://leetcode-cn.com/problems/next-greater-element-iii/)
- #lintcode #Lintcode-1174 [LintCode](https://www.lintcode.com/problem/1174/)
- # 题目
	- 给你一个正整数 `n` ，请你找出符合条件的最小整数，其由重新排列 `n`中存在的每位数字组成，并且其值大于 `n` 。如果不存在这样的正整数，则返回 `-1` 。
	- **注意** ，返回的整数应当是一个 **32 位整数** ，如果存在满足题意的答案，但不是 **32 位整数** ，同样返回 `-1` 。
	-
	- **示例 1：**
		- **输入：**n = 12
		- **输出：**21
	- **示例 2：**
		- **输入：**n = 21
		- **输出：**-1
		-
	- **提示：**
		- `1 <= n <= 231 - 1`
- # 解
	- 找到最后一个顺序对 (a, b)，在后面找到比 a 大的最小数字与 a 交换位置（这个数字一定存在，因为 b > a），然后将剩下的元素升序排序
	- ```go
	  func nextGreaterElement(n int) int {
	      nString := strconv.Itoa(n)
	      ints := make([]int, len(nString))
	      for i, c := range nString {
	          ints[i] = int(c - '0')
	      }
	  
	      x := -1
	      for i := 0; i < len(nString) - 1; i++ {
	          if ints[i] < ints[i + 1] {
	              x = i
	          }
	      }
	  
	      if x == -1 {
	          return -1
	      }
	  
	      y := x + 1
	      for i := x + 1; i < len(nString); i++ {
	          if ints[i] > ints[x] && ints[i] < ints[y] {
	              y = i
	          }
	      }
	  
	      ints[x], ints[y] = ints[y], ints[x]
	      sort.Ints(ints[x+1:])
	  
	      res := int64(0)
	      for _, num := range ints {
	          res = 10 * res + int64(num)
	      }
	  
	      if res > 2147483647 {// math.MaxInt32
	          return -1
	      }
	  
	      return int(res)
	  }
	  ```
	-
- # 解：纯数学方法
	- #TODO https://leetcode.cn/problems/next-greater-element-iii/solution/xia-yi-ge-geng-da-yuan-su-iii-by-leetcod-mqf1/ 方法二