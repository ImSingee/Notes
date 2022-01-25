- #bochs
-
- bochs [官网](https://bochs.sourceforge.io/)
- v2.7 [下载地址](https://sourceforge.net/projects/bochs/files/bochs/2.7/)
-
- 我们选择源码包下载（[bochs-2.7.tar.gz](https://sourceforge.net/projects/bochs/files/bochs/2.7/bochs-2.7.tar.gz/download)），解压放到 `/Applications/bochs-2.7` 下
-
- ```bash
  cd /Applications/bochs-2.7
  ./configure\
    --prefix /Applications/bochs-2.7/bochs \
    --enable-debugger \
    --enable-disasm \
    --enable-iodebug \
    --enable-x86-debugger
  make
  make install
  ```
-