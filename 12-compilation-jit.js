/**
 * Say hello to the given name.
 * @param {string} name The name to say hello to.
 * @returns {string} The hello message.
 */
function hello(name) {
  return 'Hello ' + name + '!';
}

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello(123);
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');
