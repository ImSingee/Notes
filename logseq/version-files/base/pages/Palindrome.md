## 预处理回文数
	- 视频讲解（Q2）
		- {{video https://www.bilibili.com/video/BV1994y1A7oo/?vd_source=614c9aee3cd3070afe7aa0a2f4c876aa}}
	- 预处理到 10^9
	- ```go
	  var pal = make([]int, 0, 109999)
	  
	  func init() {
	  	// 按顺序从小到大生成所有回文数
	  	for base := 1; base <= 10000; base *= 10 {
	  		for i := base; i < base*10; i++ {
	  			x := i
	  			for t := i / 10; t > 0; t /= 10 {
	  				x = x*10 + t%10
	  			}
	  			pal = append(pal, x)
	  		}
	  		if base <= 1000 {
	  			for i := base; i < base*10; i++ {
	  				x := i
	  				for t := i; t > 0; t /= 10 {
	  					x = x*10 + t%10
	  				}
	  				pal = append(pal, x)
	  			}
	  		}
	  	}
	  	pal = append(pal, 1_000_000_001) // 哨兵，防止下标越界
	  }
	  
	  // https://leetcode.cn/problems/minimum-cost-to-make-array-equalindromic/solutions/2569308/yu-chu-li-hui-wen-shu-zhong-wei-shu-tan-7j0zy/
	  ```