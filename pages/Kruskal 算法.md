- #图 #最小生成树算法 #贪心 #并查集
-
- ## 思路
	- 从权重最小的边开始
	- 如果当前边不会导致环的形成，则标记使用当前边，否则放弃
		- 判断是否会导致环的形成利用的是 [[并查集]]
-
- ## 代码
	- ```java
	  package class16;
	  
	  import java.util.*;
	  import java.util.stream.*;
	  
	  public class Code04_Kruskal {
	      public static class UnionFind {
	  //        private final Graph graph;
	  
	          private final Map<Node, Node> parents;
	  
	          public UnionFind(Graph graph) {
	  //            this.graph = graph;
	              this.parents = new HashMap<>(graph.nodes.size());
	  
	              for (Node node : graph.nodes.values()) {
	                  this.parents.put(node, node);
	              }
	          }
	  
	          private Node getFinal(Node x) {
	              while (parents.get(x) != x) {
	                  x = parents.get(x);
	              }
	  
	              return x;
	          }
	  
	          public void connect(Edge edge) {
	              Node from = getFinal(edge.from);
	              Node to = getFinal(edge.to);
	  
	              if (from != to) {
	                  parents.put(from, to);
	              }
	          }
	  
	          public boolean willCircle(Edge edge) {
	              Node from = getFinal(edge.from);
	              Node to = getFinal(edge.to);
	  
	              return from == to;
	          }
	      }
	  
	      public static Set<Edge> kruskalMST(Graph graph) {
	          UnionFind set = new UnionFind(graph);
	          Set<Edge> result = new HashSet<>();
	          Queue<Edge> edgeQueue = graph.edges.stream().sorted(Comparator.comparingInt(e -> e.weight)).collect(Collectors.toCollection(LinkedList::new));
	  
	          while (!edgeQueue.isEmpty()) {
	              Edge edge = edgeQueue.poll();
	  
	              if (!set.willCircle(edge)) {
	                  result.add(edge);
	                  set.connect(edge);
	              }
	          }
	  
	          return result;
	      }
	  }
	  
	  ```