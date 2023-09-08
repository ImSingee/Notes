title:: Readwise/Highlights/开个 Thread 来做个人人都难懂的 AI 作...
author:: [[@haoel on Twitter]]
full-title:: 开个 Thread 来做个人人都难懂的 AI 作...
category:: #tweets
url:: https://twitter.com/haoel/status/1632211302356783104
- 开个 thread 来做个人人都难懂的 AI 作画科普。目前主要流行的AI作画有，OpenAI的Dall-E2, Google 的 Imagen，Midjourney，有还Stability AI 公司开的 Stable Diffusion 等等。它们都是2022年才出来的，无一例外，全部都是基于 Diffusion 算法模型，这个算法的原理其实并不复杂，简单地说一下…… 1/7 ([View Tweet](https://twitter.com/haoel/status/1632211302356783104)) #Highlight #[[2023-03-07]]
- Diffisution算法需要先找一堆高质量的图片，训练就是对每张图片一步一步的按一种公式（高斯噪声公式）来加噪点，直到整张图片变成一个完全噪点的图像（就像电视的雪花点），把所有的步骤都保存下来，然后用神经网络的方式来反向学习如何从一个完全是噪点的图像变成一张高清的图……2/7 
  
  ![](https://pbs.twimg.com/media/FqbBH2oaEAIf6UB.jpg) ([View Tweet](https://twitter.com/haoel/status/1632211304948830210)) #Highlight #[[2023-03-07]]
- 一旦这个模型产生，机器就可以通过“噪点”来预测图形，所以，整个绘画的过程就是用一组随机数（随机的噪点）来预测会是一个什么样的画。很令人惊讶吧，AI就是从一堆乱七八糟的随机数中来画画的。这种个算法很机器，就是以大力出奇迹，但牛逼的地方是，可以产生清晰度和细节度巨高无比的图片……3/7 ([View Tweet](https://twitter.com/haoel/status/1632211308262359042)) #Highlight #[[2023-03-07]]
- 这个过程需要依赖于几个事，一个是训练的图片，一个初始化的随机噪点，还有就是 Prompt 的预测路径，整个过程非常地机械，而且这个模型也不保证能生成让人觉得舒服的图片，所以需要各种人为的调参，并需要人通过在生成的图片中选择自己喜欢的图片后再度生成，类似于ChatGPT用上下文来调整内容……4/7 ([View Tweet](https://twitter.com/haoel/status/1632211310330126336)) #Highlight #[[2023-03-07]]
- 所以，像Midjourney这种通过聊天机器人来让人选择最喜欢的图片，其实就是让人来告诉机器哪些随机数，哪些预测路径，哪些Prompt更靠谱可生成更好的图片，在用户生成图片的同时让用户来反哺了AI 模型，而生成出来的图片又可以成为下一轮的图片训练集，于是，AI以后就再也不需要使用人类的图片……5/7 ([View Tweet](https://twitter.com/haoel/status/1632211312565698562)) #Highlight #[[2023-03-07]]
- 再说一下 Prompt，这是一种Transformer语言模型，它接受文本提示并产生Token，Stable Diffusion 以前使用的是 OpenAI的CLIP，但去年11月切到了OpenCLIP，使用了3.5亿的参数，而CLIP只有6千万的参数，Prompt对高质量的图片的生成有非常大的影响因素，我认为这是一种未来的更接近自然语言的编程语言…6/7 ([View Tweet](https://twitter.com/haoel/status/1632211314734161921)) #Highlight #[[2023-03-07]]
- 最后说一下Stable Diffusion，他使用了一种图片压缩算法可以大规模的减少训练的内存和时间，在工程上可以用更少的GPU和时间来计算更大量的数据，于是让“大力出奇迹”成为了可能，因为开源，所以，它的社区是非常活跃的。开源和封闭的竞争永远都在，OpenAI 和Stability AI之间就像苹果和安卓……7/7 ([View Tweet](https://twitter.com/haoel/status/1632211316848082946)) #Highlight #[[2023-03-07]]