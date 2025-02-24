const value = '123';

// Egalité (valeur, laisse la possibilité de convertir les types)
console.log(value == 123); // true

// Egalité stricte (valeur et type)
console.log(value === 123); // false

// Recommandation: utiliser toujours l'égalité stricte
// pour éviter les surprises
const number = '123';
console.log(Number(number) === 123); // true

// Opérateur concaténation
// est le même que l'opérateur d'addition
console.log(1 + 2); // 3
console.log('1' + '2'); // '12'

console.log('1 + 1 = ' + 1 + 1); // '1 + 1 = 11'
console.log('1 + 1 = ' + (1 + 1)); // '1 + 1 = 2'
