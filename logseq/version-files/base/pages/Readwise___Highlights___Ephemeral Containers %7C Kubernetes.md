title:: Readwise/Highlights/Ephemeral Containers | Kubernetes
author:: [[kubernetes.io]]
full-title:: Ephemeral Containers | Kubernetes
category:: #articles
url:: https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/

![](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
None

- [Pods](https://kubernetes.io/docs/concepts/workloads/pods/) are the fundamental building block of Kubernetes applications. Since Pods are intended to be disposable and replaceable, you cannot add a container to a Pod once it has been created. Instead, you usually delete and replace Pods in a controlled fashion using [deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/).
  
  Sometimes it's necessary to inspect the state of an existing Pod, however, for example to troubleshoot a hard-to-reproduce bug. In these cases you can run an ephemeral container in an existing Pod to inspect its state and run arbitrary commands. #Highlight #[[2024-04-28]]