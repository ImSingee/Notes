retrieved:: [[2022-02-01]], 2:44:42 PM
              author:: [[juejin.cn]]
              category:: [[articles]]
              source:: [[instapaper]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
- ## [[Readwise Highlights]]
	- 原生 WKWebView 在独立于 app 进程之外的进程中执行网络请求，请求数据不经过主进程，因此在 WKWebView 上直接使用 NSURLProtocol 是无法拦截请求的。
	                link:: [https://instapaper.com/read/1415781095/16525384](https://instapaper.com/read/1415781095/16525384)
	                on:: [[2021-05-29]]
	                tags::
	- 出于性能的原因，WKWebView 的网络请求在给主进程传递数据的时候会把请求的 body 去掉
	                link:: [https://instapaper.com/read/1415781095/16525386](https://instapaper.com/read/1415781095/16525386)
	                on:: [[2021-05-29]]
	                tags::
	- mPaaS 利用了 WKWebview 的隐藏 api，去注册拦截网络请求去满足离线包的业务场景需求，参考代码如下：
	  
	  [WKBrowsingContextController registerSchemeForCustomProtocol:@"https"]
	                link:: [https://instapaper.com/read/1415781095/16525390](https://instapaper.com/read/1415781095/16525390)
	                on:: [[2021-05-29]]
	                tags::
	- 在 js 注入代码，hook 了 js 上下文里的 XMLHTTPRequest 对象解决。
	                link:: [https://instapaper.com/read/1415781095/16525394](https://instapaper.com/read/1415781095/16525394)
	                on:: [[2021-05-29]]
	                tags::
	- JS 层把方法内容组装好，然后通过 WKWebView 的 messageHandler 机制把内容传到主进程，把对应 HTTPBody 然后存起来，随后通知 JS 端继续这个请求，网络请求到主进程后，在将 post 请求对应的 HttpBody 添加上，这样就完成了一次 post 请求的处理
	                link:: [https://instapaper.com/read/1415781095/16525407](https://instapaper.com/read/1415781095/16525407)
	                on:: [[2021-05-29]]
	                tags::