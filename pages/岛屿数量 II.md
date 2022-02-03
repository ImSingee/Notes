- #Algorithm #Leetcode [#Leetcode-305](https://leetcode-cn.com/problems/number-of-islands-ii/) #Lintcode [#Lintcode-434](https://www.lintcode.com/problem/434/) #Hard
-
- ## 解答思路
	- 利用 #并查集 完成
- ## 答案
	- [利用数组并查集](https://github.com/algorithmzuo/algorithmbasic2020/blob/master/src/class15/Code03_NumberOfIslandsII.java)
	- [利用 map 并查集](https://www.lintcode.com/submission/27797844/?action_type=1) [代码](https://github.com/singee-study/algorithm-java/blob/master/zuo-algorithm-2020/class15/Code03_NumberOfIslandsII.java)
		- ```java
		  /**
		   * Definition for a point.
		   * class Point {
		   *     int x;
		   *     int y;
		   *     Point() { x = 0; y = 0; }
		   *     Point(int a, int b) { x = a; y = b; }
		   * }
		   */
		  
		  public class Solution {
		      public static class UnionFind {
		          private final Map<Point, Point> parents;
		          private final Map<Point, Integer> sizes;
		  
		          public UnionFind(int size) { // n 行 m 列
		              this.parents = new HashMap(size);
		              this.sizes = new HashMap(size);
		          }
		  
		          public void addPoint(Point point) {
		              this.parents.put(point, point);
		              this.sizes.put(point, 1);
		          }
		  
		          private Point getFinal(Point point) {
		              Point parent;
		              Stack<Point> stack = new Stack<>();
		  
		              while ((parent = parents.get(point)) != point) {
		                  stack.push(point);
		                  point = parent;
		              }
		  
		              while (!stack.isEmpty()) {
		                  this.parents.put(stack.pop(), parent);
		              }
		              
		              return parent;
		          }
		  
		          public void safeUnion(Point a, Point b) {
		              if (a != null && b != null) union(a, b);
		          }
		  
		          private void union(Point a, Point b) {
		              a = getFinal(a);
		              b = getFinal(b);
		  
		              if (a == b) return;
		  
		              int aSize = this.sizes.get(a);
		              int bSize = this.sizes.get(b);
		  
		              Point bigger = a, smaller = b;
		              if (aSize < bSize) {
		                  bigger = b;
		                  smaller = a;
		              }
		  
		              this.parents.put(smaller, bigger);
		              this.sizes.put(bigger, aSize + bSize);
		              this.sizes.remove(smaller);
		          }
		  
		          public int getCount() {
		              return this.sizes.size();
		          }
		      }
		  
		  
		      /**
		       * @param n: An integer
		       * @param m: An integer
		       * @param operators: an array of point
		       * @return: an integer array
		       */
		      public List<Integer> numIslands2(int n, int m, Point[] operators) {
		          if (operators == null || operators.length == 0) return Collections.emptyList();
		  
		          UnionFind u = new UnionFind(n*m);
		          Point[][] map = new Point[n][m];
		  
		          List<Integer> result = new ArrayList(operators.length);
		  
		          for (Point point: operators) {
		              if (map[point.x][point.y] == null) {
		                  map[point.x][point.y] = point;
		  
		                  u.addPoint(point);
		                  if (point.x >= 1) u.safeUnion(point, map[point.x-1][point.y]);
		                  if (point.x < n-1) u.safeUnion(point, map[point.x+1][point.y]);
		                  if (point.y >= 1) u.safeUnion(point, map[point.x][point.y-1]);
		                  if (point.y < m-1) u.safeUnion(point, map[point.x][point.y+1]);
		              }           
		  
		              result.add(u.getCount());
		          }
		  
		          return result;
		      }
		  }
		  ```
		- 适合 m n 较大的情形，避免初始化成本过高