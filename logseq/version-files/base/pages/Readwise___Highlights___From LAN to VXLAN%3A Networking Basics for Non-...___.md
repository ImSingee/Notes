title:: Readwise/Highlights/From LAN to VXLAN: Networking Basics for Non-...
author:: [[labs.iximiuz.com]]
full-title:: From LAN to VXLAN: Networking Basics for Non-Network Engineers
category:: #articles
url:: https://labs.iximiuz.com/courses/computer-networking-fundamentals/from-lan-to-vxlan#vlan

![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
None

- VLANs are usually created by _tagging_ Ethernet frames of a single L2 segment with some integer IDs (so-called VIDs), each ID forming a separate broadcast (sub-)domain. #Highlight #[[2024-06-07]]
- there cannot be more than 4096 VLANs sharing the same underlying L2 segment. There is simply 12 spare bits to encode the VLAN ID field in the Ethernet frame format. #Highlight #[[2024-06-07]]
- VXLAN nodes create a virtual L2 segment, hence an L2 broadcast domain. #Highlight #[[2024-06-07]]
- VXLAN would be just a way to overcome the limitation of VLAN on the number of networks per segment. #Highlight #[[2024-06-07]]