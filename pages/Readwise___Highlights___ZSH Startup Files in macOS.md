title:: Readwise/Highlights/ZSH Startup Files in macOS
author:: [[jdhao]]
full-title:: ZSH Startup Files in macOS
category:: #articles
url:: https://jdhao.github.io/2023/06/16/zsh_startup_file/
tags:: #[[inoreader]] #[[jdhao\'s blog]] #[[博客]]
- In different mode, zsh will source different startup files when it is started. In Zsh, to test if the shell is login shell, we can test `login` option:
  
    if [[ -o login ]]; then
        echo 'yes'
    else
        echo 'no'
    fi ([View Highlight](https://read.readwise.io/read/01h3rmetcz3p8tkwpf3kn3zzvg)) #Highlight #[[2023-06-25]]
- You can exit login/non-login shell using `exit`. For the login shell, `logout` also works (it does not work for non-login shell). ([View Highlight](https://read.readwise.io/read/01h3rmemgpx365s35pevh2hwhx)) #Highlight #[[2023-06-25]]
- According to `man zsh` (the section about `STARTUP/SHUTDOWN FILES`), the loading order of startup file is:
  
    /etc/zshenv
    $ZDOTDIR/.zshenv
    if login_shell:
        /etc/zprofile
        $ZDOTDIR/.zprofile
    endif
    if interactive_shell:
        /etc/zshrc
        $ZDOTDIR/.zshrc
    endif
    if login_shell:
        /etc/zlogin
        $ZDOTDIR/.zlogin
    endif ([View Highlight](https://read.readwise.io/read/01h3rmfw08hn66gfzr0qw9rgtt)) #Highlight #[[2023-06-25]]
- On macOS, the file `/etc/zprofile` is especially *evil*, it run a utility called `path_helper`, which changes the `PATH` variable in a weird way ([View Highlight](https://read.readwise.io/read/01h3rmjd65pg6m12mvxdtv4r1b)) #Highlight #[[2023-06-25]]