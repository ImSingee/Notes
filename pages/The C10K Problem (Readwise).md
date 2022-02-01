retrieved:: [[2022-02-01]], 2:43:35 PM
              author:: [[kegel.com]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
- ## [[Readwise Highlights]]
	- The name 'level triggered' comes from computer hardware
	  design; it's the opposite of 'edge triggered'.
	  Jonathon Lemon introduced the terms in his 
	  BSDCON 2000 paper on kqueue()
	                link:: [null](null)
	                on:: [[2021-07-04]]
	                tags::
	- An important bottleneck in this method is that read() or sendfile() 
	  from disk blocks if the page is not in core at the moment;
	  setting nonblocking mode on a disk file handle has no effect.
	  Same thing goes for memory-mapped disk files.
	  The first time a server needs disk I/O, its process blocks,
	  all clients must wait, and that raw nonthreaded performance goes to waste.
	  
	  This is what asynchronous I/O is for
	                link:: [null](null)
	                on:: [[2021-07-04]]
	                tags::
	- One approach is to use memory-mapped files,
	  and if mincore() indicates I/O is needed, ask a worker to do the I/O,
	  and continue handling network traffic
	                link:: [null](null)
	                on:: [[2021-07-04]]
	                tags::