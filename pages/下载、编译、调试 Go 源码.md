- Go 的源码存放在 [官方 Repo](https://go.googlesource.com/go) 和 [Github Mirror](https://github.com/golang/go)，为了简化开始的流程，我们直接从 Github 克隆，同时，为了避免出问题，我们不从 master 分支开始，而是在克隆后切换到最新的稳定 tag（写这篇文章时是 `go1.17.6`）
- ```shell
  cd /opt
  sudo mkdir go
  sudo chown `whoami`:staff go
  git clone git@github.com:golang/go.git
  cd /opt/go
  git checkout go1.17.6
  ```
- 首先第一步永远是进行测试保证你下载的代码没有问题，Go 已经实现了 [[自举]]，因此必须已经[安装](https://go.dev/doc/install)好了 Go
- ```shell
  cd /opt/go/src
  ./all.bash # 编译并测试 Go 命令
  ```
- 看到 ALL TESTS PASSED 即为成功
- ![2022_01_23_image.png](https://cdn.logseq.com/%2Fa738fab4-25bd-41b0-bb53-62a3b83356f2e53e27f4-77ff-479d-86b8-99898dd25a7a2022_01_23_image.png?Expires=4796492069&Signature=NwGei1solzhSzx49snivfHP9fztWpD3~TQxbirr6Pq8chTZzSvycL~KZ9tADVSDMSgjLvUvSY1Y-1gqgh4R2qlEflcNt0TDY2~8FDe838tklTeRAipInXrofUDqQMvz723B7fOcLGqQglr8UhYjWszPF-5ESINCe0pDjijDtFML4BgOricwJRjfMtwxwBWC1qLdXKN5jC3EWajMsYNMKr5G9qutm67s7ox03aPUhokHe9YZiUhfXr8TtG-1SsguxnWJF8ICF~VKCHOt37OsbF4u82ucFPxxShCBc6-QlaK9ZbJPMvTnD4QUj7CGGin5iHssmYmSKyYUbe0L5daSF3g__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
-
- 简单看下 [all.bash](https://github.com/golang/go/blob/go1.17.6/src/all.bash) 做了什么
  collapsed:: true
	- ```bash
	  #!/usr/bin/env bash
	  # Copyright 2009 The Go Authors. All rights reserved.
	  # Use of this source code is governed by a BSD-style
	  # license that can be found in the LICENSE file.
	  
	  set -e
	  if [ ! -f make.bash ]; then
	  	echo 'all.bash must be run from $GOROOT/src' 1>&2
	  	exit 1
	  fi
	  OLDPATH="$PATH"
	  . ./make.bash "$@" --no-banner
	  bash run.bash --no-rebuild
	  PATH="$OLDPATH"
	  $GOTOOLDIR/dist banner  # print build info
	  ```
- 1. 如果 make.bash 不存在，则报错
  2. 运行 [make.bash](https://github.com/golang/go/blob/go1.17.6/src/make.bash)
  3. 运行 [run.bash](https://github.com/golang/go/blob/go1.17.6/src/run.bash)
  4. 打印 build info
-
- [run.bash](https://github.com/golang/go/blob/go1.17.6/src/run.bash) 所做的事情也很简单
  collapsed:: true
	- ```bash
	  #!/usr/bin/env bash
	  # Copyright 2009 The Go Authors. All rights reserved.
	  # Use of this source code is governed by a BSD-style
	  # license that can be found in the LICENSE file.
	  
	  # Environment variables that control run.bash:
	  #
	  # GO_TEST_SHARDS: number of "dist test" test shards that the
	  # $GOROOT/test directory will be sliced up into for parallel
	  # execution. Defaults to 1, unless GO_BUILDER_NAME is also specified,
	  # in which case it defaults to 10.
	  #
	  # GO_BUILDER_NAME: the name of the Go builder that's running the tests.
	  # Some tests are conditionally enabled or disabled based on the builder
	  # name or the builder name being non-empty.
	  
	  set -e
	  
	  if [ ! -f ../bin/go ]; then
	  	echo 'run.bash must be run from $GOROOT/src after installing cmd/go' 1>&2
	  	exit 1
	  fi
	  
	  eval $(../bin/go env)
	  export GOROOT   # The api test requires GOROOT to be set, so set it to match ../bin/go.
	  export GOPATH=/nonexist-gopath
	  
	  unset CDPATH	# in case user has it set
	  export GOBIN=$GOROOT/bin  # Issue 14340
	  unset GOFLAGS
	  unset GO111MODULE
	  
	  export GOHOSTOS
	  export CC
	  
	  # no core files, please
	  ulimit -c 0
	  
	  # Raise soft limits to hard limits for NetBSD/OpenBSD.
	  # We need at least 256 files and ~300 MB of bss.
	  # On OS X ulimit -S -n rejects 'unlimited'.
	  #
	  # Note that ulimit -S -n may fail if ulimit -H -n is set higher than a
	  # non-root process is allowed to set the high limit.
	  # This is a system misconfiguration and should be fixed on the
	  # broken system, not "fixed" by ignoring the failure here.
	  # See longer discussion on golang.org/issue/7381.
	  [ "$(ulimit -H -n)" = "unlimited" ] || ulimit -S -n $(ulimit -H -n)
	  [ "$(ulimit -H -d)" = "unlimited" ] || ulimit -S -d $(ulimit -H -d)
	  
	  # Thread count limit on NetBSD 7.
	  if ulimit -T &> /dev/null; then
	  	[ "$(ulimit -H -T)" = "unlimited" ] || ulimit -S -T $(ulimit -H -T)
	  fi
	  
	  exec ../bin/go tool dist test -rebuild "$@"
	  ```
- 不过是检查了下是否已经 make 过、设置一些环境变量、设置 ulimit 后运行测试 `go tool dist test -rebuild`
-
- [make.bash](https://github.com/golang/go/blob/go1.17.6/src/make.bash) 则是进行的真正的编译，但剔除掉各种检查和环境变量的设置，其真正核心的内容不过是两行
- ```bash
  # L184
  GOROOT="$GOROOT_BOOTSTRAP" GOOS="" GOARCH="" GO111MODULE=off "$GOROOT_BOOTSTRAP/bin/go" build -o cmd/dist/dist ./cmd/dist
  
  # L206-209
  # Run dist bootstrap to complete make.bash.
  # Bootstrap installs a proper cmd/dist, built with the new toolchain.
  # Throw ours, built with Go 1.4, away after bootstrap.
  ./cmd/dist/dist bootstrap -a $vflag $GO_DISTFLAGS "$@"
  ```
- 即编译 [cmd/dist](https://pkg.go.dev/cmd/dist) 然后运行它（传递 bootstrap 子命令）来执行真正的编译过程
- 而 cmd/dist 所做的事情，也就是真正的编译 Go 了，在[官方的帮助](https://github.com/golang/go/blob/go1.17.6/src/cmd/dist/README#L7-L13)中写明了流程
	- The process to install Go 1.x, for x ≥ 5, is:
	- 1. Build cmd/dist with Go 1.4.
	  2. Using dist, build Go 1.x compiler toolchain with Go 1.4.
	  3. Using dist, rebuild Go 1.x compiler toolchain with itself.
	  4. Using dist, build Go 1.x cmd/go (as go_bootstrap) with Go 1.x compiler toolchain.
	  5. Using go_bootstrap, build the remaining Go 1.x standard library and commands.
	-