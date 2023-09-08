title:: Readwise/Highlights/Why Choose Clojure Over Elixir?
author:: [[quora.com]]
full-title:: Why Choose Clojure Over Elixir?
category:: #articles
url:: https://www.quora.com/Why-choose-Clojure-over-Elixir
- The Erlang VM is optimised for distributed computing and soft real-time and should be the most logical choice if you are building such a system. #Highlight #[[2023-01-30]]
- Elixir uses the actor concurrency model. That is, data is never shared. No two things can ever access the same data directly. Each actor must exchange data with the other actors, so you always need to go through an indirection to get someone's else data. #Highlight #[[2023-01-30]]
- Clojure uses the software transactional memory concurrency model. That is, each access to data is made inside a 
        
          transaction
          (事务)
        
        , and must either go through fully, or not at all. This is an atomic model that ressembles a lot the concurrency model of databases. #Highlight #[[2023-01-30]]