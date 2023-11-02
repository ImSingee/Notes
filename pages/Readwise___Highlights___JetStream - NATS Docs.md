title:: Readwise/Highlights/JetStream - NATS Docs
author:: [[nats.io]]
full-title:: JetStream - NATS Docs
category:: #articles
url:: https://docs.nats.io/using-nats/developer/develop_jetstream

- So yes, when a 'Core NATS' application publishes a message on a Stream's subject, that message will indeed get stored in the stream, but that's not really the intent as you are then publishing with the lower quality of service provided by Core NATS. So, while it will definitely work to just use the Core NATS Publish call to publish to a stream, look at it more as a convenience that you can use to help ease the migration of your applications to use streaming rather the desired end state or ideal design. ([View Highlight](https://read.readwise.io/read/01hc97m46g1c9n00e10a7jwq8p)) #Highlight #[[2023-10-09]]
- Acknowledging messages[](https://docs.nats.io/using-nats/developer/develop_jetstream#acknowledging-messages)
  
  Some consumers require the client application code to acknowledge the processing or consumption of the message, but there is more than one way to acknowledge (or not) a message
  
  •   `Ack` Acknowledges a message was completely handled
    
  
  •   `Nak` Signals that the message will not be processed now and processing can move onto the next message, NAK'd message will be retried
    
  
  •   `InProgress` When sent before the AckWait period indicates that work is ongoing and the period should be extended by another equal to `AckWait`
    
  
  •   `Term` Instructs the server to stop redelivery of a message without acknowledging it as successfully processed ([View Highlight](https://read.readwise.io/read/01hc97sbxqmhb02rxgezdjqjd7)) #Highlight #[[2023-10-09]]