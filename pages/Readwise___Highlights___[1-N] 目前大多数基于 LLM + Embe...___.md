title:: Readwise/Highlights/[1-N] 目前大多数基于 LLM + Embe...
author:: [[@iguangzhengli on Twitter]]
full-title:: [1/N] 目前大多数基于 LLM + Embe...
category:: #tweets
url:: https://twitter.com/iguangzhengli/status/1656285307900432384

- [1/n] 目前大多数基于 LLM + Embedding 方案做语料库检索都会遇到文本块上下文的限制。
  @gpt_index 的作者写了一篇博客介绍可以通过为每个文档索引非结构化文本摘要发送给 LLM 来增强检索能力。
  
  下面是实现原理：
  
  https://t.co/5lD4NeRve2 ([View Tweet](https://twitter.com/iguangzhengli/status/1656285307900432384)) #Highlight #[[2023-05-10]]
- [2/n] 目前大多数 LLM + Embedding 的原理是：
  
  1. 将文档 (pdf/epub/txt) 分成不同的文本快。
  2. 将文本块存到向量数据库 (vector db) 中。
  3. 在查询期间，通过 embedding 相似性和或关键字过滤器来检索文本块。
  4. 将多组可能相关的文本块 + prompt + 问题发送给 LLM 回答问题。 ([View Tweet](https://twitter.com/iguangzhengli/status/1656286578480922624)) #Highlight #[[2023-05-10]]
- [3/n] 但是这会方案在某些场景下遇到一些问题：
  
  1. 文本块缺少全局上下文。一些笼统模糊的问题无法全局回答。
  2. 需要不断调整 top-k/相似性分值。如果值太小，就会错过上下文。让值太大，成本会随着不相关的上下文而增加。
  3. Embedding 并不是总为问题选择最相关的上下文。 ([View Tweet](https://twitter.com/iguangzhengli/status/1656291446423691269)) #Highlight #[[2023-05-10]]
- [4/n] 所以 @gpt_index 的作者使用基于 LLM 的检索方式而非 Embedding 检索的方式来增强检索效果。  
  
  具体原理分两步：  
  
  首先是Build-time。先通过 LLM 生成对应文档的摘要。存储文档/文本块/文档摘要和它们之间的映射关系表。 ([View Tweet](https://twitter.com/iguangzhengli/status/1656291599100563456)) #Highlight #[[2023-05-10]]
- [5/n] 其次是 query-time，先将这些文档的摘要发送给 LLM，让 LLM 来决定文档的相关性，返回检索到的所有文本块，并要求 LLM 给出相关性评分。这利用的是 LLM 的推理能力。 ([View Tweet](https://twitter.com/iguangzhengli/status/1656293226087841792)) #Highlight #[[2023-05-10]]
- [6/n] 这种方案可以与 Embedding 方案互相补充，灵活选择，可以为 LLM 文档检索提供一种新的思路。 ([View Tweet](https://twitter.com/iguangzhengli/status/1656293847926980609)) #Highlight #[[2023-05-10]]