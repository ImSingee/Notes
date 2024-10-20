title:: Readwise/Highlights/SwiftUI 和 Combine 编程
author:: [[王 巍]]
full-title:: SwiftUI 和 Combine 编程
category:: #books

- 在 SwiftUI 里，用户界面是严格被数据驱动的：在运行时，任何对于界面的修改，都只能通过修改数据来达成，而不能直接对界面进行调整和操作。 #Highlight #[[2023-07-30]]
- 在 SwiftUI 中，View 提供了 environmentObject(_:) 方法，来把某个 ObservableObject 的值注入到当前 View 层级及其子层级中去。在这个 View 的子层级中，可以使用 @EnvironmentObject 来直接获取这个绑定的环境值 #Highlight #[[2023-07-30]]
- 在对应的 View 生成时，我们不需要手动为被标记为 @EnvironmentObject 的值进行指定，它们会自动去查询 View 的 Environment 中是否有符合的类型的值，如果有则使用它们，如没有则抛出运行时的错误。 #Highlight #[[2023-07-30]]
- 通过在 Assets 文件中定义颜色，我们可以使用 Color("colorName") 的方式从定义中创建颜色。 #Highlight #[[2023-07-30]]
- 在同一个颜色名字的定义中，我们可以指定多个具体颜色，并一一设定它们的使用环境：比如在 iPhone 和 iPad 上使用不同颜色，在亮色和暗色设置上使用不同颜色等等。在实际使用代码初始化时，同样的名字在不同的条件下会按照预先的设置生成颜色。 #Highlight #[[2023-07-30]]
- 在底层，ViewBuilder 使用了所谓的 function builder 技术，来把 DSL 的 View 描述转换为实际的 View 对象 #Highlight #[[2023-07-30]]
- 如果你纠结于选择使用哪种方式的话，从 ObservableObject 开始入手会是一个相对好的选择：如果发现状态可以被限制在同一个 View 层级中，则改用 @State；如果发现状态需要大批量共享，则改用 @EnvironmentObject。 #Highlight #[[2023-07-30]]
- 纯函数，或者像 apply(item:) 这样可变依赖很少的类似纯函数的方式，和 Swift UI 配合得天衣无缝。Swift UI 强调 single source of truth，一个稳定可测试的 model 是 app 状态清晰的最重要的保证，也是在 SwiftUI 中传递状态时的首先需要考虑的方向。 #Highlight #[[2023-07-30]]
- 和一般的存储属性不同，@State 修饰的值，在 SwiftUI 内部会被自动转换为一对 setter 和 getter，对这个属性进行赋值的操作将会触发 View 的刷新，它的 body 会被再次调用，底层渲染引擎会找出界面上被改变的部分，根据新的属性值计算出新的 View，并进行刷新。 #Highlight #[[2023-07-30]]
- SwiftUI 和 Combine 都是在 WWDC 2019 上 Apple 公布的开发框架，它们都是由纯 Swift 编写的。前者是一个声明式 UI 的用户界面开发框架，后者是基于响应式编程，用于处理数据流的框架。 #Highlight #[[2023-07-30]]
- SwiftUI 依赖 Combine 来进行背后的数据处理部分的工作。得益于 Swift 5 所带来的 ABI 稳定，现在 Apple 可以放手在 iOS 和 macOS 等系统中内置 Swift 运行环境，这也使得 Apple 自己使用 Swift 编写系统级别的开发框架成为可能。 #Highlight #[[2023-07-30]]
- 和 @State 类似，@Binding 也是对属性的修饰，它做的事情是将值语义的属性“转换”为引用语义。对被声明为 @Binding 的属性进行赋值，改变的将不是属性本身，而是它的引用，这个改变将被向外传递。 #Highlight #[[2023-07-30]]
- 不论是 @State，@Binding，或者是我们在下一节中将要看到的 @ObjectBinding 和 @EnvironmentObject，它们都是被 @propertyWrapper 修饰的 struct 类型 #Highlight #[[2023-07-30]]
- 我们可以为属性包装中定义的 init 方法添加更多的参数，我们会在接下来看到一个这样的例子。不过 initialValue 这个参数名相对特殊：当它出现在 init 方法的第一个参数位置时，编译器将允许我们在声明的时候直接为 @State     var brain 进行赋值。 #Highlight #[[2023-07-30]]
- 几乎所有依赖 getter 和 setter，并需要多次重复同样代码的地方，都可以用属性包装的方式得到更好的解决方式。比如通过属性对 UserDefault 或者 Keychain 进行读写，对某个字符串进行格式化或者去前后段空白，为属性读写加锁等等 #Highlight #[[2023-07-30]]
- 对于 @State 修饰的属性的访问，只能发生在 body 或者 body 所调用的方法中。你不能在外部改变 @State 的值，它的所有相关操作和状态改变都应该是和当前 View 挂钩的。如果你需要在多个 View 中共享数据，@State 可能不是很好的选择；如果还需要在 View 外部操作数据，那么 @State 甚至就不是可选项了。 #Highlight #[[2023-07-30]]
- 如果说 @State 是全自动驾驶的话，ObservableObject 就是半自动，它需要一些额外的声明。ObservableObject 协议要求实现类型是 class，它只有一个需要实现的属性：objectWillChange。在数据将要发生改变时，这个属性用来向外进行“广播”，它的订阅者 (一般是 View 相关的逻辑) 在收到通知后，对 View 进行刷新。 #Highlight #[[2023-07-30]]
- 创建 ObservableObject 后，实际在 View 里使用时，我们需要将它声明为 @ObservedObject。这也是一个属性包装，它负责通过订阅 objectWillChange 这个“广播”，将具体管理数据的 ObservableObject 和当前的 View 关联起来。 #Highlight #[[2023-07-30]]
- 一般情况下，我们使用一个 PassthroughSubject 实例作为 objectWillChange 的值 #Highlight #[[2023-07-30]]
- 在 ObservableObject 中，如果没有定义 objectWillChange，编译器会为你自动生成它，并在被标记为 @Published 的属性发生变更时，自动去调用 objectWillChange.send()。这样就省去了我们一个个添加 willSet 的麻烦 #Highlight #[[2023-07-30]]
- frame 中的 minWidth 和 maxWidth 为 Text 的宽度定义了范围，这会“提示” Text 不必遵守内容尺寸，而是去适应容器的尺寸。将 .infinity 传递给 maxWidth，表示不对最大宽度进行限制，这种情况下 Text 会尽可能占据它的容器的宽度，变为全屏宽。 #Highlight #[[2023-07-30]]
- 在具体实践里，对不同设备的适配可能会更加复杂，所需要采取的策略也会随设计的不同而改变，因此并没有什么“银弹”和“真理”。但是这并不意味着我们束手无策：正确理解常见的 SwiftUI 布局的方式和尺寸计算的原则，会对实现各种不同界面带来坚实的理论支持和指导。为了达到这个目的，需要多多练习，并尝试思考和解释为何会得到预览的结果。 #Highlight #[[2023-07-30]]
- 你可以在预览中使用在 ContentView() 后面添加 environment(\.colorScheme, .dark) 来快速检查深色模式下的 UI。 #Highlight #[[2023-07-30]]
- 整体使用 scaleEffect 进行缩放，会在布局时带来困难，因为它只是对视觉上进行了缩放，而布局还是依照原有的尺寸进行。相对于整体的 scale 操作，可能对单个具体元素的 frame 进行缩放效果会好一些 #Highlight #[[2023-07-30]]
- .sheet 调用将会在它的 isPresented 为 true 的时候以 modal 的方式展示一个在尾随闭包中定义的 View #Highlight #[[2023-09-27]]
- 我们可以选择直接读取 Pokemon，PokemonSpecies 和 Ability 这样的数据 model 内容来组合构建 UI。不过，更多时候我们会希望 UI 上需要显示的内容能和某个中间类型的属性一一对应，而不是在 View 中再去对数据 model 做变形和计算。在开发中，对于这种“驱动 View 的 Model” 中间类型，一般被叫做 ViewModel #Highlight #[[2023-09-27]]
- 以 Redux 为代表的状态管理和组件通讯架构，在近来的前端开发中很受欢迎。它的基本思想和步骤如下：
  1.  将 app 当作一个状态机，状态决定用户界面。
  2.  这些状态都保存在一个 Store 对象中，被称为 State。
  3.  View 不能直接操作 State，而只能通过发送 Action 的方式，间接改变存储在 Store 中的 State。
  4.  Reducer 接受原有的 State 和发送过来的 Action，生成新的 State。
  5.  用新的 State 替换 Store 中原有的状态，并用新状态来驱动更新界面。 #Highlight #[[2023-09-27]]
- 类 Redux 的架构并不是 SwiftUI 所必要的架构，也不是唯一的处理复杂数据的架构。它只不过是前端领域里类似范畴中一个较成熟，也很适合 SwiftUI 的方案。Apple 以及开发者社区中，现在对处理 SwiftUI 数据流应该采用怎样的架构，还并没一个统一的结论。 #Highlight #[[2023-09-27]]
- SwiftUI 的 Image 提供了 Image(systemName:) 来通过符号名生成对应图片。这种“图片”相对特殊，它的行为更接近于字体 (实际上 SF Symbols 就是 San Francisco 字体的一部分)，我们可以用 .font 和 .foregroundColor 等来对它进行设置。 #Highlight #[[2023-09-27]]
- font(.system(size: 25)) 虽然可以控制图片的显示尺寸，但是它并不会改变 Image 本身的 frame。默认情况下的 frame.size 非常小，这会使按钮的可点击范围过小，因此我们使用 .frame(width:height:) 来指定尺寸。因为加载后的 SF Symbol 是 Image，配合 frame 使用上面处理图像时提到的 resizable 和 padding 来指定显示范围和可点击范围也是可以的，但直接设置 font 和 frame 会更简单一些。 #Highlight #[[2023-09-27]]