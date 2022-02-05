- #图 #最小生成树算法 #贪心
-
- 该算法以顶点为单元，与图中边数无关，比较适合于稠密图
-
- ## 思路
	- 从任何一个点开始
	- 从这个点
- ## 代码（不防森林）
	- ```java
	  public static Set<Edge> primMST(Graph graph) {
	          Set<Node> nodeSet = new HashSet<>();
	          PriorityQueue<Edge> queue = new PriorityQueue<>(graph.edges.size(), Comparator.comparingInt(e -> e.weight));
	  
	          Node start = graph.getRandomNode();
	          nodeSet.add(start);
	          queue.addAll(start.edges);
	  
	          Set<Edge> result = new HashSet<>(graph.nodes.size());
	  
	          while (!queue.isEmpty()) {
	              Edge edge = queue.poll();
	              Node toNode = edge.to;
	  
	              if (nodeSet.contains(toNode)) continue;
	  
	              result.add(edge);
	              nodeSet.add(toNode);
	              queue.addAll(toNode.edges);
	          }
	  
	  
	          return result;
	      }
	  ```
- ## 代码（防森林）