setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 500);
setTimeout(() => console.log('D'), 1000);
console.log('E');

// Sortie ???

// pile d'appel
// ^
// |
// |                                                             [log    ]    [log]     [log]           [log]
// |[setTimeout][setTimeout][setTimeout][setTimeout][log] ⟳     [taskLogB]  ⟳ [taskLogA][taskLogC] ⟳    [taskLogD]
// +------------------------------------------------------------5ms------------500ms----501ms------------1s-> temps
// Sortie:                                          E           B              A        C                D

// File d'attente de callback timers (0ms) : [taskLogB]
// File d'attente de callback timers (5ms) :
// File d'attente de callback timers (500ms) : [taskLogA] [taskLogC]
// File d'attente de callback timers (501ms) : [taskLogC]
// File d'attente de callback timers (502ms) :
// File d'attente de callback timers (1s) : [taskLogD]
// File d'attente de callback timers (1001ms) :

// Event Loop
// In The Loop (Jake Archibald): https://www.youtube.com/watch?v=cCOL7MC4Pl0
