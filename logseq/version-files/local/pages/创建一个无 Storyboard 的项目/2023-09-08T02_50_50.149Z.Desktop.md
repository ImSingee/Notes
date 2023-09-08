---
title: 创建一个无 Storyboard 的项目
---

- 首先需要利用 XCode 创建一个项目，然后删除所有和 Storyboard 有关的内容，包括
	 - Main.storyboard 文件

	 - Info.plist 中的 UIMainStoryboardFile 和 UISceneStoryboardFile 两个键

- 

- 相关的初始化逻辑目前写在了 SceneDelegate.swift 文件中 SceneDelegate 类的 scene 函数中，根据注释说明

- > Use this method to optionally configure and attach the UIWindow `window` to the provided UIWindowScene `scene`.
If using a storyboard, the `window` property will automatically be initialized and attached to the scene.
This delegate does not imply the connecting scene or session are new (see `application:configurationForConnectingSceneSession` instead).

- 这里初始化 window 对象（这一对象定义在了 SceneDelegate 类中 `var window: UIWindow?`），
	 - 
```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        // Use this method to optionally configure and attach the UIWindow `window` to the provided UIWindowScene `scene`.
        // If using a storyboard, the `window` property will automatically be initialized and attached to the scene.
        // This delegate does not imply the connecting scene or session are new (see `application:configurationForConnectingSceneSession` instead).

        guard let scene = (scene as? UIWindowScene) else { return }
        window = UIWindow(frame: scene.coordinateSpace.bounds)
        window!.windowScene = scene
        window!.rootViewController = ViewController()
        window!.rootViewController!.view.backgroundColor = .blue
        window!.makeKeyAndVisible()
    }
```

- 然后运行即可，可以看到一个全蓝的界面，代表成功

- 

- 这段简单的程序其实直接体现了一个 iOS App 的关系

- App -> Scene -> Window -> ViewController -> View

- 

- 一个 [App](https://developer.apple.com/documentation/uikit/uiapplication) 就是我们写的程序实例，在 iOS 中只会有一个 App 运行

- [Scene](https://developer.apple.com/documentation/uikit/app_and_environment/scenes) 是在 iPadOS 支持同一程序多窗口后出现的，用于管理生命周期等

- [Window](https://developer.apple.com/documentation/uikit/uiwindow) 是展示的窗口，一般而言一个 Scene 只能有一个前台 Window，Window 是控制展示的

- Window 不能直接展示内容，需要使用对应的 [ViewController](https://developer.apple.com/documentation/uikit/view_controllers) 展示，而 ViewController 和 [View](https://developer.apple.com/documentation/uikit/uiview) 一一对应（自动创建），View 用于控制具体展示的内容

- 

- 其中，一个 View 对应着一个组件，例如 Label、Button 等都是 View，相应的，View 可以包含若干 Sub View，即一个窗口可以包含按钮、图片等等内容

- 

- 参考资料
	 - [Start a project without storyboard | Xcode 12, Swift 5.3](https://medium.com/swift-productions/ios-start-a-project-without-storyboard-xcode-12-253d785af5e7)
