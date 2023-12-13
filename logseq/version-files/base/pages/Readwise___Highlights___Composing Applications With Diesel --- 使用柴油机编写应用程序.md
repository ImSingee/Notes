title:: Readwise/Highlights/Composing Applications With Diesel --- 使用柴油机编写应用程序
author:: [[diesel.rs]]
full-title:: Composing Applications With Diesel --- 使用柴油机编写应用程序
category:: #articles
url:: https://diesel.rs/guides/composing-applications.html
- In general you should always prefer functions which return queries, and avoid functions which take a connection as an argument. This allows you to re-use and compose your queries. #Highlight #[[2023-10-11]]