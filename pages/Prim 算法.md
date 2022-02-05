- #图 #最小生成树算法 #贪心
-
- 该算法以顶点为单元，与图中边数无关，比较适合于稠密图
-
- ## 思路
	- 1. 从任何一个点开始出发
	- 2. 某个点加入到被选取的点中后，解锁这个点出发的所有新的边
	- 3. 在所有解锁的边中选最小的边，然后看看这个边会不会形成环
	- 4. 如果会，不要当前边，继续考察剩下解锁的边中最小的边，重复3
	- 5. 如果不会，要当前边，将该边的指向点加入到被选取的点中，重复2
	- 6. 当所有点都被选取，最小生成树就得到了
- ## 代码（无森林）
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
- ## 代码（森林）
	- ```java
	  public static Set<Edge> forestPrimMST(Graph graph) {
	          Set<Node> nodeSet = new HashSet<>(graph.nodes.size());
	          PriorityQueue<Edge> queue = new PriorityQueue<>(graph.edges.size(), Comparator.comparingInt(e -> e.weight));
	          Set<Edge> result = new HashSet<>(graph.nodes.size());
	  
	          for (Node node : graph.nodes.values()) {
	              if (nodeSet.contains(node)) continue;
	  
	              nodeSet.add(node);
	              queue.addAll(node.edges);
	  
	              while (!queue.isEmpty()) {
	                  Edge edge = queue.poll();
	                  Node toNode = edge.to;
	  
	                  if (nodeSet.contains(toNode)) continue;
	  
	                  result.add(edge);
	                  nodeSet.add(toNode);
	                  queue.addAll(toNode.edges);
	              }
	          }
	  
	          return result;
	      }
	  ```