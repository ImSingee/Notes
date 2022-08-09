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
-
- #+BEGIN_QUERY
  {:title "Not uploaded images"
    :query [:find (pull ?b [*])
          :where
          [?b :block/page ?p]
          [?p :block/name ?page_name]
          (not [(clojure.string/includes? ?page_name "created by logseq-plugin-image-uploader")])
          [?b :block/content ?content]
          (not [(clojure.string/includes? ?content "{:title \"Not uploaded images\"")])
          (not [(clojure.string/includes? ?content "loli.io")])
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
- ../assets/image_1659956944357_0.png
	- http://wechatapppro-1252524126.file.myqcloud.com/appBTnjzbdm9563/image/ueditor/76914900_1572244471.jpg
	- https://pbs.twimg.com/media/FZMg9L6WAAQznlB.png
	- ../assets/image_1660013465463_0.png
	- https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png
	- https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png
	- https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg
	- https://assets.leetcode.com/uploads/2022/06/15/ex1drawio.png
	- https://assets.leetcode.com/uploads/2022/06/15/ex2drawio.png
	- https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg
	- https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png
	- https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/10/31/q4.gif
	- https://img.draveness.me/2020-10-19-16031147347484/heap-before-go-1-10.png
	- https://img.draveness.me/2020-02-29-15829868066435-bump-allocator.png
	- https://img.draveness.me/2020-02-29-15829868066457-multi-level-cache.png