// require importe l'API readline de Node.js
const readline = require('readline');

// Configurer readline
// pour lire sur le clavier (process.stdin)
// et écrire dans le terminal (process.stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function loop() {
  // La question s'affiche tout suite (synchrone)
  // on attend la réponse de l'utilisateur en asynchrone
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log(`Vous avez saisi : ${answer}`);

    loop();

    rl.close();
  });
}

loop();


// pile d'appel
// ^
// |                              [question]                           [question]
// |[question]                    [loop      ]                         [loop]
// |[loop    ] ⟳                  [taskAnswer] ⟳                       [taskAnswer    ] ⟳
// +------------------------------ENTREE------------------------------ENTREE----------------> temps
// Sortie:


