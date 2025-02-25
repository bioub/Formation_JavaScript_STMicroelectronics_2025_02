// 1 - Créer un namespace object Random
// qui contient ces 4 fonctions de sorte
// à pouvoir écrire Random.getRandomInt(0, 100) par exemple

function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// require importe l'API readline de Node.js
const readline = require("readline");

// Configurer readline
// pour lire sur le clavier (process.stdin)
// et écrire dans le terminal (process.stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loop() {
  if (essais.length) {
    console.log("Vous avez déjà saisi : " + essais.join(', '));
  }

  // La question s'affiche tout suite (synchrone)
  // on attend la réponse de l'utilisateur en asynchrone
  rl.question("Quel est le nombre ? ", (answer) => {
    console.log(`Vous avez saisi : ${answer}`);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log("Erreur : Il faut saisir un nombre");
      return loop();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log("Trop petit");
      loop();
    } else if (entierSaisi > entierAlea) {
      console.log("Trop grand");
      loop();
    } else {
      console.log("Gagné");
      rl.close();
    }
  });
}

const essais = [];
const entierAlea = getRandomIntInclusive(0, 100);
loop();

// 2 - Créer une classe Jeu
// dont loop deviendra une méthode
// dont le constructeur va déclarer les propriétés entierAlea, essais et rl
// de sorte à pouvoir démarer le jeu comme ceci :
// const game = new Jeu();
// game.loop();

// 3 - Ajouter un paramètres options au constructeur de Jeu
// ce paramètre sera un object optionnel qui contiendra 2 clés optionnel min et max
// se servir de options pour configurer entierAlea (garder 0 et 100 en valeur par défaut)
// const game = new Jeu({ min: 0, max: 100 });
// game.loop();
// ou
// const game = new Jeu();
// game.loop();
// ou
// const game = new Jeu({ max: 10 });
// game.loop();


// pile d'appel
// ^
// |                              [question]                           [question]
// |[question]                    [loop      ]                         [loop]
// |[loop    ] ⟳                  [taskAnswer] ⟳                       [taskAnswer    ] ⟳
// +------------------------------ENTREE------------------------------ENTREE----------------> temps
// Sortie:
