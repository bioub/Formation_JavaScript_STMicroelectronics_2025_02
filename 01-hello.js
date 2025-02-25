// @ts-check

/**
 * Say hello to the given name.
 * @param {string} name The name to say hello to.
 * @returns {string} The hello message.
 */
function hello(name) {
  return `Hello ${name.toUpperCase()}!`;
}

const names = ['Alice', 'Bob', 'Charlie'];

for (const n of names) {
  console.log(hello(n));
}
