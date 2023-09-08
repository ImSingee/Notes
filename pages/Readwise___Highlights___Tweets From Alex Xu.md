title:: Readwise/Highlights/Tweets From Alex Xu
author:: [[@alexxubyte on Twitter]]
full-title:: Tweets From Alex Xu
category:: #tweets
url:: https://twitter.com/alexxubyte
- HTTP 1.0 -> HTTP 1.1 -> HTTP 2.0 -> HTTP 3.0 (QUIC).
  
  What problem does each generation of HTTP solve?
  
  The diagram below illustrates the key features.
  
  🔹HTTP 1.0 was finalized and fully documented in 1996. Every request to the same server requires a separate TCP connection.
  
  🔹HTTP 1.1 was published in 1997. A TCP connection can be left open for reuse (persistent connection), but it doesn’t solve the HOL (head-of-line) blocking issue.
  
  HOL blocking - when the number of allowed parallel requests in the browser is used up, subsequent requests need to wait for the former ones to complete.
  
  🔹HTTP 2.0 was published in 2015. It addresses HOL issue through request multiplexing, which eliminates HOL blocking at the application layer, but HOL still exists at the transport (TCP) layer.
  
  As you can see in the diagram, HTTP 2.0 introduced the concept of HTTP “streams”: an abstraction that allows multiplexing different HTTP exchanges onto the same TCP connection. Each stream doesn’t need to be sent in order.
  
  🔹HTTP 3.0 first draft was published in 2020. It is the proposed successor to HTTP 2.0. It uses QUIC instead of TCP for the underlying transport protocol, thus removing HOL blocking in the transport layer.
  
  QUIC is based on UDP. It introduces streams as first-class citizens at the transport layer. QUIC streams share the same QUIC connection, so no additional handshakes and slow starts are required to create new ones, but QUIC streams are delivered independently such that in most cases packet loss affecting one stream doesn't affect others.
  
  Question: When shall we upgrade to HTTP 3.0? Any pros & cons you can think of?
  
  –
  Subscribe to our weekly newsletter to get a Free System Design PDF (158 pages): https://t.co/uc5M7Cdq84 ([View Tweet](https://twitter.com/alexxubyte/status/1692560840853962987)) #Highlight #[[2023-08-19]]