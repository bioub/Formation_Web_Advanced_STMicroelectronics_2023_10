const names = ['Romain', 'Chayma', 'Ludovic'];

function hello(name: string) {
  return `Hello ${name}`;
}

for (const n of names) {
  console.log(hello(n));
}
