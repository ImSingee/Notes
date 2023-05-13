title:: Readwise/Highlights/Difference Between "Docker Compose" and "Dock...
author:: [[stackoverflow.com]]
full-title:: Difference Between "Docker Compose" and "Docker-Compose"
category:: #articles
url:: https://stackoverflow.com/questions/66514436/difference-between-docker-compose-and-docker-compose

- 209
        
        
            
        This answer is not useful
  
  
        
  
    
    
  Save this answer.
  
  
  
  
  
  
  
            
                
                    
                
            
  
    
    Show activity on this post.
  
  
  
        
  
        
  
  
    
    
  The docker compose (with a space) is a newer project to migrate compose to Go with the rest of the docker project. This is the v2 branch of the docker/compose repo. It's been first introduced to Docker Desktop users, so docker users on Linux didn't see the command. In addition to migrating to Go, it uses the compose-spec, and part of the rewrite may result in behavior differences.
  The original python project, called docker-compose, aka v1 of docker/compose repo, has now been deprecated and development has moved over to v2. To install the v2 docker compose as a CLI plugin on Linux, supported distribution can now install the docker-compose-plugin package. E.g. on debian, I run apt-get install docker-compose-plugin. #Highlight #[[2023-04-20]]