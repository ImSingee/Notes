title:: Readwise/Highlights/Electron：质疑，理解与成为
author:: [[pengx17.vercel.app]]
full-title:: Electron：质疑，理解与成为
category:: #articles
url:: https://pengx17.vercel.app/posts/becoming-electron-fan

- Tauri的出色之处在于，它利用了系统自带的网页渲染引擎作为自己的webview，这使得它的体积更小，性能更高，从而更适合于桌面端的应用开发和使用。
  
  尽管我们最初期望通过使用Tauri来解决一些Electron存在的问题，但我们也不可避免地遇到了一些Tauri自身的问题，例如：
  
  •   Rust在桌面端的生态还不够成熟，这给Tauri的应用和开发者带来了一些挑战和限制。
  •   Tauri在一些疑难杂症和跨平台方案上存在一些不一致的问题，这需要我们付出更多的精力和时间去解决。
  •   我们对于Rust的掌握程度还不够熟练，这导致我们在应用开发的过程中经常会遇到一些看似简单的问题，但却卡住了很久。
  •   Tauri的使用也增加了应用的构建复杂度，同时也大幅影响了应用的CI时间，这需要我们花大量精力在此做更多努力和改进。
  
  经过这些问题，我们才慢慢理解了Electron为了帮助开发者快速迭代与分发桌面端应用所做的努力。在反复思考后，我们最终放弃了Tauri，重新选择了Electron。
  
  在重新使用Electron后，我们的开发效率大幅提高，并且终于有足够的时间去解决一些用户体验上的问题。 ([View Highlight](https://read.readwise.io/read/01hdjp84c6jk2fz08n6jvd6vcn)) #Highlight #[[2023-10-25]]