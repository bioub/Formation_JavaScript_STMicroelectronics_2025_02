// REST OPERATOR
// convertir un syntaxe qui est une liste de valeur (ici 3, 4, 5)
// en tableau (ici [3, 4, 5])
function sumRest(a, b, ...numbers) {
  let result = a + b;

  for (const n of numbers) {
    result += n;
  }

  return result;
}
console.log(sumRest(1, 2, 3, 4, 5)); // 15

// SPREAD OPERATOR
// la conversion inverse (ici [3, 4, 5] en 3, 4, 5)
function sumSpread(a, b, c) {
  return a + b + c;
}
const numbers = [3, 4, 5];
console.log(sumSpread(numbers[0], numbers[1], numbers[2])); // 12
console.log(sumSpread(...numbers)); // 12

// const cloneNumbers = numbers.slice();
const cloneNumbers = [...numbers];

// Ajouter en immuable (idem .push mais créé un nouveau tableau)
const newNumbers = [...numbers, 6];

// Destructuration
const fullName = 'Romain Bohdanowicz';
const tmp = fullName.split(' ');
const firstName = tmp[0];
const lastName = tmp[1];

//    ['Romain'         , 'Bohdanowicz'   ]
const [firstNameDestruct, lastNameDestruct] = fullName.split(' ');

// Combiner la destructuration avec REST et default
//    [3    , 4     , 5]
const [trois, quatre, cinq, six = 6, ...restNumbers] = numbers

// Depuis ES2018
// On peut aussi utiliser REST et SPREAD sur les objets
const coords = {x: 1, y: 2, z: 3};

//    {            z: 3, x: 1, y: 2, }
// REST
const {            z   , ...coords2d } = coords;

// SPREAD
const cloneCoords = {...coords};
const newCoords = {...coords, x: 10};
