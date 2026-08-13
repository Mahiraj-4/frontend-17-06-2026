                       MEMORY LAYOUT DIAGRAM

  Variable Name:      likes                  ptrLikes
                   +----------+           +--------------+
  Stored Value:    |   1250   |  <------- |  0x7ffd5012  |
                   +----------+           +--------------+
  Memory Address:   0x7ffd5012             0x7ffd5018

------------------------------------------------------------------------
EXPLANATION OF COMPONENTS:
------------------------------------------------------------------------
1. 'likes' Variable:
   - Resides at memory address: 0x7ffd5012
   - Holds integer value: 1250

2. 'ptrLikes' Pointer:
   - Resides at memory address: 0x7ffd5018
   - Stores the memory address of 'likes' (0x7ffd5012)
   - Dereferencing (*ptrLikes) reads the value 1250 from 0x7ffd5012
