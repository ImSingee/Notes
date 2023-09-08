title:: Readwise/Highlights/Directory Structure
author:: [[hexdocs.pm]]
full-title:: Directory Structure
category:: #articles
url:: https://hexdocs.pm/phoenix/directory_structure.html
- `lib` - a directory that holds your application source code. This directory is broken into two subdirectories, `lib/hello` and `lib/hello_web`. The `lib/hello` directory will be responsible to host all of your business logic and business domain. It typically interacts directly with the database - it is the "Model" in Model-View-Controller (MVC) architecture. `lib/hello_web` is responsible for exposing your business domain to the world, in this case, through a web application. It holds both the View and Controller from MVC. ([View Highlight](https://read.readwise.io/read/01h83b59d8wy0qwgz5723zhj3g)) #Highlight #[[2023-08-18]]