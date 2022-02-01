retrieved:: [[2022-02-01]], 2:42:39 PM
              author:: [[man7.org]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- The epoll event distribution interface is able to behave both as
	       edge-triggered (ET) and as level-triggered (LT).
	                link:: [null](null)
	                on:: [[2021-07-03]]
	                tags::
	- edge-triggered mode
	       delivers events only when changes occur on the monitored file
	       descriptor
	                link:: [null](null)
	                on:: [[2021-07-03]]
	                tags::
	- EPOLLONESHOT
	                link:: [null](null)
	                on:: [[2021-07-03]]
	                tags::
	- If multiple threads (or processes, if child processes have
	       inherited the epoll file descriptor across fork(2)) are blocked
	       in epoll_wait(2) waiting on the same epoll file descriptor and a
	       file descriptor in the interest list that is marked for edge-
	       triggered (EPOLLET) notification becomes ready, just one of the
	       threads (or processes) is awoken from epoll_wait(2).  This
	       provides a useful optimization for avoiding "thundering herd"
	       wake-ups in some scenarios.
	                link:: [null](null)
	                on:: [[2021-07-03]]
	                tags::