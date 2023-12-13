title:: Readwise/Highlights/Docker demons: PID-1, orphans, zombies, and s...
author:: [[fpcomplete.com]]
full-title:: Docker demons: PID-1, orphans, zombies, and signals - FP Complete --- Docker 恶魔：PID-1、孤儿、僵尸和信号 - FP Complete
category:: #articles
url:: https://www.fpcomplete.com/blog/docker-demons-pid1-orphans-zombies-signals/
- the kernel treats a process with PID 1 specially, and does _not_, by default, kill the process when receiving the `SIGTERM` or `SIGINT` signals. #Highlight #[[2023-10-16]]
- That `<defunct>` indicates a zombie process. #Highlight #[[2023-10-16]]
- If you _must_ send a `SIGKILL` to your process, use the `docker kill` command instead #Highlight #[[2023-10-16]]