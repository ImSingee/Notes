title:: Readwise/Highlights/1.8 Map函数和Reduce函数 - MIT6.824 (11)
author:: [[mit-public-courses-cn-translatio.gitbook.io]]
full-title:: 1.8 Map函数和Reduce函数 - MIT6.824
category:: #articles
url:: https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/lecture-01-introduction/1.8-mapreduce-han-shu

- emit由MapReduce框架提供，并且这里的emit属于Map函数。emit会接收两个参数，其中一个是key，另一个是value #Highlight #[[2022-03-07]]
- Reduce函数的入参是某个特定key的所有实例（Map输出中的key-value对中，出现了一次特定的key就可以算作一个实例）。所以Reduce函数也是使用一个key和一个value作为参数，其中value是一个数组，里面每一个元素是Map函数输出的key的一个实例的value。对于单词计数器来说，key就是单词，value就是由字符串“1”组成的数组，所以，我们不需要关心value的内容是什么，我们只需要关心value数组的长度。Reduce函数也有一个属于自己的emit函数。这里的emit函数只会接受一个参数value，这个value会作为Reduce函数入参的key的最终输出。 #Highlight #[[2022-03-07]]
- 有关输入和输出文件的存放位置，这是我之前没有提到的，它们都存放在文件中，但是因为我们想要灵活的在任意的worker上读取任意的数据，这意味着我们需要某种网络文件系统（network file system）来存放输入数据。 #Highlight #[[2022-03-07]]
- Master节点会找出输入文件具体存在哪台GFS服务器上，并把对应于那个输入文件的Map Task调度到同一台服务器上。所以，默认情况下，这里的箭头是指读取本地文件，而不会涉及网络。 #Highlight #[[2022-03-07]]
- Map函数会将输出存储到机器的本地磁盘，所以存储Map函数的输出不需要网络通信，至少不需要实时的网络通信。 #Highlight #[[2022-03-07]]
- 在MapReduce中，需要一直要等到所有的数据都获取到了才会进行Reduce处理，所以这是一种批量处理。现代系统通常会使用streaming并且效率会高一些。 #Highlight #[[2022-03-07]]
- 在一些场景中，Reduce的输出可能会非常巨大，比如排序，比如网页索引器。10TB的输入对应的是10TB的输出。所以，Reduce的输出也会存储在GFS上。 #Highlight #[[2022-03-07]]
- 一个典型的现代数据中心网络，会有很多的root交换机而不是一个交换机（spine-leaf架构）。每个机架交换机都与每个root交换机相连，网络流量在多个root交换机之间做负载分担。所以，现代数据中心网络的吞吐大多了 #Highlight #[[2022-03-07]]