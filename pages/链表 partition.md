- #链表 #链表快速排序
-
-
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