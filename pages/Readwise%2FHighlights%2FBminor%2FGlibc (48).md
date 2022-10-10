title:: Readwise/Highlights/Bminor/Glibc (48)
author:: [[github.com]]
full-title:: Bminor/Glibc
category:: #articles
url:: https://github.com/bminor/glibc/blob/master/misc/sys/select.h

- /* fd_set for select and pselect.  */
      
      
        
        typedef struct
      
      
        
          {
      
      
        
            /* XPG4.2 requires this member name.  Otherwise avoid the name
      
      
        
               from the global namespace.  */
      
      
        
        #ifdef __USE_XOPEN
      
      
        
            __fd_mask fds_bits[__FD_SETSIZE / __NFDBITS];