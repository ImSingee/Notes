title:: Readwise/Highlights/掌握 TipKit：基础
author:: [[fatbobman.com]]
full-title:: 掌握 TipKit：基础
category:: #articles
url:: https://www.fatbobman.com/posts/mastering-TipKit-basic
tags:: #[[go inbox]] #[[inoreader]] #[[博客]] #[[肘子的swift记事本]]
- TipKit 为 @Parameter 提供了一个 `@Parameter(.transient)` 选项。在开启后，TipKit 将在应用重启时，使用 Tip 定义中提供的默认值而不使用持久化的值。与 Core Data 或 SwiftData 中的 `transient` 选项性质略有不同，在 TipKit 中，即使开启 `transient` 选项，数据仍会被持久化。这主要是为了方便在使用同一个 TipKit 数据源的不同应用和组件之间保持该参数的动态同步。 ([View Highlight](https://read.readwise.io/read/01hdd49bcseqvrgrctra1f1pdp)) #Highlight #[[2023-10-23]]
- 目前 TipKit 提供了三种 Tip 失效原因：
  
  •   actionPerformed：主要用于开发者在代码中主动产生的失效操作。
  •   tipClosed：点击 Tip 视图的关闭按钮（ `x` ）时会记录该原因。
  •   displayCountExceeded：当 Tip 显示的次数超过设定的阈值时，TipKit 会自动让该 Tip 失效，并记录该原因（下文详解）。
  
  请特别注意，让 Tip 失效和不让 Tip 显示是两个不同的概念。
  
  **我们通过规则来决定一个 Tip 是否满足了显示条件，但有一个前提是该 Tip 不能已经失效。否则即使满足了显示规则，如果 Tip 已经失效，TipKit 也不会显示该 Tip。** ([View Highlight](https://read.readwise.io/read/01hdd4g9y27s1n78nvaj2tmm6e)) #Highlight #[[2023-10-23]]