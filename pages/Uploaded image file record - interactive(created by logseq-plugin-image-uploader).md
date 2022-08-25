- #+BEGIN_QUERY
  {:title "Not uploaded images"
    :query [:find (pull ?b [*])
          :where
          [?b :block/page ?p]
          [?p :block/name ?page_name]
          (not [(clojure.string/includes? ?page_name "created by logseq-plugin-image-uploader")])
          [?b :block/content ?content]
          (not [(clojure.string/includes? ?content "{:title \"Not uploaded images\"")])
          [(clojure.string/includes? ?content "](../assets")]
          [(clojure.string/includes? ?content "![")]
          (or [(clojure.string/includes? ?content ".png)")]
              [(clojure.string/includes? ?content ".jpg)")]
              [(clojure.string/includes? ?content ".jpeg)")]
              [(clojure.string/includes? ?content ".gif)")]
              [(clojure.string/includes? ?content ".tiff)")]
              [(clojure.string/includes? ?content ".tif)")]
              [(clojure.string/includes? ?content ".bmp)")]
              [(clojure.string/includes? ?content ".svg)")]
              [(clojure.string/includes? ?content ".webp)")]
              [(clojure.string/includes? ?content ".PNG)")]
              [(clojure.string/includes? ?content ".JPG)")]
              [(clojure.string/includes? ?content ".JPEG)")]
              [(clojure.string/includes? ?content ".GIF)")]
              [(clojure.string/includes? ?content ".TIGG)")]
              [(clojure.string/includes? ?content ".TIF)")]
              [(clojure.string/includes? ?content ".VMP)")]
              [(clojure.string/includes? ?content ".SVG)")]
              [(clojure.string/includes? ?content ".WEBP)")])
        ]}
  #+END_QUERY
	- ![Uploaded by Image Uploder](../assets/image_1659938674558_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1647413834730_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1643552040916_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1647228726041_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1647228744856_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1647228782176_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1656043410287_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1651515592519_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1643594959533_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1643596611751_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1644295992892_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1647228963561_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1647228782176_0.png)
	- ![Uploaded by Image Uploder](../assets/IMG_2362_1653571853371_0.jpg)
	- ![Uploaded by Image Uploder](../assets/image_1645696254146_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1643862702447_0.png)
	- ![Uploaded by Image Uploder](../assets/IMG_2382_1653654561268_0.jpg)
	- ![Uploaded by Image Uploder](../assets/image_1652069699421_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1652065454700_0.png)
	- ![Uploaded by Image Uploder](../assets/IMG_2361_1653569944299_0.jpg)
	- ![Uploaded by Image Uploder](../assets/image_1659956944357_0.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZNJ1KjUYAA3NLB.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZNJ1XeVsAAmsZ6.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZNJ0UNUUAEHWYB.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZNJ0qAVEAACCPj.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZNJ1xjVQAEGFZa.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZNJ19OUUAAsD-m.jpg)
	- ![Uploaded by Image Uploder](http://wechatapppro-1252524126.file.myqcloud.com/appBTnjzbdm9563/image/ueditor/76914900_1572244471.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZMg9L6WAAQznlB.png)
	- ![Uploaded by Image Uploder](../assets/image_1660013465463_0.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2022/06/15/ex1drawio.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2022/06/15/ex2drawio.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/10/31/q4.gif)
	- ![Uploaded by Image Uploder](https://img.draveness.me/2020-10-19-16031147347484/heap-before-go-1-10.png)
	- ![Uploaded by Image Uploder](https://img.draveness.me/2020-02-29-15829868066435-bump-allocator.png)
	- ![Uploaded by Image Uploder](https://img.draveness.me/2020-02-29-15829868066457-multi-level-cache.png)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FJtkghqXoAcx3-o.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FJtkghiX0AMDhxL.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FJtkgiAWUAMiNtD.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZXspWeUYAA6cpS.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FFf7HAoVUAQ0Gg_.jpg)
	- ![Uploaded by Image Uploder](https://img.draveness.me/2020-02-29-15829868066446-free-list-allocator.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/binarysearchtree_improved.png)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FWJi0NfWQAAfgoj.png)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FWJi17hWQAEyTkb.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FWJi1ZtXgAAnsbw.jpg)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FWJi1Z7WQAAKzA2.jpg)
	- ![Uploaded by Image Uploder](https://writingexplained.org/wp-content/uploads/english-grammar-rules-contiguous.png)
	- ![Uploaded by Image Uploder](https://writingexplained.org/wp-content/uploads/help-with-writing-continuous.png)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FZMeZPEUUAA3tP6.jpg)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)
	- ![Uploaded by Image Uploder](https://img.draveness.me/2020-02-29-15829868066411-mutator-allocator-collector.png)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FWJi2Z0WIAA2-kC.jpg)
	- ![Uploaded by Image Uploder](https://writingexplained.org/wp-content/uploads/contiguous-v-continuous.png)
	- ![Uploaded by Image Uploder](https://pbs.twimg.com/media/FWJi0NfWQAAfgoj.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2022/06/08/graph4drawio-5.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2022/06/07/graph4drawio-1.png)
	- ![Uploaded by Image Uploder](https://pic.leetcode-cn.com/1641096462-IsWZUX-1.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2021/12/14/ex1.png)
	- ![Uploaded by Image Uploder](https://assets.leetcode.com/uploads/2021/12/14/ex2.png)
	- ![Uploaded by Image Uploder](../assets/image_1660023587294_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1660049439561_0.png)
	- ![Uploaded by Image Uploder](../assets/image_1661409347735_0.png)