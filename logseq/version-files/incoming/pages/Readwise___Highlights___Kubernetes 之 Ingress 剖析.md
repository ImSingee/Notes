title:: Readwise/Highlights/Kubernetes 之 Ingress 剖析
author:: [[微信公众平台]]
full-title:: Kubernetes 之 Ingress 剖析
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzAwNjMxMTgwNw==&mid=2247491206&idx=1&sn=0b7afb55d2c399dce57952c851ce3fbf&chksm=9b0e0496ac798d8036ebefc7a1e0ec28c1860d183687191c656f5d26c44cfd237d3b6c2f9df5#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/IgylNib7ZE2K5QjhrrxWG97rGp5XDWnxJibT6Uia12Bibp6t6K4GfKFM6Gm8FzMYS2bGay3wQDppKVD3nOiaWQ4Jib9g/0?wx_fmt=jpeg)
- Kubernetes 的 Service 只有四层代理，暂时只支持这样的格式：`IP:Port`访问。  
  而 `Ingress api` 支持实现七层代理，可以用来绑定外部域名。 ([View Highlight](https://read.readwise.io/read/01hhehcg834hrma6g78h4v22wv)) #Highlight #[[2023-12-12]]
- `Ingress Controller` 会根据定义的 Ingress 对象，提供对应的代理能力。目前，业界常用的各种反向代理项目，比如 Nginx、HAProxy、Envoy、Traefik 等，都已经为 Kubernetes 专门维护了对应的 Ingress Controller。
  
  当一个新的 Ingress 对象由用户创建后，`nginx-ingress-controller` 就会根据 `Ingress` 对象里定义的内容，生成一份对应的 Nginx 配置文件`（/etc/nginx/nginx.conf）`，并使用这个配置文件启动一个`Nginx` 服务。而一旦 `Ingress` 对象被更新，`nginx-ingress-controller` 就会更新这个配置文件。 ([View Highlight](https://read.readwise.io/read/01hhehddpfdkh2p9tfeffvhb8h)) #Highlight #[[2023-12-12]]