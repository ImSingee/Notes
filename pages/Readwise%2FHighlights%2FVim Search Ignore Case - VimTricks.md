title:: Readwise/Highlights/Vim Search Ignore Case - VimTricks
author:: [[vimtricks.com]]
full-title:: Vim Search Ignore Case - VimTricks
category:: #articles
url:: https://vimtricks.com/p/vim-search-ignore-case/

- If the ignorecase option is on, the case of normal letters is ignored. smartcase can be set to ignore case when the pattern contains lowercase letters only. When \c appears anywhere in the pattern, the whole pattern is handled like ignorecase is on. The actual value of ignorecase and smartcase is ignored. \C does the opposite: Force matching case for the whole pattern. {only Vim supports \c and \C} Note that ignorecase, \c and \C are not used for the character classes. #Highlight #[[2022-09-13]]