title:: Readwise/Highlights/TCA Action Boundaries
author:: [[Krzysztof Zabłocki]]
full-title:: TCA Action Boundaries
category:: #articles
url:: https://www.merowing.info/boundries-in-tca/

![](https://images.unsplash.com/photo-1602454727524-bda13fbf9530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGJvcmRlcnxlbnwwfHx8fDE2NjAzMDUwMjE&ixlib=rb-1.2.1&q=80&w=2000)
- enum MyFeatureActions: Equatable { enum Delegate: Equatable { case userLoggedIn } case onDidTapLogin // User Action case _someInternalAction // Internal Action case delegate(Delegate) // Delegate Action } ([View Highlight](https://read.readwise.io/read/01hgf7gmja71psqqvzv6g7r70m)) #Highlight #[[2023-11-30]]
- I prepend all my internal actions with an underscore, and I can write linter rules that if they ever appear in my view layer or higher reducers, I'll fail to compile the project. ([View Highlight](https://read.readwise.io/read/01hgf7h8zfef4hgnkta1xxhg7j)) #Highlight #[[2023-11-30]]