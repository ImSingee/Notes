title:: Readwise/Highlights/Rust中的错误处理
author:: [[juejin.cn]]
full-title:: Rust中的错误处理
category:: #articles
url:: https://juejin.cn/post/7276817683109412898
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- **错误（Errors）**：运行时发生的不寻常超出预期的行为
  
  •   **错误是严重的问题，通常无法通过代码来处理或修复。** 错误通常表示系统级问题，例如内存耗尽、虚拟机崩溃、类找不到等。这些问题通常由Java虚拟机（JVM）或底层操作系统引起，而不是由程序代码引起的。
  •   **错误不应该被程序员捕获或处理。** 程序员无法有效地处理错误，因此它们通常不被捕获，而是导致程序终止。
  
  **异常（Exceptions）**：运行时候发生的不规则，**预料之内的行为** 。
  
  •   **异常是可预测的问题，可以通过编写代码来捕获和处理。** 异常通常由程序代码引起，表示不同类型的错误情况，例如除零错误、空指针引用、文件未找到等。
  •   **异常处理是通过异常处理器来进行的** ([View Highlight](https://read.readwise.io/read/01hak32snb8jasnwmtt37brqn5)) #Highlight #[[2023-09-18]]