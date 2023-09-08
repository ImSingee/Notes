title:: Readwise/Highlights/06｜Pressable：如何实现一个体验好的点按组件？ - React Native 新架构实战课
author:: [[蒋宏伟]]
full-title:: 06｜Pressable：如何实现一个体验好的点按组件？ - React Native 新架构实战课
category:: #articles
url:: https://time.geekbang.org/column/article/504527
- 第一代点按组件 Touchable，功能丰富但学习成本太高；
  第二代点按组件 Button，简单易用但带了默认样式和反馈效果，通用性太差；
  第三代点按组件 Pressable，同时满足了简单易用和复杂效果可扩展的特性。 #Highlight #[[2023-04-25]]
- 在较老版本的手机浏览器中，点击事件存在 350ms 延迟；在微信聊天框中，点击对方的微信头像比点击右上角三个点的更多按钮，打开页面的速度慢一些；双击事件是常见的点按事件之一，Pressable 组件却没有提供；这三个现象涉及到了 Web、Android、iOS 和 React Native 这四个技术领域，但这三个现象其实都指向同一个答案。 #Highlight #[[2023-04-21]]
- 比如，用户已经点到购买按钮了，突然犹豫，又不想买了，于是将手指从按钮区域移开了。这时你得让用户能够反悔，能够取消即将触发的点击操作。
  这里我们就要引入一个新的概念：可保留区域 PressRect。点按事件可保留区域的偏移量（Press Retention Offset）默认是 0，也就是说默认情况下可见区域就是可保留区域。你可以通过设置 pressRetentionOffset 属性，来扩大可保留区域 PressRect #Highlight #[[2023-04-21]]
- 在你同时监听了 onPress 和 onLongPress 两个事件时，如果点按耗时小于 500ms，在你松手时触发的是点击事件 onPress；如果点按耗时大于 500ms，大致会在第 500ms 先触发长按事件 onLongPress，那这时即使你再松手也不会触发 onPress 事件了。也就是说，点击事件 onPress 和长按事件 onLongPress 是互斥的，触发了一个就不会再触发另一个了。 #Highlight #[[2023-04-21]]
- Button 组件的设计思想就是，别让开发者纠结选啥组件了，框架已经选好了，点按反馈的样式就和原生平台的自身风格保持统一就好了。 #Highlight #[[2023-04-21]]
- 第一代 Touchable 点按组件的设计思路是，提供多种原生平台的反馈风格给开发者自己选择 #Highlight #[[2023-04-21]]
- 第二代 Button 组件的实质是对 Touchable 组件的封装。在 Android 上是 TouchableNativeFeedback 组件，在 iOS 上是 TouchableOpacity 组 #Highlight #[[2023-04-21]]
- 担心你因为网络卡、机器卡不知道有没有自己点中，在你点完后给你视觉或触觉上的反馈；担心你走路的时候想点点不到，把事件的“可触发区域”、“可保留区域 ”设置得比视觉上的“可见区域”大上那么一些。 #Highlight #[[2023-04-21]]
- 微信的点按组件都是有交互反馈的，无论是背景颜色的加深，还是那些舒服的震动，又或者是动画。又比如，微信顶部右上角的加号按钮是很容易点击的，它的点击区域是比显示图标大上那么一丢丢，而且点到后，即使把手指挪开图标的位置再松开也是能触发点击的。 #Highlight #[[2023-04-21]]