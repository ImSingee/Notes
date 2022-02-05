- #链表 #链表快速排序
-
- 给定一个链表和一个 pivot
- 将链表重新排序，要求 <pivot 的元素在 =pivot 的元素前面、=pivot 的元素在 >pivot 的元素前面，在此基础上要求同时保持原始的相对次序不变
-
- ## 解答
	- ```java
	  public static Node listPartition(Node head, int pivot) {
	    Node sD = new Node(-1), sH = sD;
	    Node eD = new Node(-1), eH = eD;
	    Node bD = new Node(-1), bH = bD;
	  
	    Node p = head;
	    while (p != null) {
	      if (p.value < pivot) {
	        sH.next = p;
	        sH = sH.next;
	      } else if (p.value > pivot) {
	        bH.next = p;
	        bH = bH.next;
	      } else {
	        eH.next = p;
	        eH = eH.next;
	      }
	  
	      p = p.next;
	    }
	  
	    bH.next = null;
	    eH.next = bD.next;
	    sH.next = eD.next;
	  
	    return sD.next;
	  }
	  ```