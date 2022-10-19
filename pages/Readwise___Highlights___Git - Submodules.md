title:: Readwise/Highlights/Git - Submodules
author:: [[git-scm.com]]
full-title:: Git - Submodules
category:: #articles
url:: https://git-scm.com/book/en/v2/Git-Tools-Submodules

- When you clone such a project, by default you get the directories that contain submodules, but none of the files within them yet #Highlight #[[2022-07-07]]
- You must run two commands: git submodule init to initialize your local configuration file, and git submodule update to fetch all the data from that project and check out the appropriate commit listed in your superproject #Highlight #[[2022-07-07]]
- If you pass --recurse-submodules to the git clone command, it will automatically initialize and update each submodule in the repository, including nested submodules if any of the submodules in the repository have submodules themselves #Highlight #[[2022-07-07]]
- you can combine the git submodule init and git submodule update steps by running git submodule update --init.
  To also initialize, fetch and checkout any nested submodules, you can use the foolproof git submodule update --init --recursive. #Highlight #[[2022-07-07]]
- By default, the  git pull command recursively fetches submodules changes, as we can see in the output of the first command above.
  However, it does not update the submodules. #Highlight #[[2022-07-07]]
- if you want to make Git always pull with --recurse-submodules, you can set the configuration option submodule.recurse to true (this works for git pull since Git 2.15).
  This option will make Git use the --recurse-submodules flag for all commands that support it (except clone) #Highlight #[[2022-07-07]]