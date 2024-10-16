alias:: Kth Largest Sum in a Binary Tree
- #算法 #Medium #[[树]] #[[广度优先搜索]] #[[二分查找]]
- #Leetcode #Leetcode-2583 [LC国际](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/) [LC中国](https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree/)
- # 题目
	- 给你一棵二叉树的根节点 `root` 和一个正整数 `k` 。
	- 树中的 **层和** 是指 **同一层** 上节点值的总和。
	- 返回树中第 `k` 大的层和（不一定不同）。如果树少于 `k` 层，则返回 `-1` 。
	- **注意**，如果两个节点与根节点的距离相同，则认为它们在同一层。
	-
	- **示例 1：**
		- ![](https://assets.leetcode.com/uploads/2022/12/14/binaryytreeedrawio-2.png)
		- **输入：**root = [5,8,9,2,1,3,7,4,6], k = 2
		- **输出：**13
		- **解释：**树中每一层的层和分别是：
		- - Level 1: 5
		- - Level 2: 8 + 9 = 17
		- - Level 3: 2 + 1 + 3 + 7 = 13
		- - Level 4: 4 + 6 = 10
		- 第 2 大的层和等于 13 。
	- **示例 2：**
		- ![](https://assets.leetcode.com/uploads/2022/12/14/treedrawio-3.png)
		- **输入：**root = [1,2,null,3], k = 1
		- **输出：**3
		- **解释：**最大的层和是 3 。
		-
	- **提示：**
		- 树中的节点数为 `n`
		- `2 <= n <= 105`
		- `1 <= Node.val <= 106`
		- `1 <= k <= n`
- # 解
	- ```go
	  /**
	   * Definition for a binary tree node.
	   * type TreeNode struct {
	   *     Val int
	   *     Left *TreeNode
	   *     Right *TreeNode
	   * }
	   */
	  func kthLargestLevelSum(root *TreeNode, k int) int64 {
	      
	      queue := make([]*TreeNode, 0, k)
	      queue = append(queue, root)
	      
	      sums := make([]int, 0, 64)
	      
	      for len(queue) > 0 {
	          n := len(queue)
	          s := 0
	          for i := 0; i < n; i++ {
	              s += queue[i].Val
	              if queue[i].Left != nil {
	                  queue = append(queue, queue[i].Left)
	              }
	              if queue[i].Right != nil {
	                  queue = append(queue, queue[i].Right)
	              }
	          }
	          sums = append(sums, s)
	          queue = queue[n:]
	      }
	      
	      if len(sums) < k {
	          return -1
	      }
	      
	      sort.Ints(sums)
	      
	      return int64(sums[len(sums)-k])
	  }
	  ```