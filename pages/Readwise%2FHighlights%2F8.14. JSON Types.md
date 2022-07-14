title:: Readwise/Highlights/8.14. JSON Types
author:: [[postgresql.org]]
full-title:: 8.14. JSON Types
category:: #articles
url:: https://www.postgresql.org/docs/current/datatype-json.html

- PostgreSQL offers two types for storing JSON data: json and jsonb. To implement efficient query mechanisms for these data types, PostgreSQL also provides the jsonpath data type described in Section 8.14.7.
  The json and jsonb data types accept almost identical sets of values as input. The major practical difference is one of efficiency. The json data type stores an exact copy of the input text, which processing functions must reparse on each execution; while jsonb data is stored in a decomposed binary format that makes it slightly slower to input due to added conversion overhead, but significantly faster to process, since no reparsing is needed. jsonb also supports indexing, which can be a significant advantage. #Highlight #[[2022-07-14]]
- The json and jsonb data types accept almost identical sets of values as input. The major practical difference is one of efficiency. The json data type stores an exact copy of the input text, which processing functions must reparse on each execution; while jsonb data is stored in a decomposed binary format that makes it slightly slower to input due to added conversion overhead, but significantly faster to process, since no reparsing is needed. jsonb also supports indexing, which can be a significant advantage. #Highlight #[[2022-07-14]]