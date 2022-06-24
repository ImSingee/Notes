retrieved:: [[2022-05-29]]
author:: [[cs.umd.edu]]
category:: [[articles]]
source:: [[hypothesis]]
tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png){:height 200 :width 200}
- ## [[Readwise Highlights]]
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  For example, if a thread writes to field
	  a and then to field b, and the value of b
	  does not depend on the value of a, then the compiler is free
	  to reorder these operations, and the cache is free to flush b
	  to main memory before a. There are a number of potential
	  sources of reordering, such as the compiler, the JIT, and the
	  cache.
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  Volatile fields are special fields which
	  are used for communicating state between threads. Each read of a
	  volatile will see the last write to that volatile by any thread; in
	  effect, they are designated by the programmer as fields for which it
	  is never acceptable to see a "stale" value as a result of caching or
	  reordering.
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  Under the new memory model, it is still
	  true that volatile variables cannot be reordered with each other.  The
	  difference is that it is now no longer so easy to reorder normal field
	  accesses around them.  Writing 
	  to a volatile field has the same memory effect as a monitor release,
	  and reading from a volatile field has the same memory effect as a monitor
	  acquire. In effect, because the new memory model places stricter
	  constraints on reordering of volatile field accesses with other field
	  accesses, volatile or not, anything that was visible to thread A when
	  it writes to volatile field f becomes visible to thread B when it
	  reads f.
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  The most obvious
	  reason is that the writes which initialize instance and the
	  write to the instance field can be reordered by the compiler
	  or the cache, which would have the effect of returning what appears to
	  be a partially constructed Something.
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  For example, if a thread writes to field
	  a and then to field b, and the value of b
	  does not depend on the value of a, then the compiler is free
	  to reorder these operations, and the cache is free to flush b
	  to main memory before a. There are a number of potential
	  sources of reordering, such as the compiler, the JIT, and the
	  cache.
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  Volatile fields are special fields which
	  are used for communicating state between threads. Each read of a
	  volatile will see the last write to that volatile by any thread; in
	  effect, they are designated by the programmer as fields for which it
	  is never acceptable to see a "stale" value as a result of caching or
	  reordering.
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  Under the new memory model, it is still
	  true that volatile variables cannot be reordered with each other.  The
	  difference is that it is now no longer so easy to reorder normal field
	  accesses around them.  Writing 
	  to a volatile field has the same memory effect as a monitor release,
	  and reading from a volatile field has the same memory effect as a monitor
	  acquire. In effect, because the new memory model places stricter
	  constraints on reordering of volatile field accesses with other field
	  accesses, volatile or not, anything that was visible to thread A when
	  it writes to volatile field f becomes visible to thread B when it
	  reads f.
	- link:: [null](null)
	  on:: [[2022-05-26]]
	  tags:: 
	  The most obvious
	  reason is that the writes which initialize instance and the
	  write to the instance field can be reordered by the compiler
	  or the cache, which would have the effect of returning what appears to
	  be a partially constructed Something.