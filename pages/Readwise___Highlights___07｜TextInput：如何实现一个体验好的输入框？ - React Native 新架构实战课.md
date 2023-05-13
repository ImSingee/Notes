title:: Readwise/Highlights/07｜TextInput：如何实现一个体验好的输入框？ - React Native 新架构实战课
author:: [[蒋宏伟]]
full-title:: 07｜TextInput：如何实现一个体验好的输入框？ - React Native 新架构实战课
category:: #articles
url:: https://time.geekbang.org/column/article/505780

- 控制键盘右下角按钮置灰置蓝的，是 TextInput 的enablesReturnKeyAutomatically属性，这个属性是 iOS 独有的属性，默认是false，也就是任何使用键盘右下角的按钮，都可以点击。你也可以通过将其设置为 true，使其在输入框中没有文字时置灰。 #Highlight #[[2023-04-21]]
- TextInput 的 autoFocus 属性，就是用于控制自动对焦用的，其默认值是 false。也就是说，所有的 TextInput 元素默认都不会自动的对焦，而我们将 TextInput 的 autoFocus 属性设置为 true 时，框架会在 TextInput 元素挂载后，自动帮我们进行对焦。 #Highlight #[[2023-04-21]]
- 异步更新情况下，JavaScript 线程和 UI 主线程是独立运行的，此时即便 JavaScript 线程卡了 1s，主线程依旧可以正常输入文字。但同步更新的情况下，从输入文字到展示文字会有 1s 的延迟， JavaScript 线程有 1s 的阻塞，UI 主线程也会卡死 1s。 #Highlight #[[2023-04-21]]
- 对于非受控组件来说，存储跨域两次 render 的可行方案是 ref。ref 的值不会因为组件刷新而重新声明，它是专门用来存储组件级别的信息的。React 官方推荐有三种场景我们可以用它：
  存储 setTimeout/setInterval 的 ID；
  存储和操作宿主组件（在 Web 中是 DOM 元素）；
  存储其他不会参与 JSX 计算的对象。 #Highlight #[[2023-04-21]]
- TextInput 组件是自带状态的宿主组件。TextInput 输入框中的文字状态、光标状态、焦点状态在 React Native 的 JavaScript 框架层的框架层有一份，在 Native 的还有一份，有时候业务代码中还有一份 #Highlight #[[2023-04-21]]