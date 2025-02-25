// Default param
function sum(a, b, c = 0) {
  return a + b + c;
}

sum(1, 2); // 3


function sumArray(numbers = []) {
  let result = 0;

  for (const n of numbers) {
    // Nullish coalescing operator ES2020
    // si n est null ou undefined, on prend 0
    // si on avait utilisé l'opérateur logique ||, on aurait pris 0 pour n = 0, false, '', NaN
    result += n ?? 0;
  }

  return result;
}

console.log(sumArray([]));
console.log(sumArray([undefined, 2, 3]));


const coords = {
  x: 1,
  y: 2,
};

const z = coords.z ?? 0;
