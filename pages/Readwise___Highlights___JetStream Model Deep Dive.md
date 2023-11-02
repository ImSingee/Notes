title:: Readwise/Highlights/JetStream Model Deep Dive
author:: [[nats.io]]
full-title:: JetStream Model Deep Dive
category:: #articles
url:: https://docs.nats.io/using-nats/developer/develop_jetstream/model_deep_dive

- One can then define additional ways a message may be removed from the Stream earlier than these limits. In `WorkQueuePolicy` the messages will be removed as soon as *the* Consumer received an Acknowledgement. In `InterestPolicy` messages will be removed as soon as *all* Consumers of the stream for that subject have received an Acknowledgement for the message.
  
  In both `WorkQueuePolicy` and `InterestPolicy` the age, size and count limits will still apply as upper bounds. ([View Highlight](https://read.readwise.io/read/01hc9869pfktyj0r5qdjzfw3v5)) #Highlight #[[2023-10-09]]
- JetStream support idempotent message writes by ignoring duplicate messages as indicated by the `Nats-Msg-Id` header. ([View Highlight](https://read.readwise.io/read/01hc986f8ny3f1dqwqgzr13svp)) #Highlight #[[2023-10-09]]
- The default window to track duplicates in is 2 minutes, this can be set on the command line using `--dupe-window` when creating a stream, though we would caution against large windows. ([View Highlight](https://read.readwise.io/read/01hc987vpthmpk8t7tce9en0md)) #Highlight #[[2023-10-09]]