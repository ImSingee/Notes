title:: Readwise/Highlights/如何优化 Docker 镜像体积
author:: [[Waynerv]]
full-title:: 如何优化 Docker 镜像体积
category:: #articles
url:: https://waynerv.com/posts/how-to-reduce-docker-image-size/
tags:: #[[go inbox]] #[[inoreader]] #[[shall we code?]] #[[博客]]

- •   `RUN`、`COPY` 和 `ADD` 指令会在已有镜像层的基础上创建一个新的镜像层，执行指令产生的所有文件系统变更会在指令结束后作为一个镜像层整体提交。
  •   镜像层具有 `copy-on-write` 的特性，如果去更新其他镜像层中已存在的文件，会先将其复制到新的镜像层中再修改，造成双倍的文件空间占用。
  •   如果去删除其他镜像层的一个文件，只会在当前镜像层生成一个该文件的删除标记，并不会减少整个镜像的实际体积。 ([View Highlight](https://read.readwise.io/read/01hes03jthvywta4hpk2948s42)) #Highlight #[[2023-11-09]]
- docker 自带的 `docker history` 命令，该命令可以展示所有镜像层的创建时间、指令以及体积等较为基础的信息 ([View Highlight](https://read.readwise.io/read/01hes03ynn87cpnf20af621rqe)) #Highlight #[[2023-11-09]]
- 第三方的 `dive` 工具，该工具可以分析镜像层组成，并列出每个镜像层所包含的文件列表，可以很方便地定位到影响镜像体积的构建指令以及具体文件。 ([View Highlight](https://read.readwise.io/read/01hes043x8tepve10d24znysd1)) #Highlight #[[2023-11-09]]
- 在最终生成镜像时将所有镜像层合并成一层，在 `docker build` 命令中使用 `—squash` 即可实现（需要[开启 docker daemon 的实验性功能](https://docs.docker.com/engine/reference/commandline/dockerd/#description)） ([View Highlight](https://read.readwise.io/read/01hes07kd1zr7b85v9w72tae1y)) #Highlight #[[2023-11-09]]