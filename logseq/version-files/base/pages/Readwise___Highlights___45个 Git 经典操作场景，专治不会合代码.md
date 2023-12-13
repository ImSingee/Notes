title:: Readwise/Highlights/45个 Git 经典操作场景，专治不会合代码
author:: [[微信公众平台]]
full-title:: 45个 Git 经典操作场景，专治不会合代码
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzI1NDY0MTkzNQ==&mid=2247496717&idx=1&sn=27c057efe610dd47ce7a16a0fa0b7967&chksm=e9c0a66ddeb72f7b53812126065c2d399d3ddc0a89659e65a3dfb72c1bc8c3ca3076b07079f6#rd
tags:: #[[favorite]] #[[git]] #[[inoreader]] #[[star]] #[[微信公众号]]
- 删除任意提交(commit)
  
  同样的警告：不到万不得已的时候不要这么做.
  
    $ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT$ git push -f [remote] [branch]
  
  或者做一个 交互式rebase 删除那些你想要删除的提交(commit)里所对应的行。 ([View Highlight](https://read.readwise.io/read/01hdg7rtksj8v064f8k0k5ry5n)) #Highlight #[[2023-10-24]]
- 如果你意外的做了 `git reset --hard`, 你通常能找回你的提交(commit), 因为Git对每件事都会有日志，且都会保存几天。
  
    (main)$ git reflog
  
  你将会看到一个你过去提交(commit)的列表, 和一个重置的提交。 ([View Highlight](https://read.readwise.io/read/01hdg7shqq5a9sps23p2s5pw1j)) #Highlight #[[2023-10-24]]
- 我想要暂存一个新文件的一部分，而不是这个文件的全部
  
  一般来说, 如果你想暂存一个文件的一部分, 你可这样做:
  
    $ git add --patch filename.x
  
  `-p` 简写。这会打开交互模式， 你将能够用 `s` 选项来分隔提交(commit)；然而, 如果这个文件是新的, 会没有这个选择， 添加一个新文件时, 这样做:
  
    $ git add -N filename.x
  
  然后, 你需要用 `e` 选项来手动选择需要添加的行，执行 `git diff --cached` 将会显示哪些行暂存了哪些行只是保存在本地了。 ([View Highlight](https://read.readwise.io/read/01hdg7vzsh12mk4597t6f318pz)) #Highlight #[[2023-10-24]]
- Git 在进行危险操作的时候会把原始的HEAD保存在一个叫ORIG_HEAD的变量里, 所以要把分支恢复到rebase/merge前的状态是很容易的。 ([View Highlight](https://read.readwise.io/read/01hdg8h5h4xkgm3j22ebdky7r0)) #Highlight #[[2023-10-24]]