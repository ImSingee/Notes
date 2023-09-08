file:: [raft-extended_1654411095297_0.pdf](../assets/raft-extended_1654411095297_0.pdf)
file-path:: ../assets/raft-extended_1654411095297_0.pdf
- Each server stores a log containing a series of commands, which its state machine executes in order. Each log contains the same commands in the same order, so each state machine processes the same sequence of commands. Since the state machines are deterministic, each computes the same state and the same sequence of outputs.
  ls-type:: annotation
  hl-page:: 2
  hl-color:: blue
  id:: 6364d5c2-48c8-4123-b89d-26c7ed3bd39e
- Raft uses the voting process to prevent a candidate from winning an election unless its log contains all committed entries.
  ls-type:: annotation
  hl-page:: 8
  hl-color:: blue
  id:: 637e1a32-07d4-4a81-bc67-b749f8442c29
- If a follower or candidate crashes, then future RequestVote and AppendEntries RPCs sent to it will fail.
  ls-type:: annotation
  hl-page:: 10
  hl-color:: blue
  id:: 637e1ec6-7990-40b5-8696-0074a16d2897
- safety must not depend on timing
  ls-type:: annotation
  hl-page:: 10
  hl-color:: blue
  id:: 637e1f26-6a3e-4dcd-a7ea-605e92f9834b