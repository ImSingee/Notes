title:: Readwise/Highlights/学习神经网络的一点笔记
author:: [[codingnow.com]]
full-title:: 学习神经网络的一点笔记
category:: #articles
url:: https://blog.codingnow.com/2023/03/feedforward_nn.html
tags:: #[[favorite]] #[[inoreader]] #[[云风的 blog]] #[[博客]]

- 虽然神经网络到底怎么工作的，人类恐怕还无法弄清楚每个神经元传递的信号的意义。这会导致程序出了 bug 很容易被掩盖起来，但有了数据库里的数据，我们还是可以从结果的正确率推测自己有没有实现对 ([View Highlight](https://read.readwise.io/read/01he5w4jb0kdkd73z2fx8tn9v5)) #Highlight #[[2023-11-02]]
- 我所理解的神经网络，就是模拟大脑的工作方式，用非常简单的神经单元，相互连接起来，通过传递非常简单的信号，最后可以从网络的一端输入信息，另一端得到预期的结果 ([View Highlight](https://read.readwise.io/read/01he5w4yt79fbp991skm8tbhjt)) #Highlight #[[2023-11-02]]
- 模拟神经网络，尤其是实现单个神经元的代码肯定是异常简单的。起作用的不是单个神经元多么奇妙，能思考问题；而起作用的是网络结构本身 ([View Highlight](https://read.readwise.io/read/01he5w5gqt1j1ghpqcmzgpqsfa)) #Highlight #[[2023-11-02]]
- 所谓的训练工作就是反复尝试找到每个连接上的权重，以及每个神经单位过滤信号用的阈值 ([View Highlight](https://read.readwise.io/read/01he5w9f2xgtf2kkwxzy6g3s9k)) #Highlight #[[2023-11-02]]
- 一开始输入图片后，结果肯定是乱来的。但是我们可以根据错误的结果和正确的结果比对，来调整网络 。这里可以采用一种叫 stochastic gradient descent (SGD) 的方法。有点像调收音机，感觉频道不对，就稍微转一下旋钮。再听一下信号好不好，如果好了，方向就对了，如果差了就反着转一下。这个过程叫 backpropagation ，根据结果误差来修正源头，把误差反向传播回去 ([View Highlight](https://read.readwise.io/read/01he5wa9pskxzahvx4cpr2zxmg)) #Highlight #[[2023-11-02]]
- 不应该让某些信号过于特殊。不然它的一点点变化就会极大的影响输出，掩盖掉另一些信号的调整影响。我们可以用一个函数，把所谓输出信号的范围从整个实数范围全部放到 [0,1] 之间，这样，对于每个神经元来说，它的每个输入看起来都差不多了，可以按一致的规则去调整。 ... 其实，这个对信号做变形的函数具体是什么不重要，重要的是这个函数连续可微，它把输入信号都规范方便调整了。书上推荐的 sigmoid 函数之所以用得多，还在于对它求导非常简单 #Highlight #[[2023-11-02]]
- 初始化神经网络时可以用正态分布的随机值初始化，这样可以减少训练时间 ([View Highlight](https://read.readwise.io/read/01he5wdryc650nvdh6srrm6ty1)) #Highlight #[[2023-11-02]]