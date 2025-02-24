// Une variable globale est une variable qui est accessible partout
// n'importe qu'elle fichier, n'importe quelle fonction...
// Plutôt à éviter pour réduire les risques de conflits
globalThis.myGlobalVar = "I am a global variable";

// console.log(myGlobalVar); // I am a global variable

// La portée d'une variable de fichier dépend de :
// - la plateforme (Node.js, navigateur...)
// - le type de module (CommonJS, ESM...)
const myFileVar = "I am a file variable";

// console.log(myFileVar); // I am a file variable

function outerFunction() {
  // Une variable déclarée dans une fonction est accessible
  // uniquement dans cette fonction
  const myClosureVar = "I am a closure variable";

  function myFunction() {
    // Une variable déclarée dans une fonction est accessible uniquement dans cette fonction
    const myFunctionVar = "I am a function variable";

    if (true) {
      // Une variable déclarée dans un bloc est accessible uniquement dans ce bloc
      // à condition d'utiliser let ou const (la portée avec var aurait été la fonction)
      const myBlockVar = "I am a block variable";

      console.log(myGlobalVar); // I am a global variable
      console.log(myFileVar); // I am a file variable
      console.log(myClosureVar); // I am a closure variable
      console.log(myFunctionVar); // I am a function variable
      console.log(myBlockVar); // I am a block variable
    }

    // console.log(myFunctionVar); // I am a function variable
    // console.log(myBlockVar); // ReferenceError: myBlockVar is not defined
  }

  myFunction();
}

outerFunction();
