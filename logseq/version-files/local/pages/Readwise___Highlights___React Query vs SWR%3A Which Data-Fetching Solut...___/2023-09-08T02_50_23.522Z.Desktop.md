title:: Readwise/Highlights/React Query vs SWR: Which Data-Fetching Solut...
author:: [[statusneo.com]]
full-title:: React Query vs SWR: Which Data-Fetching Solution Is Right for You?
category:: #articles
url:: https://statusneo.com/react-query-vs-swr-which-data-fetching-solution-is-right-for-you/

- One of the biggest differences between React Query and SWR is the features each library offers. React Query provides features like automatic retries, refetch on interval, caching/suspense integration, cancelation tokens, global state management, SSR support, and more. SWR, on the other hand, focuses mainly on providing hooks for remote data fetching. While it does offer some caching features, they are not as robust as those offered by React Query. #Highlight #[[2023-04-24]]
- With React Query, components will only re-render when the data that they need has been fetched (or if an error has occurred). With SWR, components will always re-render when new data is fetched from the API— even if the component doesn’t need to use that data. This can lead to unnecessary re-renders and lower performance in some cases. #Highlight #[[2023-04-24]]