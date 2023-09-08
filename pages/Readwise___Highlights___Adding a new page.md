title:: Readwise/Highlights/Adding a new page
author:: [[hexdocs.pm]]
full-title:: Adding a new page
category:: #articles
url:: https://hexdocs.pm/phoenix/request_lifecycle.html
- At this moment, you may be thinking this can be a lot of steps to simply render a page. However, as our application grows in complexity, we will see that each layer serves a distinct purpose:
  
  •   endpoint ([`Phoenix.Endpoint`](https://hexdocs.pm/phoenix/request_lifecycle.html/Phoenix.Endpoint.html)) - the endpoint contains the common and initial path that all requests go through. If you want something to happen on all requests, it goes to the endpoint.
    
  •   router ([`Phoenix.Router`](https://hexdocs.pm/phoenix/request_lifecycle.html/Phoenix.Router.html)) - the router is responsible for dispatching verb/path to controllers. The router also allows us to scope functionality. For example, some pages in your application may require user authentication, others may not.
    
  •   controller ([`Phoenix.Controller`](https://hexdocs.pm/phoenix/request_lifecycle.html/Phoenix.Controller.html)) - the job of the controller is to retrieve request information, talk to your business domain, and prepare data for the presentation layer.
    
  •   view - the view handles the structured data from the controller and converts it to a presentation to be shown to users. Views are often named after the content format they are rendering. ([View Highlight](https://read.readwise.io/read/01h83r2gefy3a4rrkmbjbdp3ja)) #Highlight #[[2023-08-18]]