title:: Readwise/Highlights/Jump to the Last Change in Vim (65)
author:: [[getrevue.co]]
full-title:: Jump to the Last Change in Vim
category:: #articles
url:: https://www.getrevue.co/profile/vim_tricks/issues/jump-to-the-last-change-in-vim-1291516?utm_campaign=Issue&utm_content=view_in_browser&utm_medium=email&utm_source=VimTricks

- Vim keeps track of the position of every undo-able change and makes the last 100 available to you when you call `:changes`. You can navigate backwards and forwards to these positions in your file *without undoing the change* by using `g;` and `g,`. Here’s a cheatsheet:
  
  •   `:changes` – Show position of last 100 changes
  •   `g;` – Vim jumps to the last change you made
  •   `g,` – Vim jumps forward through the change list ([View Highlight](https://read.readwise.io/read/01g9hehy9g3tpnrt5dtwvybytx)) #Highlight #[[2022-08-03]]