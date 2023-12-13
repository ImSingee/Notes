title:: Readwise/Highlights/RFC 8783: Distributed Denial-of-Service Open ...
author:: [[rfc-editor.org]]
full-title:: RFC 8783: Distributed Denial-of-Service Open Threat Signaling (DOTS) Data Channel Specification
category:: #articles
url:: https://www.rfc-editor.org/rfc/rfc9113

- When set, the END_STREAM flag indicates that this frame is the last that the endpoint will send for
              the identified stream.  Setting this flag causes the stream to enter one of the "half-closed" states or the "closed" state (Section 5.1). #Highlight #[[2023-10-23]]
- An endpoint that learns of stream closure after sending all data can close a
            stream by sending a STREAM frame with a zero-length Data field and the END_STREAM flag
            set. #Highlight #[[2023-10-23]]
- The HEADERS frame (type=0x01) is used to open a stream (Section 5.1),
          and additionally carries a field block fragment. Despite the name, a HEADERS frame can carry
          a header section or a trailer section. HEADERS frames can be sent on a stream
          in the "idle", "reserved (local)", "open", or "half-closed (remote)" state. #Highlight #[[2023-10-23]]
- The GOAWAY frame (type=0x07) is used to initiate shutdown of a connection or to signal
          serious error conditions.  GOAWAY allows an endpoint to gracefully stop accepting new
          streams while still finishing processing of previously established streams. #Highlight #[[2023-10-23]]
- Endpoints SHOULD always send a GOAWAY frame before closing a connection so that the remote
          peer can know whether a stream has been partially processed or not. #Highlight #[[2023-10-23]]