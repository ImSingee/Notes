title:: Readwise/Highlights/SwiftUI 与 Core Data —— 安全地响应数据
author:: [[fatbobman.com]]
full-title:: SwiftUI 与 Core Data —— 安全地响应数据
category:: #articles
url:: https://www.fatbobman.com/posts/modern-Core-Data-Respond-Data-safely/
tags:: #[[favorite]] #[[swift]] #[[Swift]] #[[肘子的swift记事本]]

- 如今的 Core Data，随着云同步以及持久化存储历史跟踪的普及，数据库中的某个数据可能在任意时刻被其他的设备或同一个设备中使用该数据库的其他进程所删除。开发者不能像之前那样假设自己对数据具备完全的掌控能力。在代码或视图中，如果不为随时可能已被删除的数据做好安全准备，问题将十分地严重。 ([View Highlight](https://read.readwise.io/read/01hd3fce4zjzxrswyz97bh1hth)) #Highlight #[[2023-10-19]]
- 在类 Redux 框架中，为了线程安全（ Reducer 未必运行于主线程，详细请参阅之前的文章 ）我们不会将托管对象实例直接发送给 Reducer，而是传递转换后的值类型 ([View Highlight](https://read.readwise.io/read/01hd3fn97yxxmsfwe9xs612cfc)) #Highlight #[[2023-10-19]]
- 为了确保线程安全，托管对象只应在视图之间进行传递，同时用于视图显示的数据最好也只在视图之内进行获取。任何可能脱离视图的传递过程都应使用托管对象实例对应的值类型版本 ([View Highlight](https://read.readwise.io/read/01hd3frv7akmjndy8cxe3faabq)) #Highlight #[[2023-10-19]]
- 为了避免对主线程造成过多的影响，我们通常会在私有上下文中进行会对数据产生变化的操作。将操作方法的参数设置为值类型，将迫使开发者在对数据进行操作时（ 添加、删除、更改等 ）首先需要确认对应数据（ 数据库中 ）是否存在 ([View Highlight](https://read.readwise.io/read/01hd3fssjeep36mgc256rw43wm)) #Highlight #[[2023-10-19]]
- 尽管值类型帮助我们规避了可能存在的线程风险，但又出现了视图无法对托管对象实例的变化进行实时响应的新问题。通过在视图中获取值类型数据对应的托管对象实例，便可以既保证安全，又保持了响应的实时性。 ([View Highlight](https://read.readwise.io/read/01hfa0bpf6ynb4vznqgr9k6fqw)) #Highlight #[[2023-11-16]]