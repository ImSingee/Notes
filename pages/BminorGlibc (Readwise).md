retrieved:: [[2022-02-01]], 2:42:38 PM
              author:: [[github.com]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
- ## [[Readwise Highlights]]
	- /* fd_set for select and pselect.  */
	      
	      
	        
	        typedef struct
	      
	      
	        
	          {
	      
	      
	        
	            /* XPG4.2 requires this member name.  Otherwise avoid the name
	      
	      
	        
	               from the global namespace.  */
	      
	      
	        
	        #ifdef __USE_XOPEN
	      
	      
	        
	            __fd_mask fds_bits[__FD_SETSIZE / __NFDBITS];