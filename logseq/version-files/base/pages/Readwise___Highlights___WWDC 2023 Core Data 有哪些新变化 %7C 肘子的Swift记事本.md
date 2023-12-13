title:: Readwise/Highlights/WWDC 2023 Core Data 有哪些新变化 | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: WWDC 2023 Core Data 有哪些新变化 | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/what's-new-in-core-data-in-wwdc23
tags:: #[[Swift]] #[[肘子的swift记事本]]
- 在开启延迟迁移功能后，Core Data 会从轻量级迁移的操作中判断哪些操作即使在迁移的过程中暂不进行，也不会影响应用对最终完成的数据模型版本数据库的操作（例如，更新索引、删除已经不需要的属性，从有序关系更改为非有序关系等操作）。Core Data 将先跳过这些操作，直到开发者在应用中找到合适的时机，通过代码显式地执行这些“善后”操作 ([View Highlight](https://read.readwise.io/read/01hd3cf13aby68n5fjw29z1rbc)) #Highlight #[[2023-10-19]]
- 阶段式迁移包含两种迁移模式：轻量级迁移（NSLightweightMigrationStage）和自定义迁移（NSCustomMigrationStage）。它鼓励开发者将非轻量级迁移的迁移任务分解一系列的轻量级迁移的步骤。通过创建多个阶段，用最少的代码量，将数据模型迁移到最新版本。 ([View Highlight](https://read.readwise.io/read/01hd3cgh15mwkscs36fbcn2d5p)) #Highlight #[[2023-10-19]]