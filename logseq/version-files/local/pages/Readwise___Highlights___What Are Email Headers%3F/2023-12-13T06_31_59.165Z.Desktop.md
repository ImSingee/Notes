title:: Readwise/Highlights/What Are Email Headers?
author:: [[Proton]]
full-title:: What Are Email Headers?
category:: #articles
url:: https://proton.me/blog/what-are-email-headers
tags:: #[[go inbox]] #[[inoreader]] #[[the proton blog]] #[[博客]]

- Most emails typically contain many other fields, such as:
  
  •   **Subject**: the title as displayed in the Subject line
  •   **Reply-Path**: the return address of the email if it fails
  •   **Received**: the [SMTP(new window)](https://proton.me/blog/smtp-imap-pop3) servers that the message has passed through. Emails typically pass through multiple servers, each adding a new Received header.
  •   **Authentication-Results**: the results of checks to see if the email originated from the stated sender. ([View Highlight](https://read.readwise.io/read/01hf8f525g3kkqgta4p9gjknw3)) #Highlight #[[2023-11-15]]
- **Return-Path**The address to which an email that can’t be delivered should be returned, like a return address in regular mail.**Reply-To**An optional address for recipients to reply to. If there is no **Reply-To** field, the **Return-Path** address is used. ([View Highlight](https://read.readwise.io/read/01hf8f7nzef0skyjqa3efa8npy)) #Highlight #[[2023-11-15]]
- **[ARC(new window)](https://proton.me/blog/what-is-authenticated-received-chain-arc)** is a way to preserve the authentication results (DKIM, SPF, and DMARC) of an email when it is forwarded. ARC should show **dkim, spf, and dmarc=pass**. ([View Highlight](https://read.readwise.io/read/01hf8f6jtrt58aw0ky30jbftxk)) #Highlight #[[2023-11-15]]