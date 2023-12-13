title:: Readwise/Highlights/使用 Loop 设备访问虚拟磁盘
author:: [[涛叔]]
full-title:: 使用 Loop 设备访问虚拟磁盘
category:: #articles
url:: https://taoshu.in/unix/loop-virt-disk.html
tags:: #[[inoreader]] #[[star]] #[[博客]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
- loop 设备是 Linux 下一种虚拟设备。它广泛应用于跟虚拟磁盘、ISO镜像等文件的处理领域 ([View Highlight](https://read.readwise.io/read/01hg2fj8n6sv9a01xndad4t6e1)) #Highlight #[[2023-11-25]]
- Linux 以文件的形式管理磁盘。一般第一块设备对应的文件是`/dev/sda`。大家可能不知道，我们是可以直接读写这个文件的。在 Linux 系统中，这就是一个普通的文件。唯一的不同点就是文件的大小是固定的，也就是磁盘的容量。我们没法在这个文件结尾处追加数据。但整个文件所有数据都可以读写 ([View Highlight](https://read.readwise.io/read/01hg2fk5b6her6cbqf7kx5yp3j)) #Highlight #[[2023-11-25]]
- 所谓分区就是把磁盘划分成几块不同的空间。每一块的类型和开始结束位置等信息都保存硬盘开头的某段空间内。这一段也叫分区表。主流的分区表有 DOS 和 GPT 两种。Linux 下常见的分区工具是`fdisk`和`gdisk`，都支持两种分区表。 ([View Highlight](https://read.readwise.io/read/01hg2fm2nae1fgscxwvbqprnnv)) #Highlight #[[2023-11-25]]
- 随着时间的发展，Linux 通过 udev 系统实现了自动挂载功能。典型的领域就是插上优盘后自动弹出对应的文件夹。这套体系只是前面所说内容的外挂，本质上还是在用`mount`命令来挂载。只不过新系统对应挂载点的位置做了统一约定，所以才能实现自动打开优盘或者光盘的功能。 ([View Highlight](https://read.readwise.io/read/01hg2fpnwrjh1cz51dkkzmhbk8)) #Highlight #[[2023-11-25]]
- loop 是一种虚拟设备，对应设备文件为`/dev/loop0`。如果有多个则依次编号。操作 loop 设备需要用到`losetup`命令 ([View Highlight](https://read.readwise.io/read/01hg2fr3rj2xdrc1p9pa49fajv)) #Highlight #[[2023-11-25]]
- 所有对 loop 设备的读写操作都会被「转发」给对应的普通文件 ([View Highlight](https://read.readwise.io/read/01hg2fs6p3hgc3hwd3fn3v9a59)) #Highlight #[[2023-11-25]]
- 我们在使用虚拟机的时候会创建各种虚拟磁盘，这些本质上也是一种镜像文件。跟ISO文件不同的是虚拟磁盘文件可以写入内容，而且容量还可以[调整](https://taoshu.in/unix/resize-ext4.html)。但处理的原理一样的，都需要通过 loop 设备关联。
  
  并非所有虚拟磁盘都能被内核直接处理。像 cow2 这种被 QEMU 压缩过，内核无法处理。但我们可以把它们转换成所谓的 raw 格式文件，内核就能处理了。 ([View Highlight](https://read.readwise.io/read/01hg2fsz1aphvrxft3zpn0syr2)) #Highlight #[[2023-11-25]]