title:: Readwise/Highlights/简单聊聊 IaC：Infrastructure as Code
author:: [[Manjusaka]]
full-title:: 简单聊聊 IaC：Infrastructure as Code
category:: #articles
url:: https://www.manjusaka.blog/posts/2023/03/12/a-simple-introduction-about-iac/#IaC-%E7%9A%84%E8%BF%87%E5%8E%BB
tags:: #[[favorite]]  
![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/flower-7718952_1280.jpg)
- 面对这样一套的问题的时候。更现代化的 IaC 设施应运而生。其中典型的一些产物是
  
  1.  Ansible
  2.  Chef
  3.  Puppet ([View Highlight](https://read.readwise.io/read/01hdzak6w2pqxspee6mzs9s9fw)) #Highlight #[[2023-10-30]]
- 实际上这些工具，可能设计上各有所取舍（比如 Pull/Push 模型的取舍），但是其核心的特征不会变化
  
  1.  框架内部提供了常见的比如 SSH 链接管理，多机并行执行，auto retry 等功能
  2.  基于上面描述的这一套基础功能，提供了一套 DSL 封装。让开发者更专注于 IaC 的逻辑，而非基础层面的细节
  3.  其开源开放，并形成了一套完善的插件机制。社区可以基于这一套提供更丰富的生态。比如 SDN 社区基于 ANSIBLE 提供了各种交换机的 playbook 等 ([View Highlight](https://read.readwise.io/read/01hdzakkgw7yk5ca8xq5rc63zf)) #Highlight #[[2023-10-30]]
- 云时代的，面向云资源管理的新型 IaC 工具的需求也愈发的迫切。这个时候，Terraform 这样的新型工具应运而生 ([View Highlight](https://read.readwise.io/read/01hdzam1j8hh706dsr35z77zte)) #Highlight #[[2023-10-30]]
- 类似 Pulumi 这种基于 Python/Lua/Go/TS 等完整的编程语言的 IaC 产品就应运而生了 ([View Highlight](https://read.readwise.io/read/01hdzamy4s2ker9pnq42xsr2x2)) #Highlight #[[2023-10-30]]