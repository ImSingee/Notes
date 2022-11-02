title:: Readwise/Highlights/Minikube vs. kind vs. k3s - What should I use?
author:: [[Rancher Labs]]
full-title:: Minikube vs. kind vs. k3s - What should I use?
category:: #articles
url:: https://shipit.dev/posts/minikube-vs-kind-vs-k3s.html

- Below you can find a table that lists a few key facts of each tool.
  
  minikube	kind	k3s
  runtime	VM	container	native
  supported architectures	AMD64	AMD64	AMD64, ARMv7, ARM64
  supported container runtimes	Docker,CRI-O,containerd,gvisor	Docker	Docker, containerd
  startup time initial/following	5:19 / 3:15	2:48 / 1:06	0:15 / 0:15
  memory requirements	2GB	8GB (Windows, MacOS)	512 MB
  requires root?	no	no	yes (rootless is experimental)
  multi-cluster support	yes	yes	no (can be achieved using containers)
  multi-node support	no	yes	yes
  project page	minikube	kind	k3s
  Comments #Highlight #[[2022-06-24]]