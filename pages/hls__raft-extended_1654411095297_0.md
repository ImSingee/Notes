file:: [raft-extended_1654411095297_0.pdf](../assets/raft-extended_1654411095297_0.pdf)
file-path:: ../assets/raft-extended_1654411095297_0.pdf

- Each server stores a log containing a series of commands, which its state machine executes in order. Each log contains the same commands in the same order, so each state machine processes the same sequence of commands. Since the state machines are deterministic, each computes the same state and the same sequence of outputs.
  ls-type:: annotation
  hl-page:: 2
  hl-color:: blue
  id:: 6364d5c2-48c8-4123-b89d-26c7ed3bd39e