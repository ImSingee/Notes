title:: Readwise/Highlights/Why React Re-Renders
author:: [[joshwcomeau.com]]
full-title:: Why React Re-Renders
category:: #articles
url:: https://www.joshwcomeau.com/react/why-react-re-renders/

- When a component re-renders, it tries to re-render *all* descendants, regardless of whether they're being passed a particular state variable through props or not. ([View Highlight](https://read.readwise.io/read/01gan2qxe3hb3wz4mz4bpcc1mp)) #Highlight #[[2022-08-17]]
- By wrapping our `Decoration` component with `React.memo`, we're telling React “Hey, I *know* that this component is pure. You don't need to re-render it unless its props change.” ([View Highlight](https://read.readwise.io/read/01gan2tryshngh7xwadqapzpah)) #Highlight #[[2022-08-17]]
- I think as developers, we tend to overestimate how expensive re-renders are. In the case of our `Decoration` component, re-renders are lightning quick.
  
  If a component has a bunch of props and not a lot of descendants, it can actually be *slower* to check if any of the props have changed compared to re-rendering the component. ([View Highlight](https://read.readwise.io/read/01gan306dfy2shvqa1e8981518)) #Highlight #[[2022-08-17]]