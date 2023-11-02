title:: Readwise/Highlights/8.5. Date-Time Types #
author:: [[PostgreSQL Documentation]]
full-title:: 8.5. Date/Time Types \#
category:: #articles
url:: https://www.postgresql.org/docs/current/datatype-datetime.html

![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/elephant.png)

- The SQL standard requires that writing just `timestamp` be equivalent to `timestamp without time zone`, and PostgreSQL honors that behavior. `timestamptz` is accepted as an abbreviation for `timestamp with time zone`; this is a PostgreSQL extension. ([View Highlight](https://read.readwise.io/read/01hceyc0f25gbh37xppqgtdd4p)) #Highlight #[[2023-10-11]]
- `time`, `timestamp`, and `interval` accept an optional precision value *`p`* which specifies the number of fractional digits retained in the seconds field. By default, there is no explicit bound on precision. The allowed range of *`p`* is from 0 to 6. ([View Highlight](https://read.readwise.io/read/01hceycnjjmzh6qsgknn2atsgr)) #Highlight #[[2023-10-11]]