title:: Readwise/Highlights/Time Travel in Vim
author:: [[Colin Bartlett]]
full-title:: Time Travel in Vim
category:: #articles
url:: https://vimtricks.com/p/vimtrick-time-travel-in-vim/?utm_campaign=VimTricks&utm_medium=email&utm_source=Revue%20newsletter

- You can undo and redo changes in bulk or even with time based commands, allowing you to travel back and forth in time through your change history. Here’s a short summary of commands:
  
  •   `:earlier 3` – Undo the last 3 changes
  •   `:earlier 5m` – Go back to the state of the file 5 minutes ago
  •   `:later 2` – After undoing something, redo the next 2 changes
  •   `:later 1h` – Travel forward through the change history 1 hour
  
  As expected, you can use `s`, `m`, `h`, `d` for seconds, minutes, hours, and days, respectively. ([View Highlight](https://read.readwise.io/read/01g9heqfc4w9vk078r1ptb125c)) #Highlight #[[2022-08-03]]