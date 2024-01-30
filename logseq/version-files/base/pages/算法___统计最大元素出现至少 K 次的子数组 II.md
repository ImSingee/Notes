- 给你一个整数数组 `nums` 和一个 **正整数** `k` 。
- 请你统计有多少满足 「 子数组中的 **最大** 元素」至少出现 `k` 次的子数组，并返回满足这一条件的子数组的数目。
- ## 注释
	- 来源：灵神 [LeetCode 2962]([[统计最大元素出现至少 K 次的子数组]]) 题目的题解中给出的[思考题](https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/2560940/hua-dong-chuang-kou-fu-ti-dan-pythonjava-xvwg/comments/2192840/)
	- 给出的提示：单调栈、[[子数组的最小值之和]]
	- 网友给出的答案： https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/2560940/hua-dong-chuang-kou-fu-ti-dan-pythonjava-xvwg/comments/2192840
		- 维护一个单调不增队列 每次加入新元素nums[i]前 需要将小于当前元素的出队，不妨假设假设当前队列为q，其大小为siz，此时q[siz-1]被出队 说明nums[q[siz-1]的右边界（第一个大于）的下标就是i，如果q的大小siz是大于等于k的且 nums[q[siz-k]]==nums[q[siz-1]] 说明队列里倒数k个都的下标的值都是一样的 且他们一定是nums里下标从q[siz-k]~q[siz-1]的最大值 因为能在队列里 说明中间一定没有比他们大的 否则就被出队了！
		  此时我们把q[siz-k]~q[siz-1]看成一个整体 已经包含了k个最大值了 那么其方案数是多少，其左边界就是第一个**大于等于**nums[q[siz-1]]的 回顾我们队列单调不增的特性，容易得到下标就是q[siz-k-1] 就是在队列里再向左一个（如果siz-k已经是第0个了 那么左边界是-1） 其右边界是一个**大于** nums[q[siz-1]]的下标 其实就是i，因为nums[i]要入队才导致他们要出队的 方案数其实就为 (q[siz-k] - q[siz-k-1]) * (i-q[siz-1])
		- 下面countSubarrays中是我的实现代码和注释 后面几个函数是我写的一个暴力求解用于对拍的程序 大家可以拷贝到编辑器中测试下~
		- ```java
		  public long countSubarrays(int[] nums, int k) {
		          int n = nums.length;
		          // 保持单调不增队列 因为ArrayDeque不支持下标索引 所以用list来模拟
		          ArrayList<Integer> list = new ArrayList<>();
		          int siz = 0;
		          long res = 0;
		          for (int i = 0; i < n; i++) {
		              // 需要将小于当前值的出队 意味着下标i就是被出队元素的右边界
		              // 如果只考虑 k=1的情况下 对于下标为i的元素 其左边界为第一个 大于等于 nums[i]的数 不妨令其下标为l
		              // 右边界是第一个 大于 nums[i]的数 令其下标为r 此时nums[i] 作为最大数的子数组个数为 (r-i) * (i-l)
		              // 相同的思想 可以把连续k个作为一个整体 然后套上面的思路 同时也要求了 队列里尾部至少有k个值相同的下标才行
		              while (siz > 0 && nums[list.get(siz-1)] < nums[i]) {
		                  // 队列里至少有k个数 才能保证出队的第一个元素有k个 是一个必要条件
		                  // 队列里倒数第k个 和倒数第一个相等 因为队列是单调不增的 相当于快速判断了末尾k个都是相等的
		                  if (siz >= k && nums[list.get(siz-1)] == nums[list.get(siz-k)]) {
		                      // 检测倒数第k个左边时候还有值 也就是这个整体左边界 第一个大于等于的下标 
		                      //  因此我们需要判断倒数第k个是不是最大数 如果是 说明其左边界是-1 不然左边界是队列里再往左一个
		                      // 再次回顾 维护的队列是单调不减的
		                      if (siz-k != 0) {
		                          // 队列倒数第k个的左边还有值 再往左一个的下标就是其边界 假设倒数第k个在list的下标为j的话 对应回前面的思想 其左边数量是 list.get(j) - list.get(j-1)
		                          // 对应回上面的(i-l)*(r-i) 把list.get(siz-k)到list.get(siz-1)看成一个整体
		                          res += (long)(list.get(siz-k) - list.get(siz-k-1))* (i - list.get(siz-1));
		                      } else {
		                          // 可以认为有一个超大数是在-1的位置 作为所有数的左边界
		                          res += (long)(list.get(siz-k) + 1) * (i - list.get(siz-1));
		                      }
		                  }
		                  list.remove(siz-1);
		                  siz--;
		              }
		              list.add(i);
		              siz++;
		          }
		          // 将list里面的全弹出来 可以认为是有一个超大的数入队 把之前的全弹出来
		          while (siz > 0) {
		              if (siz >= k && nums[list.get(siz-1)] == nums[list.get(siz-k)]) {
		                  if (siz-k == 0) {
		                      res += (long)(list.get(siz-k)+1) * (n - list.get(siz-1));
		                  } else {
		                      res += (long)(list.get(siz-k) - list.get(siz-k-1))* (n - list.get(siz-1));
		                  }
		              }
		              list.remove(siz-1);
		              siz--;
		          }
		          return res;
		      }
		  
		      public void build() {
		          int[] randomArray = generateRandomIntArray(10000, 1, 10);
		          long r2 = countSubarrays(randomArray,5);
		          System.out.println(r2);
		          System.out.println("------");
		          long r1 = solve(randomArray,5);
		          System.out.println(r1);
		  
		  
		          if (r1 != r2) {
		              for (int i = 0; i < randomArray.length; i++) {
		                  System.out.print(randomArray[i]+" ");
		              }
		          }
		      }
		  
		      public int[] generateRandomIntArray(int length, int minValue, int maxValue) {
		          int[] result = new int[length];
		          Random random = new Random();
		  
		          for (int i = 0; i < length; i++) {
		              result[i] = random.nextInt(maxValue - minValue + 1) + minValue;
		          }
		  
		          return result;
		      }
		  
		      public long solve(int[] nums, int k) {
		          int n = nums.length;
		          long res = 0;
		          for (int i = 0; i < n; i++) {
		              HashMap<Integer, Integer> map = new HashMap<>();
		              int max = 0;
		              for (int j = i; j < n; j++) {
		                  max = Math.max(max, nums[j]);
		                  map.merge(nums[j], 1, Integer::sum);
		                  if (map.get(max) >= k) {
		                      res++;
		                  }
		              }
		          }
		          return res;
		      }
		  ```
-
-