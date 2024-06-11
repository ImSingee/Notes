title:: Readwise/Highlights/Next.js 14 SEO 最佳实践
author:: [[meathill.notion.site]]
full-title:: Next.js 14 SEO 最佳实践
category:: #articles
url:: https://meathill.notion.site/Next-js-14-SEO-90d31eee22ff4621af6620524b4b2773#f3fa0bd53f7d4f02b47d0d3aba2c5d77

![](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
None

- SEO 有一些必备信息，包括 title, description，需要通过 export const metadata 或 getMetadata 返回。它们都不支持 client 组件，所以，我们应该避免让页面组件（page.tsx）成为 client。 #Highlight #[[2024-06-11]]