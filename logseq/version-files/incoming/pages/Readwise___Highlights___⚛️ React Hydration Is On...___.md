title:: Readwise/Highlights/⚛️ React Hydration Is On...
author:: [[@iamakulov on Twitter]]
full-title:: ⚛️ React Hydration Is On...
category:: #tweets
url:: https://twitter.com/iamakulov/status/1702261026232955323
- ⚛️ React hydration is one of the first things I look at whenever I’m optimizing loading speed of a React app. It’s super expensive – because it has to render every single component on the page.
  
  But how do you measure how long it takes? And why is it so expensive? ↓ 
  
  ![](https://pbs.twimg.com/media/F5-lYTIbEAAaTlr.jpg) ([View Tweet](https://twitter.com/iamakulov/status/1702261026232955323)) #Highlight #[[2023-09-15]]
- 1) If you use React 17 or below, the simplest way to spot hydration is to open Chrome DevTools → Performance, click “Start profiling and reload page”, and then look for a rectangle called `t.hydrate` ↓
  
  Due to how React is built, the `ReactDOM.hydrate` name doesn’t get minified 
  
  ![](https://pbs.twimg.com/media/F5-lYvQbgAAEdIE.jpg) ([View Tweet](https://twitter.com/iamakulov/status/1702261041122726379)) #Highlight #[[2023-09-15]]
- Running a DevTools trace will show you how long hydration takes *on your device*. If you use a modern dev laptop, don’t forget to enable 4× CPU throttling to get performance that your users have on their phones. 
  
  ![](https://pbs.twimg.com/media/F5-lZniaQAASV2r.jpg) ([View Tweet](https://twitter.com/iamakulov/status/1702261052011086270)) #Highlight #[[2023-09-15]]
- 2) With React 18, measuring hydration is harder – you won’t find `t.hydrate` in DevTools anymore. So instead, you’ll have to:
  • switch React to a “production-profiling” mode (e.g.: https://t.co/ktr8Tv4bqp)
  • build the app locally (or use a PR preview)
  • and run React profiler: 
  
  ![](https://pbs.twimg.com/media/F5-laOgboAAHvWT.jpg) ([View Tweet](https://twitter.com/iamakulov/status/1702261064778608760)) #Highlight #[[2023-09-15]]
- ↑ React Profiler shows every single render that happens during a recording.
  
  With SSR, if you record page loading, the first render will *always* be hydration. ([View Tweet](https://twitter.com/iamakulov/status/1702261069111320719)) #Highlight #[[2023-09-15]]
- 3) “Wait, why does hydration = the first render? Isn’t the purpose of hydration to avoid re-rendering server HTML?”
  
  Not quite. React docs do say that “hydration is just how React attaches to existing HTML” (https://t.co/8WMh7Jketh). But for simplicity, they omit some details. 
  
  ![](https://pbs.twimg.com/media/F5-lbOYaYAAkIOV.png) ([View Tweet](https://twitter.com/iamakulov/status/1702261076849828349)) #Highlight #[[2023-09-15]]
- In fact, React rendering has three phases:
  • render: execute all (changed) components and collect JSX
  • commit: apply JSX to real DOM
  • effects: run useEffect(), etc
  
  (More details: https://t.co/FJZgGjznj8)
  
  In a typical render, all three phases happen in a row. ([View Tweet](https://twitter.com/iamakulov/status/1702261080200991059)) #Highlight #[[2023-09-15]]
- What hydration does is it still renders all components and still runs all effects – but it *skips the commit phase*.
  
  Hydration doesn’t need to commit generated JSX to DOM because the DOM is already there (the browser made it from the HTML the server sent). ([View Tweet](https://twitter.com/iamakulov/status/1702261082973478979)) #Highlight #[[2023-09-15]]
- But hydration still needs to *render* all components! Some components may set `onClick`, `onChange`, etc. on DOM – and, even with SSR, there’s no way to get that without rendering all components on the client.
  
  That’s what makes hydration expensive. It has to render everything. ([View Tweet](https://twitter.com/iamakulov/status/1702261085737476172)) #Highlight #[[2023-09-15]]
- 4) “So how do I speed up hydration?” That’s a whole separate subject. Some of the work that goes there is figuring out if we can render *less* (e.g. have fewer components or make them cheaper). But a couple other tricks are:
  • https://t.co/3EqmzjB9zB
  • https://t.co/3PEUyAeJVN ([View Tweet](https://twitter.com/iamakulov/status/1702261088409293006)) #Highlight #[[2023-09-15]]