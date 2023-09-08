title:: Readwise/Highlights/How NAT Traversal Works
author:: [[tailscale.com]]
full-title:: How NAT Traversal Works
category:: #articles
url:: https://tailscale.com/blog/how-nat-traversal-works/
- Direct socket access may be tough depending on your situation. One
  workaround is to run a local proxy. Your protocol speaks to this
  proxy, and the proxy does both NAT traversal and relaying of your
  packets to the peer. This layer of indirection lets you benefit from
  NAT traversal without altering your original program. #Highlight #[[2023-08-21]]
- Some you might recognize are
  the Windows Defender firewall, Ubuntu’s ufw (using iptables/nftables),
  BSD’s pf (also used by macOS) and AWS’s Security Groups. #Highlight #[[2023-08-21]]
- On the wire, every connection ends up being
  bidirectional; it’s all individual packets flying back and forth #Highlight #[[2023-08-21]]
- For UDP, the rule is very simple: the firewall allows an inbound UDP
  packet if it previously saw a matching outbound packet. #Highlight #[[2023-08-21]]