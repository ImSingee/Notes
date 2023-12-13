title:: Readwise/Highlights/使用BPF, 将Go网络程序的吞吐提升8倍
author:: [[by smallnest]]
full-title:: 使用BPF, 将Go网络程序的吞吐提升8倍
category:: #articles
url:: https://colobu.com/2022/06/05/use-bpf-to-make-the-go-network-program-8x-faster/

- 要为标准库的PacketConn设置BPF过滤，也有多种办法，比如调用`syscall.SetsockoptInt`进行设置。但是[golang.org/x/net/ipv4](https://pkg.go.dev/golang.org/x/net/ipv4#PacketConn.SetBPF)提供了SetBPF方法，我们可以直接将标准库的PacketConn转换成ipv4.PacketConn,再进行设置。 ([View Highlight](https://read.readwise.io/read/01hdjf9pkxvtqz8cmjqbe1ek5z)) #Highlight #[[2023-10-25]]