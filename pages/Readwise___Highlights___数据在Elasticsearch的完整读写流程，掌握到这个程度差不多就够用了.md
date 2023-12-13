title:: Readwise/Highlights/数据在Elasticsearch的完整读写流程，掌握到这个程度差不多就够用了
author:: [[juejin.cn]]
full-title:: 数据在Elasticsearch的完整读写流程，掌握到这个程度差不多就够用了
category:: #articles
url:: https://juejin.cn/post/7108550139974778894
tags:: #[[elasticsearch]] #[[ElasticSearch]] #[[favorite]]

- ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2b13f5a11ee4f7587e20f8494758131~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hf39ya5w1tzsh0x1temrkyqb)) #Highlight #[[2023-11-13]]
- client写入数据时首先先连接到elasticsearch cluster的coordinator node（如果对elasticsearch的node不了解的话，可以参考下这篇文章），coordinator node根据需要写入数据的doc id字段（默认使用该字段，如果数据写入指定了routing的话，则使用routing进行分片路由）进行路由到对应的分片 ([View Highlight](https://read.readwise.io/read/01hf39zd3ebv8z8k0ymky2gbm7)) #Highlight #[[2023-11-13]]
- 首先数据被写入到elasticsearch的index buffer中，该buffer在elasticsearch的heap中。写完index buffer后，数据才会写入到translog中，translog写入完毕后即可以返回客户端写入成功。 ([View Highlight](https://read.readwise.io/read/01hf3a3kmnec90eng3czwzrk1y)) #Highlight #[[2023-11-13]]
- 和数据库不同，数据库是先写CommitLog，然后再写内存，而Elasticsearch是先写内存，最后才写TransLog。这个有悖常理，笔者也曾经很污理解，后来考虑到可能是因为Lucene的内存写入很重很复杂，很容易失败，比如分词，字段类型不匹配且无法转型，字段长度超过限制等，为了避免TransLog中有大量无效记录，减少recover的复杂度并提升效率，所以就把写Lucene放在了写translog前面。 ([View Highlight](https://read.readwise.io/read/01hf3a4cvv80p9t54hmxghd810)) #Highlight #[[2023-11-13]]
- 默认情况下，当primary shard写入成功后，即返回写入成功，后续replica shard通过异步的方式同步数据或者translog恢复数据 ... 该机制可以通过设置index.write.wait_for_active_shards参数进行设置。该参数可以使用all或者在1到副本数加1（number_of_replicas+1）之间任何的一个整数值。如果是all也就是等待主分片和副本都写入成功，请求才返回，这样可以保证elasticsearch的强一致性，但是代价一是写入线程会阻塞，影响吞吐量；二是会影响elasticsearch的可用性。有一个节点不正常写入就会阻塞，直到节点恢复或者写入超时。 #Highlight #[[2023-11-13]]
- index buffer refresh
  
  •   数据写入到这里的时候还无法被搜索到，默认1s后执行refresh操作，将内容写入文件系统缓冲区（os cache）中的新段(segment)。此segment的内容尚未被fsynced(未被写入到硬盘)，但是segment是打开的，内容可被搜索。
  •   但是1s一次的refresh会导致频繁生成新文件，在占用大量句柄以及系统资源的同时也会影响到查询数据的效率。所以对于实时性要求不是很高的业务场景，可以将refresh的时间拉长，比如30s，"index.refresh_interval":"30s"
  •   最后在refresh写完segment后会更新shard的commit point。commit point在shard中以segments_xxx名字的文件存在。用来记录每个shard中segment相关的信息。 ([View Highlight](https://read.readwise.io/read/01hf3a7b98fa9c24kag3wsjnzj)) #Highlight #[[2023-11-13]]
- Delete&&Update操作也是一种特殊的写操作，但是由于Delete&&Update操作并不是即时生效，而是通过标记删除的方式来实现，最终通过segment merge操作实现真删。所以和标准的写入还是有一定的差别，下面来说一下具体差别：
  
  •   Delete：磁盘上的每个分段(segement)都有一个.del文件与它关联。当客户端发送删除请求时，该文档未被真正删除，而是在.del文件中标记为已删除。此文档仍然可能被搜到，但会从结果中过滤掉。当分段合并时，在.del文件中标记为删除的文档不会包括在新的合并段中。
  •   Update:创建新文件，Elasticsearch将该文档分配一个版本号。对文档的每次更改都会产生一个新的版本号，版本号使用versionMap来进行管理，用以减少热点数据的多次磁盘IO开销。当执行更新时，旧版本在.del文件中标记为已删除，并且并且在新版本的分片中编入索引。旧版本可能仍然与搜索查询匹配，但是从结果中将其将其过滤掉。 ([View Highlight](https://read.readwise.io/read/01hf3a8h5knxx10jcpdn1cvnar)) #Highlight #[[2023-11-13]]
- •   首先使用doc id字段从os cache中的translog中查询，如果能查询到就直接返回客户端；
  •   如果os cache中的translog没有查询到的话，再去disk上的tranlog中查询，如果能查询到就直接返回客户端；
  •   如果reanslog中没有查询到对应的数据，再去segment中查询对应的数据。首先把正排索引的fdx数据加载到off heap中去查询doc id。如果查询不到则直接返回null；如果能查询到doc id，根据查询结果中的偏移量直接去硬盘上查询对应的原始数据并返回 ([View Highlight](https://read.readwise.io/read/01hf3a9x9r706p3bzk9vfdb2w6)) #Highlight #[[2023-11-13]]
- get操作（其实update以及delete操作也会优先查询translog）为什么要优先查询translog后再去查询segment数据？这里说明一下原因：上文已经说过了delete以及update操作在elasticsearch中都是先打删除标记然后通过segment merge操作进行真删，所以一条数据可能在elasticsearch中有几个版本，而最新的版本可能会存在于translog中。所以如果在translog中查询到目标数据直接返回即可，一定是最新的数据；如果translog中没有目标数据，再去segments中查询 ([View Highlight](https://read.readwise.io/read/01hf3aabsnbne0e49r1rr3s9w1)) #Highlight #[[2023-11-13]]
- search也是elasticsearch中比较复杂的流程。总体分为term search以及分词search ([View Highlight](https://read.readwise.io/read/01hf3aakzet98sddnx0wgnxt3k)) #Highlight #[[2023-11-13]]
- search操作的阶段取决于search type的选择 ... search type默认使用query then fetch类型，该类型由两个阶段组成：查询阶段(query)和获取阶段（fetch）阶段 ... •   查询阶段：在此阶段，协调节点将搜索请求路由到索引中的所有分片(包括：主分片和副本分片)。分片独立执行搜索，并根据相关性分数创建一个优先级排序结果.所有分片将匹配到的文档和相关性分数的文档id返回给协调节点。协调节点创建一个新的优先级队列，并对全局结果进行排序。可以有很多文档匹配结果，但默认情况下，每个分片将前10个结果发送到协调节点，协调节点创建优先级队列，从所有分片中分选结果并返回前10个匹配结果。
  •   获取阶段：在协调节点对所有的结果进行排序，生成全局排序的文档列表后，它将所有分片请求原始文档。所有的分片都会丰富文档并将其返回到协调节点。 #Highlight #[[2023-11-13]]