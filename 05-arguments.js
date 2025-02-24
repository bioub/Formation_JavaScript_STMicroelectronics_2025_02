function sum(a, b) {
  // arguments est une pseudo-variable (elle est créée au moment de l'appel de la fonction)
  // qui contient tous les arguments passés à la fonction
  let result = a + b;

  for (let i = 2; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest parameter (ES6 / ES2015)
// Remplace l'utilisation de arguments
// ...numbers est un tableau contenant les arguments restants
// ... doit être le dernier paramètre
function sumRest(a, b, ...numbers) {
  let result = a + b;

  for (const n of numbers) {
    result += n;
  }

  return result;
}
console.log(sumRest(1, 2, 3, 4, 5)); // 15
