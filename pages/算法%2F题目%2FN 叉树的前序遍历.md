title:: 算法/题目/N 叉树的前序遍历

- alias:: N-ary Tree Preorder Traversal
- #Algorithm #Easy #[[栈]] #[[树]] #[[深度优先搜索]]
- #Leetcode #Leetcode-589 [LC国际](https://leetcode.com/problems/n-ary-tree-preorder-traversal/) [LC中国](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)
- #lintcode #Lintcode-1526 [LintCode](https://www.lintcode.com/problem/1526/)
- # 题目
  collapsed:: true
	- 给定一个 n 叉树的根节点  `root` ，返回 *其节点值的 **前序遍历*** 。
	- n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 `null` 分隔（请参见示例）。
	  	<p><br />
	  	<strong>示例 1：</strong></p>
	- ![Replaced by Image Uploader](https://vip2.loli.io/2022/08/09/L4qCAnTNmHDhOJZ.png)
	- **输入：**root = [1,null,3,2,4,null,5,6]
	- **输出：**[1,3,5,6,2,4]
	- **示例 2：**
		- ![Replaced by Image Uploader](https://vip2.loli.io/2022/08/09/CaPp1o6DsqeYF4K.png)
		- **输入：**root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
		- **输出：**[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
		-
	- **提示：**
		- 节点总数在范围 `[0, 104]`内
		- `0 <= Node.val <= 104`
		- n 叉树的高度小于或等于 `1000`
		-
	- **进阶：**递归法很简单，你可以使用迭代法完成此题吗?
- # 解：递归
	- ```go
	  /**
	   * Definition for a Node.
	   * type Node struct {
	   *     Val int
	   *     Children []*Node
	   * }
	   */
	  
	  func preorder(root *Node) (result []int) {
	      if root != nil {
	          apply(&result, root)
	      }
	      
	      return
	  }
	  
	  func apply(result *[]int, root *Node) {
	      *result = append(*result, root.Val)
	      
	      for _, child := range root.Children {
	          if child != nil {
	              apply(result, child)
	          }
	      }
	  }
	  ```
- # 解：迭代
	- ```go
	  /**
	   * Definition for a Node.
	   * type Node struct {
	   *     Val int
	   *     Children []*Node
	   * }
	   */
	  
	  func preorder(root *Node) []int {
	      if root == nil {
	          return nil
	      }
	      
	      stack := make([]*Node, 0, 10000)
	      result := make([]int, 0, 10000)
	      
	      stack = append(stack, root)
	      for len(stack) != 0 {
	          node := stack[len(stack) - 1]
	          stack = stack[:len(stack) - 1]
	          
	          result = append(result, node.Val)
	          
	          for i := len(node.Children) - 1; i >= 0; i-- {
	              child := node.Children[i]
	              if child != nil {
	                  stack = append(stack, child)
	              }
	          }
	      }
	      
	      return result
	  }
	  ```