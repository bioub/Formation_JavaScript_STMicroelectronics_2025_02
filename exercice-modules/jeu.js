// Importer la fonction getRandomIntInclusive de random.js
const readline = require("readline");

class Jeu {
  constructor(options) {
    const min = options?.min ?? 0;
    const max = options?.max ?? 100; // équivalent à (options && options.max) ?? 100;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.essais = [];
    this.entierAlea = Random.getRandomIntInclusive(min, max);
  }
  loop() {
    if (this.essais.length) {
      console.log("Vous avez déjà saisi : " + this.essais.join(', '));
    }

    // La question s'affiche tout suite (synchrone)
    // on attend la réponse de l'utilisateur en asynchrone
    this.rl.question("Quel est le nombre ? ", (answer) => {
      console.log(`Vous avez saisi : ${answer}`);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log("Erreur : Il faut saisir un nombre");
        return this.loop();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log("Trop petit");
        this.loop();
      } else if (entierSaisi > this.entierAlea) {
        console.log("Trop grand");
        this.loop();
      } else {
        console.log("Gagné");
        this.rl.close();
      }
    });
  }
}

// Exporter la classe Jeu
