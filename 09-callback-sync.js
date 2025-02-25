function hello(name, i) {
  console.log('Hello ' + name.toUpperCase() + '!');
}

const names = ['Alice', 'Bob', 'Charlie'];

// Il y a une boucle dans la fonction forEach
// qui appelle la fonction hello pour chaque élément du tableau.
// C'est une forme de callback.
names
  .filter((el) => el.includes('e'))
  .forEach(hello);

// pile d'appel
// ^
// |
// |[for { hello - hello - hello } ]
// |[forEach                       ]
// +----------------------------------------------> temps
// Sortie: ALICE   BOB     CHARLIE

// Programmation fonctionnelle
// Les fonctions remplaces des opérations commes des boucles/conditions
// Voir : forEach, filter, map, reduce, find, some, every...
