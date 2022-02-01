retrieved:: [[2022-02-01]], 2:41:20 PM
              author:: [[docs.docker.com]]
              category:: [[articles]]
              source:: [[command]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- OverlayFS refers to the lower directory as lowerdir and the upper directory a upperdir. The unified view is exposed through its own directory called merged.
	                link:: [null](null)
	                on:: [[2021-07-16]]
	                tags::
	- The lowest layer contains a file called link, which contains the name of the shortened identifier, and a directory called diff which contains the layer’s contents.
	                link:: [null](null)
	                on:: [[2021-07-16]]
	                tags::
	- The second-lowest layer, and each higher layer, contain a file called lower, which denotes its parent, and a directory called diff which contains its contents. It also contains a merged directory, which contains the unified contents of its parent layer and itself, and a work directory which is used internally by OverlayFS.
	                link:: [null](null)
	                on:: [[2021-07-16]]
	                tags::