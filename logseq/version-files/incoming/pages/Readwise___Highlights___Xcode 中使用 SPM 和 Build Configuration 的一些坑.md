title:: Readwise/Highlights/Xcode 中使用 SPM 和 Build Configuration 的一些坑
author:: [[王巍 (onevcat)]]
full-title:: Xcode 中使用 SPM 和 Build Configuration 的一些坑
category:: #articles
url:: https://onevcat.com/2022/10/spm-in-xcode/
tags:: #[[favorite]] #[[Swift]]
- 当 Xcode 选择使用 `.debug` 去编译 SPM 包时，它按照 Xcode 通用的编译条件，“自动地”传入 `DEBUG`。但是什么时候 Xcode 会去选择使用 `.debug`，什么时候它选择用 `.release` 呢？
  
  答案可能让人大跌眼镜。在 Xcode 环境下，Xcode 会基于 Build Configuration 的名字，来选择 SPM 包的所使用的编译配置。具体来说，暂时发现的规则有：
  
  •   如果名字里包含有 `Debug` 或者 `Development` (不区分大小写)，那么 Xcode 会使用 `.debug` 来编译 SPM 包。比如默认的 `Debug`，以及 `Development`，`Debug_Testing`，`_development_`，`Not_DEBUG`，`hello development` 都在此列。
  •   否则，使用 `.release` 进行编译。比如默认的 `Release`，以及像是 `Dev`，`Testing`，`Staging`，`Prod`，`Beta`，`QA`，`CI` 等等，都会使用 `.release` 作为编译配置。 ([View Highlight](https://read.readwise.io/read/01hdzq8dx12p77w6h3mvdw131j)) #Highlight #[[2023-10-30]]