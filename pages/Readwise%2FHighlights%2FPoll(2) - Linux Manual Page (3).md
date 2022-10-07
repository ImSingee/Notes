title:: Readwise/Highlights/Poll(2) - Linux Manual Page (3)
author:: [[man7.org]]
full-title:: Poll(2) - Linux Manual Page
category:: #articles
url:: https://man7.org/linux/man-pages/man2/poll.2.html

- The field fd contains a file descriptor for an open file.  If
       this field is negative, then the corresponding events field is
       ignored and the revents field returns zero. #Highlight #[[2021-07-03]]
- On success, poll() returns a nonnegative value which is the
       number of elements in the pollfds whose revents fields have been
       set to a nonzero value (indicating an event or an error).  A
       return value of zero indicates that the system call timed out
       before any file descriptors became read. #Highlight #[[2021-07-03]]
- poll() can fail with the error EAGAIN
       if the system fails to allocate kernel-internal resources #Highlight #[[2021-07-03]]