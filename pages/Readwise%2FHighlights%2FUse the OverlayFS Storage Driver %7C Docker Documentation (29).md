title:: Readwise/Highlights/Use the OverlayFS Storage Driver | Docker Documentation (29)
author:: [[docs.docker.com]]
full-title:: Use the OverlayFS Storage Driver | Docker Documentation
category:: #articles
url:: https://docs.docker.com/storage/storagedriver/overlayfs-driver/?cmdid=P1QFC3IF8APKF3

- OverlayFS refers to the lower directory as lowerdir and the upper directory a upperdir. The unified view is exposed through its own directory called merged. #Highlight #[[2021-07-16]]
- The lowest layer contains a file called link, which contains the name of the shortened identifier, and a directory called diff which contains the layer’s contents. #Highlight #[[2021-07-16]]
- The second-lowest layer, and each higher layer, contain a file called lower, which denotes its parent, and a directory called diff which contains its contents. It also contains a merged directory, which contains the unified contents of its parent layer and itself, and a work directory which is used internally by OverlayFS. #Highlight #[[2021-07-16]]