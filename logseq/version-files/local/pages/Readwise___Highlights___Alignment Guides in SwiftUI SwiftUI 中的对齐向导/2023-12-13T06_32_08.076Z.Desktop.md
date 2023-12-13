title:: Readwise/Highlights/Alignment Guides in SwiftUI SwiftUI 中的对齐向导
author:: [[javier]]
full-title:: Alignment Guides in SwiftUI SwiftUI 中的对齐向导
category:: #articles
url:: https://swiftui-lab.com/alignment-guides/

- An alignment guide is basically a numeric value. It sets a point in a view, that determines how to position it in relation to the rest of its siblings. ([View Highlight](https://read.readwise.io/read/01hb89vhy3t9n6zh6qj16f7s63)) #Highlight #[[2023-09-26]]
- **Container Alignment:** It has two purposes. It dictates which alignmentGuides() are to be ignored and which ones aren’t. But it also defines implicit alignment guides for all its contained views that do not have an explicit guide.  
  容器对齐：它有两个目的。它决定了要忽略哪些alignmentGuides()，以及哪些不要忽略。但它还为所有没有显式指南的包含视图定义了隐式对齐指南。  
  **Alignment Guide**: Unless this value matches the **Container Alignment** parameter, this guide will be ignored during layout.  
  对齐指南：除非此值与容器对齐参数相匹配，否则在布局过程中将忽略此指南。  
  **Implicit Alignment Value**: It’s a numeric value, indicating the position of the guide for the view it modifies. There are some handy preset values such as d.width, d[.leading], d[.center], etc, but ultimately we are returning a numeric value. This is a default (implicit) value associated with a given guide.  
  隐式对齐值：这是一个数值，表示所修改视图的指南位置。有一些方便的预设值，如d.width、d[.leading]、d[.center]等，但最终我们返回的是一个数值。这是与给定指南关联的默认（隐式）值。  
  **Explicit Alignment Value**: It’s a numeric value, indicating the position of the guide for the view it modifies. This is an explicit value (i.e., one that was defined programmatically by you).  
  显式对齐值：这是一个数值，表示修改视图的指南的位置。这是一个显式值（即由您以编程方式定义的值）。  
  **Frame Alignment**: Indicates how are all the contained views aligned (as a unique group), inside the container.  
  框架对齐：指示容器内所有包含的视图如何对齐（作为一个整体组）。  
  **Text Alignment**: For multiline text views, it specifies how the text lines are aligned inside the text view.  
  文本对齐：对于多行文本视图，它指定了文本行在文本视图内的对齐方式。 ([View Highlight](https://read.readwise.io/read/01hb89y1mkqhpm4qybdtvpjy1v)) #Highlight #[[2023-09-26]]
- ***More often than not, changing the frame alignment will have no effect. This is not a bug.*** In most cases, the container is tight. That is, the container is large enough to hold all its views, but not a pixel more. For that reason, using .leading, .center or .trailing in the frame() modifier will have no effect, as the view group is already using all the space. It cannot be moved to either side, as there’s no space left. ([View Highlight](https://read.readwise.io/read/01hb8a1cxgkr7dgzzjqfsx5hvd)) #Highlight #[[2023-09-26]]