function hello(name) {
  return 'Hello ' + name;
}

const names = ['Alice', 'Bob', 'Charlie'];

for (const n of names) {
  console.log(hello(n));
}
