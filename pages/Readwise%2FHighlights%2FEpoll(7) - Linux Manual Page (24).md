title:: Readwise/Highlights/Epoll(7) - Linux Manual Page (24)
author:: [[man7.org]]
full-title:: Epoll(7) - Linux Manual Page
category:: #articles
url:: https://man7.org/linux/man-pages/man7/epoll.7.html

- The epoll event distribution interface is able to behave both as
       edge-triggered (ET) and as level-triggered (LT). #Highlight #[[2021-07-03]]
- edge-triggered mode
       delivers events only when changes occur on the monitored file
       descriptor #Highlight #[[2021-07-03]]
- EPOLLONESHOT #Highlight #[[2021-07-03]]
- If multiple threads (or processes, if child processes have
       inherited the epoll file descriptor across fork(2)) are blocked
       in epoll_wait(2) waiting on the same epoll file descriptor and a
       file descriptor in the interest list that is marked for edge-
       triggered (EPOLLET) notification becomes ready, just one of the
       threads (or processes) is awoken from epoll_wait(2).  This
       provides a useful optimization for avoiding "thundering herd"
       wake-ups in some scenarios. #Highlight #[[2021-07-03]]