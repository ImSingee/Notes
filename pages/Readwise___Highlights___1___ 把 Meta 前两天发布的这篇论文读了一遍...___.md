title:: Readwise/Highlights/1/ 把 Meta 前两天发布的这篇论文读了一遍...
author:: [[@Tisoga on Twitter]]
full-title:: 1/ 把 Meta 前两天发布的这篇论文读了一遍...
category:: #tweets
url:: https://twitter.com/Tisoga/status/1624543837745192960

- 1/ 把 Meta 前两天发布的这篇论文读了一遍，mind blowing
  
  这篇论文被近期 ChatGPT & Bing Chat 的风头盖过去了，不过我感觉论文中提到的内容可能是未来 Language Model 发展的一个重要的分支。
  
  -- thread 🧵 -- 
  
  ![](https://pbs.twimg.com/media/FouKAL-agAIgmdX.jpg) ([View Tweet](https://twitter.com/Tisoga/status/1624543837745192960)) #Highlight #[[2023-02-15]]
- 2/ 简单来说，这篇论文提出了一种新的语言模型：Toolformer。
  
  这个 LM 的特别之处是可以训练自己来使用各种工具，例如调用 API、做数值计算、请求网页内容，或者是其他任何操作。 ([View Tweet](https://twitter.com/Tisoga/status/1624543843285880833)) #Highlight #[[2023-02-15]]
- 3/ 我们都知道现在 ChatGPT / GPT-3 存在的一个很大的问题就是生成的结果受限于训练的数据集（ChatGPT 截止于 2021 年），对于一些实时性的内容是无法生成的。
  
  另外就是无法进行很好的数值计算，简单的加减乘除也会算错。 ([View Tweet](https://twitter.com/Tisoga/status/1624543845907333120)) #Highlight #[[2023-02-15]]
- 4/ Bing Chat 一部分解决了这些问题，其实底层的原理也比较简单，先利用 Bing 进行关键词搜索，然后再把结果通过 embedding 的方式注入到 prompt 中去调用底层的大模型。
  
  当然 OpenAI 和微软应该在上层工做了很多工程化的工作，所以 Bing Chat 的生成速度和准确性上都表现得非常好。 ([View Tweet](https://twitter.com/Tisoga/status/1624543848671379457)) #Highlight #[[2023-02-15]]
- 5/ 但是这种能力是非常有限的，比如你想要通过 Bing Chat 来搜索夏威夷的某个旅店价格，这个是可以做到的。
  
  但是如果想让它帮你预定最实惠的那个酒店就不行了，因为它只能够生成内容，不能执行逻辑。 ([View Tweet](https://twitter.com/Tisoga/status/1624543851385098241)) #Highlight #[[2023-02-15]]
- 6/ 但是如果 LLM 能够知道「怎么预定酒店」这个操作的话，那么就可以完成上面的步骤了。
  
  其实方法简单来说就是把很多预定酒店的操作过程喂给他来训练，然后它就能「学」会了。 ([View Tweet](https://twitter.com/Tisoga/status/1624543853993922561)) #Highlight #[[2023-02-15]]
- 7/ 简单做一层抽象，这个可以扩展到任何外部的 API 调用。
  
  一些可能的场景：
- 8/ 如果说 GPT-3 / ChatGPT / Bing Chat 等 LLM 只是「智能大脑」的话，Toolformer 模型就是给这些大脑加上了「手」，可以开始使用工具了。 ([View Tweet](https://twitter.com/Tisoga/status/1624543859396182016)) #Highlight #[[2023-02-15]]
- 9/ 未来不难看到一个集成了 ChatGPT（or 类似的）& Toolformer 的 AI 通过自训练学会了操作电脑，然后自己把自己的代码重写了一遍，完成了自举。 ([View Tweet](https://twitter.com/Tisoga/status/1624543862013427713)) #Highlight #[[2023-02-15]]
- 10/ 这篇论文是在 ChatGPT 的帮助下进行阅读的，10x 提升了效率，甚至还能把几篇不同的论文进行交叉比对。
  
  给 9 岁小朋友解释这篇论文 👇 
  
  ![](https://pbs.twimg.com/media/FouKCdRaUAAYyjs.jpg) ([View Tweet](https://twitter.com/Tisoga/status/1624543872683749377)) #Highlight #[[2023-02-15]]
- 11/ 一些论文的要点 👇 
  
  ![](https://pbs.twimg.com/media/FouKDD-aAAAfKBa.jpg) ([View Tweet](https://twitter.com/Tisoga/status/1624543884973060096)) #Highlight #[[2023-02-15]]
- 12/ 以一个非 Deep Learning 从业者的视角读的这篇论文，所以理解上可能并不完全准确，欢迎在评论区进行勘误。 ([View Tweet](https://twitter.com/Tisoga/status/1624543889322565636)) #Highlight #[[2023-02-15]]
- 13/ 论文地址 👇
  
  https://t.co/WgMSFfMdnb ([View Tweet](https://twitter.com/Tisoga/status/1624543891994337280)) #Highlight #[[2023-02-15]]