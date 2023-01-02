alias:: 背包问题

-
- ## 0-1 背包问题
	- ```python
	  for i in obj:
	    for c in capacity:
	      dp[i][c] = max(dp[i-1][c], val[i] + dp[i-1][c - cost[i]])
	  return max([dp[n][c] for c in capacity])
	  ```
- ## 多重背包问题
- ## 完全背包问题
	- ```python
	  for c in capacity:
	    for i in obj:
	      dp[c] = max(dp[c], val[i] + dp[c - cost[i]])
	  return max([dp[c] for c in capacity])
	  ```