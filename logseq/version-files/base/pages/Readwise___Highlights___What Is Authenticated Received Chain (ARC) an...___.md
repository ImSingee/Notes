title:: Readwise/Highlights/What Is Authenticated Received Chain (ARC) an...
author:: [[Proton]]
full-title:: What Is Authenticated Received Chain (ARC) and Why Does It Matter?
category:: #articles
url:: https://proton.me/blog/what-is-authenticated-received-chain-arc

- Authenticated Received Chain (ARC) is an email authentication method that allows receiving mail servers to check the authentication results of an email when it’s forwarded or relayed by an intermediate server. ([View Highlight](https://read.readwise.io/read/01hf8f9pg6absj0616y8684nyp)) #Highlight #[[2023-11-15]]
- When an email passes through a trusted intermediate server, the server [digitally signs(new window)](https://proton.me/blog/what-is-a-digital-signature) the message and adds this **ARC signature** to the [email header(new window)](https://proton.me/blog/what-are-email-headers). For each hop of a message’s journey from A to B, trusted intermediate servers add their signature, forming a chain of ARC signatures.
  
  By checking this “chain of custody” or **authenticated received chain,** the recipient’s email server can see the original authentication results. It can also verify that any changes to the email in transit were signed by a trusted intermediary. ([View Highlight](https://read.readwise.io/read/01hf8fapbaad7643h0g2ygn19w)) #Highlight #[[2023-11-15]]
- If the receiving server trusts all the intermediate servers in the ARC chain, the server may accept the message even if it has failed DMARC. ([View Highlight](https://read.readwise.io/read/01hf8fbtmfem3ecpghgh1a9deq)) #Highlight #[[2023-11-15]]
- Do all email providers implement ARC?
  
  No, not all. First introduced in 2019, ARC is a relatively new protocol. However, major email providers like Gmail, Outlook, and Proton Mail now use ARC to filter messages, and adoption is growing among other providers. ([View Highlight](https://read.readwise.io/read/01hf8fdf14y6jhh3rbq9vj259m)) #Highlight #[[2023-11-15]]
- Can ARC signatures be forged or altered?
  
  ARC signatures use [public-key cryptography(new window)](https://en.wikipedia.org/wiki/Public-key_cryptography) to prevent tampering and forgery. But as with any security protocol, they must be implemented correctly to prevent unauthorized access to the encryption keys.
  
  Overall, ARC is secure when configured correctly, but intermediate servers can always inject harmful content into ARC headers or remove some or all the headers. ARC only works because trusted intermediaries sign the ARC chain. ([View Highlight](https://read.readwise.io/read/01hf8fe276vkxhp43eqqp5v307)) #Highlight #[[2023-11-15]]