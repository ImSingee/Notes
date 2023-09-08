alias:: Dijkstra, 单源最短路径算法
- #图 [读音](https://www.google.com/search?q=dijkstra+pronunciation)
- ## 算法前提
	- 权重均为正数
	- 有向图、可以有环
- ## 算法过程
	- 1）Dijkstra算法必须指定一个源点   
	  2）生成一个源点到各个点的最小距离表，一开始只有一条记录，即原点到自己的最小距离为0，源点到其他所有点的最小距离都为正无穷大  
	  3）从距离表中拿出没拿过记录里的最小记录，通过这个点发出的边，更新源点到各个点的最小距离表，不断重复这一步  
	  4）源点到所有的点记录如果都被拿过一遍，过程停止，最小距离表得到了
- ## 解法（最简单）
	- ```java
	  package class16;
	  
	  import java.util.*;
	  
	  public class Code06_Dijkstra {
	      public static HashMap<Node, Integer> dijkstra(Node from) {
	          Set<Node> fixedNodes = new HashSet<>();
	          HashMap<Node, Integer> result = new HashMap<>();
	          result.put(from, 0);
	  
	          Node current = from;
	          do {
	              int distance = result.get(current);
	  
	              for (Edge edge : current.edges) {
	                  int currentD = distance + edge.weight;
	                  int oldD = result.getOrDefault(edge.to, Integer.MAX_VALUE);
	  
	                  if (currentD < oldD) {
	                      result.put(edge.to, currentD);
	                  }
	              }
	  
	              fixedNodes.add(current);
	          } while ((current = getMinDistanceNode(result, fixedNodes)) != null);
	  
	          return result;
	      }
	  
	      private static Node getMinDistanceNode(Map<Node, Integer> distanceMap, Set<Node> excludes) {
	          Node minNode = null;
	          int minDistance = Integer.MAX_VALUE;
	  
	          for (Map.Entry<Node, Integer> entry : distanceMap.entrySet()) {
	              if (excludes.contains(entry.getKey())) continue;
	  
	              if (entry.getValue() < minDistance) {
	                  minDistance = entry.getValue();
	                  minNode = entry.getKey();
	              }
	          }
	  
	          return minNode;
	      }
	  }
	  
	  ```
- ## 解法（加强堆）
- ## 模板题
	- [[网络延迟时间]]
- ## 时间复杂度分析
	- [参考](https://oi-wiki.org/graph/shortest-path/#%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6)
	- 暴力：O(N^2 + E)
	- 二叉堆：O((N+E)logN)
	- 优先队列：O(ElogE)
	- 在稀疏图中，E=O(N)，使用二叉堆实现的 Dijkstra 算法较 Bellman-Ford 算法具有较大的效率优势；而在稠密图中，E=O(N^2)，这时候使用暴力做法较二叉堆实现更优。
-