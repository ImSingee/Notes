title:: Readwise/Highlights/Use Custom SSH Authentication Mechanism (OpenSSH) - Super User (17)
author:: [[superuser.com]]
full-title:: Use Custom SSH Authentication Mechanism (OpenSSH) - Super User
category:: #articles
url:: https://superuser.com/questions/792804/use-custom-ssh-authentication-mechanism-openssh/792842?cmdid=4BF32PSUCFFS2N#792842

- If you just want to implement your own way of checking the entered password, then write a PAM module. It is a simple .so library that contains a pam_sm_authenticate() function. (It can also provide functions for authorization, password-change, etc.)
  
  Start with something like this (in C), compile it as a .so library using -shared, copy to /lib/security/pam_foobar.so, and finally add it to the server's PAM config (/etc/pam.d/sshd) – possibly replacing the standard pam_unix module.
  
  #define PAM_SM_AUTH
  
  #include <security/pam_modules.h>
  #include <security/pam_appl.h>
  
  int pam_sm_authenticate(pam_handle_t *pamh, int flags, int argc, const char *argv[]) {
    return PAM_SUCCESS;
  }
  
  struct pam_module pam_foobar_modstruct = {
    .name                 = "pam_foobar",
    .pam_sm_authenticate  = pam_sm_authenticate,
    .pam_sm_setcred       = NULL,
    .pam_sm_acct_mgmt     = NULL,
    .pam_sm_open_session  = NULL,
    .pam_sm_close_session = NULL,
    .pam_sm_chauthtok     = NULL,
  };
  For more details see the Linux-PAM Module Writer's Guide as well as various other sources.
  
  [You can use pamtester to verify the module locally, before messing with sshd's configuration.]
  
  Note, however, that pam_sm_authenticate() is only called for password-like logins – in SSH that means either the password or kbd-interactive auth methods. It is not called for checking SSH keypairs or Kerberos tickets – the former is internal to sshd, the latter is done by libkrb5.
  
  (Also note that PAM has a separate authorization phase for checking whether a user is allowed to use the system. The SSH server always consults PAM for authorization, regardless of what authentication method was used. For doing this, implement pam_sm_acct_mgmt() in your module.) #Highlight #[[2021-05-23]]