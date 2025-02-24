// En JavaScript la plupart des APIs disponibles sont des objets
// Exemple :
console.log(typeof Math); // object
console.log(typeof JSON); // object

console.log(typeof 'Romain'); // string
console.log(typeof function() {}); // function
console.log(typeof []); // object

// De même pour les plateformes Node.js et navigateur
console.log(typeof console); // object (Node.js et navigateur)
console.log(typeof process); // object (Node.js) / undefined (navigateur)
console.log(typeof document); // undefined (Node.js) / object (navigateur)
console.log(typeof window); // undefined (Node.js) / object (navigateur)

// Pour accéder au contenu d'un objet on utilise la notation pointée
console.log(Math.random()); // 0.123456789
console.log(Math.floor(1.5)); // 1

// Il est possible d'accéder à une propriété d'un objet avec la notation []
console.log(Math['random']()); // 0.123456789
console.log(Math['floor'](1.5)); // 1

// les crochets sont plus dynamiques
const method = 'random';
console.log(Math[method]()); // 0.123456789

// On peut ajouter des propriétés à un objet
// Les objets en JavaScript sont dit "extensibles"

// Ajouter une propriété
console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// Modifier une propriété
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum(1, 2)); // 3

// Supprimer une propriété
delete Math.sum;
console.log(Math.sum); // undefined

// Les objets en JavaScript sont des dictionnaires
// On peut ajouter, modifier ou supprimer n'importe quelle clé/valeur

// Mauvaise pratique d'étendre les objets natifs ou ceux des bibliothèques
// car on peut créer des collisions de noms (dans les sources)

// Par contre c'est très utile pour les tests unitaires
// pour mocker des dépendances

function pileOuFace() {
  return Math.random() > 0.5 ? 'pile' : 'face';
}

const originalRandom = Math.random;
Math.random = () => 0.75;
console.log(pileOuFace() === 'pile'); // true
Math.random = originalRandom;

// 2 systèmes pour créer des objets

// Object literal
const coords = {
  x: 1,
  y: 2, // virgule finale recommandée (possible depuis ES5)
  toString() { // ES6 on est plus obligé d'écrire toString: function()
    return `x: ${this.x}, y: ${this.y}`;
  }
};

console.log(coords.toString()); // x: 1, y: 2

// Constructor Function / class
// function User() {
//   // this est une pseudo-variable (créée au moment de l'appel) qui référence l'objet courant
//   // console.log(this);
//   this.name = 'Romain';

//   // Mauvaise pratique de définir nos méthodes dans le constructeur
//   // car elles seront dupliquées pour chaque instance
//   // this.hello = function() {
//   //   return `Hello ${this.name}!`;
//   // };
// }

// User.getClass = function() {
//   return 'User';
// };

// User.prototype.hello = function() {
//   return `Hello ${this.name}!`;
// };

class User {
  constructor() {
    // this est une pseudo-variable (créée au moment de l'appel) qui référence l'objet courant
    // console.log(this);
    this.name = 'Romain';

    // Mauvaise pratique de définir nos méthodes dans le constructeur
    // car elles seront dupliquées pour chaque instance
    // this.hello = function() {
    //   return `Hello ${this.name}!`;
    // };
  }
  static getClass() {
    return 'User';
  }
  hello() {
    return `Hello ${this.name}!`;
  }
}



// console.log(User()); // undefined
// console.log(new User()); // User {}

const romain = new User('Romain');
console.log(romain); // User {}
console.log(romain.hello()); // Hello Romain!
console.log(User.getClass()); // User

const toto = new User('Toto');
console.log(romain.hello === toto.hello); // true

// delete User.prototype.hello;

if (toto instanceof User) {
  delete toto.name;
  console.log('toto est une instance de User');
  console.log(toto.hello());
}

// Héritage (moderne)
class Admin extends User {
  constructor() {
    super();
    this.role = 'admin';
  }
  hello() {
    return `${super.hello()} You're an admin`;
  }
}

// Comme en Java, tous les objets héritent de Object
console.log(toto instanceof Object); // true
console.log(toto instanceof User); // true


// Fonctionnement du prototype en JavaScript
// - quand on écrit toto.name
// - JS regarde si toto a une propriété name
// - si non il regarde si User.prototype a une propriété name
// - si non il regarde si Object.prototype a une propriété name
// - si non il renvoie undefined

console.log(toto.name); // trouve dans l'objet toto
console.log(toto.hello); // trouve dans User.prototype
console.log(toto.toString); // trouve dans Object.prototype

console.log(toto.hasOwnProperty('name')); // true
console.log(toto.hasOwnProperty('hello')); // false

