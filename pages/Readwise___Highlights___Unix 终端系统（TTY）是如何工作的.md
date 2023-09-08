title:: Readwise/Highlights/Unix 终端系统（TTY）是如何工作的
author:: [[Waynerv]]
full-title:: Unix 终端系统（TTY）是如何工作的
category:: #articles
url:: https://waynerv.com/posts/how-tty-system-works/
tags:: #[[star]]
- 本文内容主要以 Linux 系统的具体实现为基础，但因为其遵循 SUSv3（***Single UNIX Specification Version 3***）规范，因此也适用于其他 Unix 系统（如 macOS）。 ([View Highlight](https://read.readwise.io/read/01h3ra1z96jg5zzxk6rxh681gc)) #Highlight #[[2023-06-25]]
- 电传打字机是早期的计算机输入输出设备，其英文 **teletype** 的缩写也是 tty 这一名称的由来。终端和 tty 实际上是可相互替代的同义术语 ([View Highlight](https://read.readwise.io/read/01h3ra2qhw2fbw65yw4t1y0r9f)) #Highlight #[[2023-06-25]]
- 电传打字机通过两条线缆连接到计算机的 UART（Universal Asynchronous Receiver and Transmitter）接口，一条线缆传输从电传打字机按下键盘触发的输入信号到计算机，一条线缆传输从计算机回到电传打字机的输出信号。计算机操作系统提供 UART 驱动程序来管理字节的物理传输，包括奇偶校验和流量控制。 ([View Highlight](https://read.readwise.io/read/01h3ra36edbs0qjtxc2z120jek)) #Highlight #[[2023-06-25]]
- 特定的 UART 驱动、`line descipline` 实例和 TTY 驱动三者组成了一个 TTY 设备，有时也被直接称为 TTY ([View Highlight](https://read.readwise.io/read/01h3ra438rds9ma77n18q4z5sb)) #Highlight #[[2023-06-25]]
- `^M` 表示按下回车键 ([View Highlight](https://read.readwise.io/read/01h3ra62mbxw4dek9r7ccvbrbf)) #Highlight #[[2023-06-25]]
- 在打字机敲下 `cat` 命令时，电信号经过 UART 驱动转换为 ASCII 字符并传递给 `line discipline` 组件的字符缓冲区，此时可以通过退格键或者 `^W` 键对缓冲区中的内容进行编辑，只有当我们按下回车键后，`line discipline` 才会将整行字符串发送给 `tty driver`，之后用户空间的 `shell` 进程可以通过 `read()` 调用读取到 `cat` 命令并执行 ([View Highlight](https://read.readwise.io/read/01h3ra7m69885h0vk6degqynsk)) #Highlight #[[2023-06-25]]
- 默认配置下 `line discipline` 组件会将字符缓冲区的字符立刻复制到输出缓冲区，随即经过 UART 驱动转换成电信号通过输出线缆传输给电传打字机，因此电传打字机会立刻打印输入的每一个字符，这一机制被称为 `echo` ([View Highlight](https://read.readwise.io/read/01h3ra8c9j5tq3xjdj00frbvwy)) #Highlight #[[2023-06-25]]
- 最后按下 `^z` 按钮，这两个按键对应 26 这个 ASCII 码点，在到达 `line discipline` 组件时，`line discipline` 并不会将该字符继续发给 `tty driver`，而是在 `echo` 给电传打字机后发送一个 `SIGSTP` 信号给当前正在运行的 `cat` 进程，使其进入 `STOPPED` 状态。 ([View Highlight](https://read.readwise.io/read/01h3ra973d6j2nenesay4tgqm6)) #Highlight #[[2023-06-25]]
- 视频终端还能根据特殊的转义码（escape code）执行光标移动、换行等操作 ([View Highlight](https://read.readwise.io/read/01h3ra9swd6v0jt78qck102db8)) #Highlight #[[2023-06-25]]
- UART 和物理终端不复存在，操作系统在内核完全通过软件模拟出一个视频终端，并直接渲染到显示器设备 ([View Highlight](https://read.readwise.io/read/01h3raabzwnn0r7jxfkat2w06p)) #Highlight #[[2023-06-25]]
- 你可以在 Ubuntu 等发行版的图形界面直接通过 `Ctrl+Alt+F1` 呼出一个模拟终端。这些虚拟设备在操作系统的 `/dev` 目录下作为字符设备存在 ([View Highlight](https://read.readwise.io/read/01h3raaqphhxjfet1dvgfmrgyq)) #Highlight #[[2023-06-25]]
- 内核空间实现的终端模拟器不够灵活，一些场景下，如通过 `ssh` 连接到远程主机或者使用 iterm2 等自定义终端程序，使用的是基于 tty 系统扩展的伪终端（pseudoterminal, pty） ([View Highlight](https://read.readwise.io/read/01h3rab9vy3dwbf5kp13htjzyp)) #Highlight #[[2023-06-25]]
- 在 shell 中执行 `tty` 命令可以直接获取当前使用的终端 ([View Highlight](https://read.readwise.io/read/01h3rabe3ss76jffy20jw1abga)) #Highlight #[[2023-06-25]]
- 在终端中执行的命令会打开所当前所使用的终端作为其标准输入、标准输出和标准错误 ([View Highlight](https://read.readwise.io/read/01h3racsf8r51hz7zmeb1h6krt)) #Highlight #[[2023-06-25]]
- 作为计算机早期的主要交互设备，终端从一开始就承载了 job controll（作业控制）的职能，使用终端可以方便地在系统中同时运行多个进程：输入 `^C` 或 `^Z` 杀死或挂起进程，通过 `fg` 或者 `bg` 让进程切换到前台或后台运行，关闭终端时终止当前终端中的后台进程 ([View Highlight](https://read.readwise.io/read/01h3raeqkbnas93racnnq8pv2j)) #Highlight #[[2023-06-25]]
- job controll 是由 tty 系统配合 shell 共同实现的，支持 job controll 功能的 shell 称为 job controll shell，主要的交互式 shell 都属于 job controll shell ([View Highlight](https://read.readwise.io/read/01h3raf00g33n8cjan76jshmdv)) #Highlight #[[2023-06-25]]
- 在 shell 中执行命令时，shell 会 `fork` 出一个新的进程去执行命令，在简单地单个命令场景下，会创建一个仅包含单个进程的进程组；在执行多个命令组成的管道时，一个管道中的所有进程都属于一个新的进程组 ([View Highlight](https://read.readwise.io/read/01h3raft75ac9e19ad2tvt3ez3)) #Highlight #[[2023-06-25]]
- 进程组中的每个进程都有相同的进程组 ID，这个 ID 与其中一个进程的 PID 相同，该进程被称为进程组 leader。一个进程组也被称为一个 job ([View Highlight](https://read.readwise.io/read/01h3rag1ewty2m674ze73qvt4w)) #Highlight #[[2023-06-25]]
- 内核允许对一个进程组也就是一个 job 的所有成员同时进行各种操作，特别是发送信号。这一特性是 job controll 的基础机制：shell 允许用户暂停或恢复一个管道中的所有进程，tty 可以对通过 shell 执行的命令以 job 为单位进行管理 ([View Highlight](https://read.readwise.io/read/01h3ragd0744dvsxmncbwhaajf)) #Highlight #[[2023-06-25]]
- 用户通过 `login` 命令登录主机时，在完成身份凭证的校验后，`login` 会使用 `/etc/password` 文件中指定的 shell 程序为用户创建一个初始 session。一个 session 是多个 job 的集合，一个 session 中创建的所有 job 都有相同的 session ID ([View Highlight](https://read.readwise.io/read/01h3rak3fydrksj9gk4j3tyq7a)) #Highlight #[[2023-06-25]]
- session leader 是创建 session 的进程，它的 PID 成为 session ID。使用 job controll shell 创建一个 session 时，session leader 即为该 shell 进程。默认情况下，`fork(2)` 创建的子进程与父进程属于同一进程组，因此从键盘发出的 `^C` 将同时影响父进程和子进程。但作为 session leader 的职责之一，shell 每次执行命令或启动管道时都会创建一个新的进程组 ([View Highlight](https://read.readwise.io/read/01h3rakkzfrz40wbne6h76vpr1)) #Highlight #[[2023-06-25]]
- 执行 `ps -efj` 命令，可以查看进程对应的进程组 ID（PGID）和 session ID（SID） ([View Highlight](https://read.readwise.io/read/01h3ramyhe9khaykqfhwxtnt26)) #Highlight #[[2023-06-25]]
- session 通常会有一个控制终端。控制终端是在 session leader 进程第一次打开 tty 设备时建立的（有些 Unix 系统需要执行特定的调用才能将一个 tty 设置为控制终端）。对于一个由交互式 shell 创建的会话，控制终端就是用户登录所使用的终端。一个终端最多可以成为一个 session 的控制终端。 ([View Highlight](https://read.readwise.io/read/01h3ran94x3bvvxm83eh4q8vjj)) #Highlight #[[2023-06-25]]
- 打开控制终端后，session leader 将成为该终端的控制进程 ([View Highlight](https://read.readwise.io/read/01h3ranvfj1vvs25zrdwq854g4)) #Highlight #[[2023-06-25]]
- 如果终端断开连接（例如终端窗口被关闭），控制进程会收到一个 `SIGHUP` 信号，如果控制进程是 `shell`，它会在退出前先向当前 session 中已暂停的 job 发送 `SIGCONT` 信号，并在这些 job 恢复运行后向所有 job 发送 `SIGHUP` 信号。这就是关闭终端窗口时，终端中的后台执行命令或已暂停命令也会被终止的原因 ([View Highlight](https://read.readwise.io/read/01h3rapf49h18jbe0wwpfyeqjm)) #Highlight #[[2023-06-25]]
- 在任意时刻一个 session 中有且仅有一个 job 位于前台，没有执行任何命令时，前台 job 就是交互式 shell 本身 ([View Highlight](https://read.readwise.io/read/01h3rapvpwzr1shm8qq4akak91)) #Highlight #[[2023-06-25]]
- 一个 session 中只有前台 job 可以从控制终端读取输入并向其发送输出 ([View Highlight](https://read.readwise.io/read/01h3raq3hveee4enpzz0ev70w7)) #Highlight #[[2023-06-25]]
- 执行 `ps l` 命令时，如果 STAT 一栏包含小写的 `s`，该进程是其所在 session 的 session leader；如果包含 `+` 号，说明该进程属于其所在 session 的前台 job ([View Highlight](https://read.readwise.io/read/01h3raqc6zyp3v49xy5e1pvfnj)) #Highlight #[[2023-06-25]]
- 一个 session 可以有任意数量的后台 job，这些作业是通过用 `&` 字符来作为命令后缀而创建的 ([View Highlight](https://read.readwise.io/read/01h3rarecwg16e62m4zxct570r)) #Highlight #[[2023-06-25]]
- 如果一个后台 job 尝试去读取或写入终端，终端驱动会向其发送 `SIGTTIN` 或 `SIGTTOU` 信号 ([View Highlight](https://read.readwise.io/read/01h3rasv0wmwad13rhhv4fbpp4)) #Highlight #[[2023-06-25]]
- `SIGTTIN` 信号的默认行为是 suspend，但即使程序故意忽略了 `SIGTTIN` 信号，也无法从终端中成功读取到数据，`SIGTTOU` 也是同理 ([View Highlight](https://read.readwise.io/read/01h3rat10ezpwyaj53wygaxzwh)) #Highlight #[[2023-06-25]]
- 为了实现 job controll，tty 还需要记录并且实时更新当前 session 的前台 job，这一任务实际上是由作为 session leader 的交互式 shell 来完成的，tty 只是被动地读取前台 job 信息 ([View Highlight](https://read.readwise.io/read/01h3ratrkmgdc38hqkmqf2r2jq)) #Highlight #[[2023-06-25]]
- 在创建一个新的 job 并运行于前台后，shell 将 tty 当前的前台 job 设置为该 job；之后 shell 会通过 `wait()` 系统调用监控子进程也就是所有 job 的运行状态。如果当前的前台 job 结束运行或者被用户通过 `^Z` 暂停，终端的控制权将重新归还给 shell，此时 shell 要做的第一件事是将 tty 当前的前台 job 重置为自己。否则，它自己对 tty 的 IO 也会失败（shell 需要打印提示符，循环读取输入以及打印刚刚被停止的进程）。 ([View Highlight](https://read.readwise.io/read/01h3raw2x8ns6yf2acavww3x7v)) #Highlight #[[2023-06-25]]
- 如果在当前的前台 job 中有多个进程，它们全都可以自由地向 TTY 输出，或者同时试图从 TTY 读取。job controll 只是保护你免受不同 job 的干扰 ([View Highlight](https://read.readwise.io/read/01h3rawjzfkfdwn5xvvgjarzjf)) #Highlight #[[2023-06-25]]
- 终端系统的具体实现由三层驱动组成，示意图如下：
  
  •   最上层提供通用的字符设备接口（如 `read()`、`write()` 和 `ioctl()`）给用户进程访问，图中省略了用户进程访问字符设备所经过的 VFS 等中间层。
    
    用户进程通过字符设备接口写入要发送到 tty 设备的数据，然后数据通过 `line discipline` 传递给 tty 设备驱动的 `write()` 方法。
    
    用户进程对字符设备执行 `read()` 时，会调用 `line discipline` 的 `read()` 方法，最终从输入缓冲区中获取数据。
    
  •   中间的 `line discipline` 包装了终端设备层的访问行为，对经过的字符进行处理后放入专门的输入和输出缓冲区。此外 `line discipline` 还有保存未回车提交的字符缓冲区，开启 tty 的 echo 配置时，写入到字符缓冲区的字符会自动被复制到输出缓冲区，最后写入到 tty 设备驱动。
    
  •   下层硬件驱动与硬件或虚拟设备通信，并负责将接收到的数据发送给 `line discipline`。 ([View Highlight](https://read.readwise.io/read/01h3razpm5ddhq3tahb3v5b2zp)) #Highlight #[[2023-06-25]]
- 有些情况下用户进程可配置 `line discipline` 不对经过的数据进行处理，即数据将未经处理直接发送给用户进程 ([View Highlight](https://read.readwise.io/read/01h3razyjhe8dtahvzdh9j74na)) #Highlight #[[2023-06-25]]
- `line discipline` 是 tty 系统三层实现中最复杂的部分，顶层和底层的驱动只负责单一的数据输入输出功能，`line discipline` 层承担了数据处理和控台职能 ([View Highlight](https://read.readwise.io/read/01h3rb0gadqgsj2ah0j4y73hxp)) #Highlight #[[2023-06-25]]
- 追溯到计算机发展的初期，CPU 的计算能力和内存大小都非常有限，如果由用户程序处理单个字符的输入，每一次输入都需要切换 CPU 上下文甚至从磁盘换入换出内存，频次较高的终端输入就会成为计算机的性能瓶颈，因此在内核建立中间层统一处理字符的输入是非常高效的选择 ([View Highlight](https://read.readwise.io/read/01h3rb21p31k3ahxnmr21k2xf9)) #Highlight #[[2023-06-25]]
- line edit：在输入出错的情况下，用户可以输入特殊字符对尚未通过回车提交的字符进行编辑，`line discipline` 负责将特殊字符转换为缓冲字符的编辑操作，如 `^H` 退格、`^W` 擦除字、`^U` 清空行、`^D` EOF ([View Highlight](https://read.readwise.io/read/01h3rb2p15pf9014n6jzp31845)) #Highlight #[[2023-06-25]]
- `line discipline` 使得终端提供的功能更加完整，但我们并不总是需要上述的所有特性：
  
  •   计算机性能大幅提升的现在，line buffer 已经不再必要。
  •   有时候我们需要自定义用于 line edit 和 job controll 的自定义按键。
  •   打开 vi 编辑器的插入模式时，需要禁用 job controll，切换回命令模式后需要重新开启，且禁用 echo 功能。
  •   通过 ssh 连接到远程主机时，需要禁用本地终端的 job controll，否则在本地输入 `^C` 会直接发送 `SIGINT` 信号给本地的前台 job 即 ssh 客户端进程，即使 ssh 进程忽略了该信号，也无法通过输入将字符发送到远程终端。
  
  因此 `line discipline` 提供的这些特性都是可以配置或者开关的。 ([View Highlight](https://read.readwise.io/read/01h3rb3ppzsf7pgt2d1jzmdqhj)) #Highlight #[[2023-06-25]]
- tty 的各种行为具有极高的可配置性，通过 `stty -a` 命令可以列出当前 tty 的所有配置（`-F` 可以指定其他 tty 设备） ([View Highlight](https://read.readwise.io/read/01h3rb4j67w3zraer64zh9jhky)) #Highlight #[[2023-06-25]]
- 执行 `stty sane` 可以将当前 tty 恢复到默认配置。 ([View Highlight](https://read.readwise.io/read/01h3rbh92vga97he0bnj9vphyb)) #Highlight #[[2023-06-25]]
- `stty` 使用 SUSv3 定义的 `termios` api 操作 tty 的配置，在所有 Unix 系统都可以通用，此外进程还可以使用 `ioctl` 或者 `libc` 提供的库函数读取或修改已打开的 TTY 设备的配置 ([View Highlight](https://read.readwise.io/read/01h3rbhk3w5087ra012g83wkpx)) #Highlight #[[2023-06-25]]
- 虽然操作系统通过内核的终端模拟器实现了对终端硬件设备的模拟，但这种 tty 系统无法适应一些场景下的需求：
  
  •   用户希望使用由用户实现的终端模拟程序以扩展终端的功能，需要某种机制接入当前的 tty 系统并替代内核的终端模拟器。
  •   用户希望实现通过网络访问远程主机上的面向终端程序（比如 `vi`），面向终端程序期望通过终端打开，以便执行一些面向终端的操作如通过 termios 接口设置终端 `icanon` 和 `echo` 开关 flag，以及实现终端对前台 job 的控制。这些操作要求远程主机上必须打开一个终端，否则对应的系统调用会执行失败，但我们无法通过 socket 等数据传输机制来连接本地程序到远程主机的终端模拟器。
  
  tty 系统的特点就是在不断扩展的同时，仍然保持对历史设计的兼容性。为了实现以上需求，Unix 在原有 tty 系统的基础上发展出了伪终端，今天我们所使用的终端大部分都是伪终端 ([View Highlight](https://read.readwise.io/read/01h3rbk33ns7b403rg2eq1z7fh)) #Highlight #[[2023-06-25]]
- 伪终端（pseudoterminal）是一组成对的虚拟设备：一个 pty master 和一个 pty slave，有时也被称为 pty pair。一对伪终端设备提供了像双向管道一样的 IPC 通道 — 两个进程可以分别打开 master 和 slave，然后通过伪终端向任一方向传输数据。熟悉 Linux 网络的话你会发现它们特别像 veth pair。 ([View Highlight](https://read.readwise.io/read/01h3rfmx66pj4q3xv1f0z95scw)) #Highlight #[[2023-06-25]]
- 在使用时，slave 设备代替原来的标准 tty 打开面向终端的程序，作为控制终端。 ([View Highlight](https://read.readwise.io/read/01h3rfwe5thv15w23ckap0qe14)) #Highlight #[[2023-06-25]]
- 许多介绍 tty 的文章会把 pty master、pty slave 和 tty 视作三个独立个体进行交互，却忽视了 pty slave 本身就是 `type=pty` 的 tty 设备（`type=console` 为标准 tty 设备即终端模拟器）。 ([View Highlight](https://read.readwise.io/read/01h3rfwt1wc3c4bsj9rkng28ey)) #Highlight #[[2023-06-25]]
- 为了避免竞争条件，进程必须通过 `/dev/ptmx` 分配一个 pty master，对应的 pty slave 设备文件（`/dev/pts/N`）也会同时被创建出来，但必须对 pty master 的文件描述符执行特定调用后才能打开使用。虽然 pty master 实际上是和 pty slave 同一类型的 tty 设备，但它不会出现在 `/dev` 文件系统中，用户程序只能通过这个文件描述符和它交互（SUSv3 是这样定义的，实际上 macOS 会预先创建好许多对伪终端设备，master 命名为 `/dev/pty[p-za-e][0-9a-f]`）。 ([View Highlight](https://read.readwise.io/read/01h3rg0myzwe0chk13xsztsf67)) #Highlight #[[2023-06-25]]
- 打开 pty master 对应的 pty slave 设备，打开前需要依次执行 `grantpt`、`unlockpt`、`ptsname` 等调用以获取 slave 设备的文件名和使用权限。因为子进程是一个 session leader 且没有控制终端，所以 pty slave 会自动成为子进程的控制终端。 ([View Highlight](https://read.readwise.io/read/01h3rg3yrqcz19rgbcnjv98nyf)) #Highlight #[[2023-06-25]]
- 伪终端支持任意两个进程之间通信，并不要求它们之间有父子关系，只需要另一个进程能够获取到 pty master 对应的 pty slave 设备的名称并打开它。 ([View Highlight](https://read.readwise.io/read/01h3rg45pjjqfy4my9w3cnqex7)) #Highlight #[[2023-06-25]]
- Linux 和 macOS 对伪终端的命名规则也完全不同，因为它们分别继承了 system V 和 BSD 的实现，SUSv3 基于 System V 规范化了伪终端的实现，按该规范实现的伪终端被称为 UNIX 98 Pseudoterminals ([View Highlight](https://read.readwise.io/read/01h3rg4mgzaj6gt8608pe51pga)) #Highlight #[[2023-06-25]]
- `forkpty()` 函数封装了 `openpty()`、`fork(2)` 和 `login_tty()` 等函数来获取一对伪终端设备，并创建一个在伪终端中运行的子进程。子进程被创建后会创建一个新的会话，并打开 pty slave 使其成为子进程的控制终端，复制 pty slave 的文件描述符并设置为子进程的标准输入、输出和错误，最后关闭 pty slave。像 `fork` 一样该函数会分别在父子进程中返回，通过判断返回的子进程 ID 是否为 0，我们可以在子进程逻辑中通过 `exec` 执行最终需要在终端中运行的程序。 ([View Highlight](https://read.readwise.io/read/01h3rg7j554pfchcbt25c0wyrr)) #Highlight #[[2023-06-25]]
- 在实践中，伪终端被用来实现终端模拟程序如 iterm2，应用程序从 pty master 读取数据并像终端模拟器一样将数据渲染到显示器；还被用来实现远程登录程序如 sshd，从 pty master 读取的数据通过网络发送到另一台主机上连接到终端或终端模拟器的 ssh 客户端程序。 ([View Highlight](https://read.readwise.io/read/01h3rg82104zbbr3m5pkragtms)) #Highlight #[[2023-06-25]]