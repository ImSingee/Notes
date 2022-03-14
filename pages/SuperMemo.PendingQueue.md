title:: SuperMemo/PendingQueue

- http://supermemopedia.com/wiki/Pending_queue
-
- Pending Queue 的作用是将一系列[元素]([[SuperMemo/Element]])标记为「等待学习」，代表着  [pending 状态](((622eb6bc-9773-40a5-9165-c8fbff4d856d)))
- 因为 [[SuperMemo/PriorityQueue]] 的诞生，Pending Queue 官方建议只使用在外部导入的数据
	- Pending queue used to play an important role in SuperMemo by lining up elements in learning. Since the arrival of the priority queue, it is recommended to keep all the elements in the learning process. Pending queue is now used only for collections you receive from external sources (e.g. Advanced English).
-
- 将元素加入至 Pending Queue 的方式
	- 菜单 File : Tools : Reset collection ，将整个 Collection 所有的内容标记为 Pending
	- [[SuperMemo/Forget]] 将元素移动到 Pending Queue 的末尾
-
- 将元素从 Pending Queue 移出的方式：
  id:: 622eb585-4556-4efd-8dd2-8b80d7dfb8f4
	- To reintroduce a Dismissed item into the learning process 
	  (1) [memorize]([[SuperMemo/Memorize]]) it (with [Remember]([[SuperMemo/Remember]]) or Ctrl+M)
	  (2) (optionally) set its [first interval](http://supermemopedia.com/wiki/First_interval) (with Ctrl+J)
	  (3) (optionally) set its [priority]([[SuperMemo/Priority]]) (Ctrl+P)
-