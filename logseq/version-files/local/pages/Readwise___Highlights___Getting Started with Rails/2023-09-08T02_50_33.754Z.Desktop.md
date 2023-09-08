title:: Readwise/Highlights/Getting Started with Rails
author:: [[Ruby on Rails Guides]]
full-title:: Getting Started with Rails
category:: #articles
url:: https://guides.rubyonrails.org/getting_started.html

- The `index` action is empty. When an action does not explicitly render a view (or otherwise trigger an HTTP response), Rails will automatically render a view that matches the name of the controller and action. Convention Over Configuration! Views are located in the `app/views` directory. So the `index` action will render `app/views/articles/index.html.erb` by default. ([View Highlight](https://read.readwise.io/read/01gz5t0atr9hre5fbe720hh6a8)) #Highlight #[[2023-04-29]]
- Application classes and modules are available everywhere, you do not need and **should not** load anything under `app` with `require`. This feature is called *autoloading*, and you can learn more about it in [*Autoloading and Reloading Constants*](https://guides.rubyonrails.org/getting_started.html/autoloading_and_reloading_constants.html).
  
  You only need `require` calls for two use cases:
  
  •   To load files under the `lib` directory.
  •   To load gem dependencies that have `require: false` in the `Gemfile`. ([View Highlight](https://read.readwise.io/read/01gz5t4dm5x3r7x90apzd9qaws)) #Highlight #[[2023-04-29]]
- Model names are **singular**, because an instantiated model represents a single data record. ([View Highlight](https://read.readwise.io/read/01gz5t8we71e8hkdg55kb7pxeg)) #Highlight #[[2023-04-29]]