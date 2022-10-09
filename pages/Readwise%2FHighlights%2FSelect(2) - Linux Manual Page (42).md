title:: Readwise/Highlights/Select(2) - Linux Manual Page (42)
author:: [[man7.org]]
full-title:: Select(2) - Linux Manual Page
category:: #articles
url:: https://man7.org/linux/man-pages/man2/select.2.html

- select() can monitor only file descriptors numbers that
       are less than FD_SETSIZE (1024)—an unreasonably low limit for
       many modern applications—and this limitation will not change.
       All modern applications should instead use poll(2) or epoll(7),
       which do not suffer this limitation. #Highlight #[[2021-07-03]]
- even if a file descriptor indicates as writable, a large
              write may still block #Highlight #[[2021-07-03]]
- An fd_set is a fixed size buffer. #Highlight #[[2021-07-03]]
- The operation of select() and pselect() is not affected by the
       O_NONBLOCK flag. #Highlight #[[2021-07-03]]
- On systems that lack pselect(), reliable (and more portable)
       signal trapping can be achieved using the self-pipe trick.  In
       this technique, a signal handler writes a byte to a pipe whose
       other end is monitored by select() in the main program.  (To
       avoid possibly blocking when writing to a pipe that may be full
       or reading from a pipe that may be empty, nonblocking I/O is used
       when reading from and writing to the pipe.) #Highlight #[[2021-07-03]]
- If a file descriptor being monitored by select() is closed in
       another thread, the result is unspecified. #Highlight #[[2021-07-03]]
- The Linux kernel allows file descriptor sets of arbitrary size,
       determining the length of the sets to be checked from the value
       of nfds.  However, in the glibc implementation, the fd_set type
       is fixed in size. #Highlight #[[2021-07-03]]
- the current implementation ignores any file
       descriptor in these sets that is greater than the maximum file
       descriptor number that the process currently has open. #Highlight #[[2021-07-03]]
- On Linux, select() may report a socket file descriptor as "ready
       for reading", while nevertheless a subsequent read blocks.  This
       could for example happen when data has arrived but upon
       examination has the wrong checksum and is discarded.  There may
       be other circumstances in which a file descriptor is spuriously
       reported as ready.  Thus it may be safer to use O_NONBLOCK on
       sockets that should not block. #Highlight #[[2021-07-03]]