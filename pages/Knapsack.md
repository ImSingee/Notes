alias:: 背包问题

-
- ## 0-1 背包问题
	- ```python
	  for i in obj:
	  	fo
	  ```
- ## 无穷背包问题
	- ```python
	  for c in capacity:
	    for i in obj:
	      dp[c] = max(dp[c], val[i] + dp[c - cost[i]])
	  return max([dp[c] for c in dp])
	  ```