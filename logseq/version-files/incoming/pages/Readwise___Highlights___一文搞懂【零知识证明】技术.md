title:: Readwise/Highlights/一文搞懂【零知识证明】技术
author:: [[juejin.cn]]
full-title:: 一文搞懂【零知识证明】技术
category:: #articles
url:: https://juejin.cn/post/7205839782382321724
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- —**零知识证明**，它可以让我们**向其他人证明某个陈述是真实的但不会泄露关于陈述本身的任何信息** ([View Highlight](https://read.readwise.io/read/01hdjeykgedbgwy4mf0ntc7srr)) #Highlight #[[2023-10-25]]
- **零知识证明(Zero Knowledge Proof)** ，指的是**证明者能够在不向验证者提供任何有用的信息的情况下，使验证者相信某个论断是正确的**。 ([View Highlight](https://read.readwise.io/read/01hdjeytr9zrghgc32jbg6yezw)) #Highlight #[[2023-10-25]]
- 关于零知识证明，有三条主要的**性质**：
  
  •   **完备性**。如果证明方和验证方都是诚实的，并遵循证明过程的每一步，进行正确的计算，那么这个证明一定是成功的，验证方一定能够接受证明方。
  •   **合理性**。没有人能够假冒证明方，使这个证明成功。
  •   **零知识性**。证明过程执行完之后，验证方只获得了“证明方拥有这个知识”这条信息，而没有获得关于这个知识本身的任何一点信息。 ([View Highlight](https://read.readwise.io/read/01hdjez033vx30kvmtehw41arn)) #Highlight #[[2023-10-25]]
- **零知识证明存在小概率的误差，欺骗者有可能通过虚假陈述骗过证明者**。也就是说，**零知识证明是概率证明而不是确定性证明** ([View Highlight](https://read.readwise.io/read/01hdjf0tjfez6k86ys0wcr0g9b)) #Highlight #[[2023-10-25]]
- 零知识证明技术包括两类：
  
  •   **交互式的零知识证明**
  •   **非交互式的零知识证明** ([View Highlight](https://read.readwise.io/read/01hdjf1w2xya59g5kbbrts2k98)) #Highlight #[[2023-10-25]]
- 在交互式零知识证明中，挑战值可以由验证者随机产生，但在非交互零知识证明中，挑战值根据Fiat-Shamir转换自动产生，Fiat-Shamir转换采用了随机预言机。一个密码学安全的Hash 函数可以近似地模拟传说中的「随机预言机」。这也是**非交互证明的原理**。 ([View Highlight](https://read.readwise.io/read/01hdjf1nqn1f60zj20gg8n0kzf)) #Highlight #[[2023-10-25]]