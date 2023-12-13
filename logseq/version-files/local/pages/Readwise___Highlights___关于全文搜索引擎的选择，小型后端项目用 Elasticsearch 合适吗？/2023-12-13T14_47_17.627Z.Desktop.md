title:: Readwise/Highlights/关于全文搜索引擎的选择，小型后端项目用 Elasticsearch 合适吗？
author:: [[v2ex.com]]
full-title:: 关于全文搜索引擎的选择，小型后端项目用 Elasticsearch 合适吗？
category:: #articles
url:: https://www.v2ex.com/t/743402
tags:: #[[favorite]] #[[ifttt]] #[[inoreader]] #[[instapaper]] #[[raindrop]] #[[v2ex-最热主题]] #[[关注内容]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

- 是否选用 sqlite3 的唯一考量因素是有没有横向扩展的需求，没有的话，即使全文搜索这种需求也可以在 sqlite3 里做 ([View Highlight](https://read.readwise.io/read/01hg2eyt0kpxzk7fjyc438nrxz)) #Highlight #[[2023-11-25]]
- SQLite FTS5 可以用 ICU 或者 Simple 作为中文分词器，不过一般客户端上才这么折腾，服务器直接用 Postgres GIN 索引或者 MySQL ngram 索引是不错的选择 ([View Highlight](https://read.readwise.io/read/01hg2f1qssaz9zcxynv3400rqs)) #Highlight #[[2023-11-25]]