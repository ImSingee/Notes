title:: Readwise/Highlights/CSS新世界
author:: [[张鑫旭]]
full-title:: CSS新世界
category:: #books

- column-width表示每一栏/列的最佳宽度，注意，是“最佳宽度”，实际渲染宽度多半和指定的宽度是有出入的 #Highlight #[[2023-04-25]]
- column-width和传统的width属性不同，column-width更像是一个期望尺寸，浏览器会根据这个期望尺寸确定分栏数目，一旦分栏数目确定了，column-width属性的使命也就完成了，接下来根据分栏数目对容器进行的分栏布局就和column-width属性没有任何关系了。 #Highlight #[[2023-04-25]]
- 在分栏布局中，最终分栏的数量是由column-count与column-width属性共同决定的，不对，不能称为“共同决定”，应该叫作“互相制约”。 #Highlight #[[2023-04-25]]
- 决定权优先级的计算诀窍可以用一句话概括：统一转换column-count值，哪个值小就使用哪一个 #Highlight #[[2023-04-25]]
- 在网格布局规范制定之后的一段时间，CSS世界中的行与列之间的间隙使用了gap属性进行了统一，也就是分栏布局、弹性布局和网格布局的间隙都全部统一使用gap属性表示，而gap属性实际上是column-gap属性和row-gap属性的缩写。 #Highlight #[[2023-04-25]]
- column-rule属性和border属性的语法和规则是一模一样的，只是column-rule是设置各个分栏的分隔线样式，border是设置元素的边框样式 #Highlight #[[2023-04-25]]