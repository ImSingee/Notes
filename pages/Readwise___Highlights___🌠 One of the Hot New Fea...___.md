title:: Readwise/Highlights/🌠 One of the Hot New Fea...
author:: [[@JoshWComeau on Twitter]]
full-title:: 🌠 One of the Hot New Fea...
category:: #tweets
url:: https://twitter.com/JoshWComeau/status/1631398854632304641
- 🌠 One of the hot new features in Next 13 is the integration of React Server Components (RSC). I've seen a lot of confusion about how this feature interacts with 💅 styled-components, and other CSS-in-JS tools.
  
  I wanna share what I've learned. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398854632304641)) #Highlight #[[2023-03-07]]
- Let's start with the bad news: because styled-components has a runtime, we can't take advantage of RSC in any components with styled-components.
  
  But! I'm not convinced that it's a *huge* problem. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398856037376007)) #Highlight #[[2023-03-07]]
- In order to understand what RSC is, we need to learn a bit about server-side rendering (SSR).
  
  When we use SSR, every single React component is:
  
  • Rendered on the server
  • Rehydrated on the client ([View Tweet](https://twitter.com/JoshWComeau/status/1631398857392242691)) #Highlight #[[2023-03-07]]
- The browser receives a fully-formed HTML document (since it was rendered by the server!)
  
  When React boots up on the client, it renders the components again, but instead of creating fresh DOM nodes, it instead "adopts" the DOM that already exists. That's what rehydration is. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398858822410242)) #Highlight #[[2023-03-07]]
- The big idea with RSC is that *we can skip rehydration* on components that never change (eg. no state/effects).
  
  Essentially, the component's output is immutable. The component is never rendered on the client, because its markup is locked to whatever was rendered on the server. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398860282003464)) #Highlight #[[2023-03-07]]
- Each component decides whether or not to be a “server component”, or to stick with being a server + client component.
  
  I like this sketch from the Next docs, which shows there's no problem sprinkling server components across the app: 
  
  ![](https://pbs.twimg.com/media/FqPZb_vWIAUrvMg.jpg) ([View Tweet](https://twitter.com/JoshWComeau/status/1631398862232469504)) #Highlight #[[2023-03-07]]
- What are the benefits of RSC? Well, the JS bundle is a bit smaller (doesn't have to include the component code), and the rehydration process is quicker (fewer components to render on the client). ([View Tweet](https://twitter.com/JoshWComeau/status/1631398864379957249)) #Highlight #[[2023-03-07]]
- The *worst-case* scenario, then, is that every component is a client component.
  
  But that worst-case scenario is *exactly how React works*, in Next 12 (and any other SSR-based framework). ([View Tweet](https://twitter.com/JoshWComeau/status/1631398865730519041)) #Highlight #[[2023-03-07]]
- In other words: if you have a Next 12 app that uses styled-components, it'll be *just as fast* in Next 13. The user experience will be identical.
  
  We aren't losing anything. We're just not able to fully take advantage of a new optimization. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398867093671940)) #Highlight #[[2023-03-07]]
- To be clear, RSC is a nice boost. We want our bundles to be as small as possible, and for rehydration to happen as quickly as possible.
  
  But, I think sometimes we *overestimate* the effect that this has on user experience. Especially in the context of a server-side-rendered app. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398868519645184)) #Highlight #[[2023-03-07]]
- Whether you use RSC or not, the initial HTML will load just as quickly for the user. RSC doesn't speed up the server-side-rendering process.
  
  Either way, the user will see what *appears* to be a ready-to-go app, in short order. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398870046343170)) #Highlight #[[2023-03-07]]
- The danger is that the app isn't actually ready-to-go, because the JS hasn't been downloaded, parsed, and executed. The client components haven't rehydrated.
  
  The HTML/CSS is there, but none of the JS. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398871464067079)) #Highlight #[[2023-03-07]]
- But, how quickly does the site *need* to be interactive?
  
  If you follow semantic HTML principles, *most* things should work even before the app has rehydrated.
  
  Clicking a link, submitting a form, expanding an accordion… all of this should work without JS. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398872877596672)) #Highlight #[[2023-03-07]]
- Ideally, it should only be *super* interactive things that require rehydration.
  
  For example, on my blog, I have code playgrounds. These playgrounds absolutely require JS to work: 
  
  ![](https://pbs.twimg.com/media/FqPcLsPWIBUlqC7.jpg) ([View Tweet](https://twitter.com/JoshWComeau/status/1631398874525884419)) #Highlight #[[2023-03-07]]
- And so, that's really what we're talking about here. For interactive components like this, how quickly will they be powered up? Will they be ready by the time the user tries to interact with them?
  
  I think in a lot of cases, it's *already* fast enough, even without RSC. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398876539174914)) #Highlight #[[2023-03-07]]
- In the olden days, before server-side-rendering was so widespread, bundle size was *super* important, because the user would be staring at a blank white screen while React was downloaded/parsed.
  
  Without SSR, the user sees nothing until the JS is done. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398878279790600)) #Highlight #[[2023-03-07]]
- But nowadays, the user receives a complete HTML document. They're able to scroll around, read the article, click links, and submit forms, all while the JS is being downloaded and executed in the background. ([View Tweet](https://twitter.com/JoshWComeau/status/1631398879588384768)) #Highlight #[[2023-03-07]]
- In conclusion: if I was starting a new React app today, I might consider using something like Linaria (https://t.co/As2ec75rpm), to eke out as much perf as possible.
  
  But I have no plans to migrate my blog / course platform from styled-components. And I'm not worried about it. 😄 ([View Tweet](https://twitter.com/JoshWComeau/status/1631398880888737792)) #Highlight #[[2023-03-07]]
- If you found this thread useful, you should know that I'm building a React course! We'll dig into all this stuff, and so much more. ✨
  
  You can learn more here: https://t.co/r7256clVnd ([View Tweet](https://twitter.com/JoshWComeau/status/1631398882318995457)) #Highlight #[[2023-03-07]]