title:: Readwise/Highlights/You Might Not Need an Effect
author:: [[beta.reactjs.org]]
full-title:: You Might Not Need an Effect
category:: #articles
url:: https://beta.reactjs.org/learn/you-might-not-need-an-effect
- In general, unless you’re creating or looping over thousands of objects, it’s probably not expensive. #Highlight #[[2022-12-10]]
- If the overall logged time adds up to a significant amount (say, 1ms or more), it might make sense to memoize that calculation. As an experiment, you can then wrap the calculation in useMemo to verify whether the total logged time has decreased for that interaction or not #Highlight #[[2022-12-10]]
- Also note that measuring performance in development will not give you the most accurate results. (For example, when Strict Mode is on, you will see each component render twice rather than once.) To get the most accurate timings, build your app for production and test it on a device like your users have. #Highlight #[[2022-12-10]]