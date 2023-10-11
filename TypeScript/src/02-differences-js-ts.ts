function sum(a: number, b: number) {
  return a + b;
}

// possible en JS
// console.log(sum(1, 2, 3)); // ERREUR en TS
// console.log(sum(1)); // ERREUR en TS

// en TS
console.log(sum(1, 2));

const coords = {x: 1, y: 2};

// possible en JS (extension d'objet)
// coords.z = 3; // ERREUR en TS
// Math.sum = sum; // ERREUR en TS

// possible en JS (créer dynamique une propriété)
// class Contact {
//   constructor(name: string) {
//     this.name = name;
//   }
//   hello() {
//     return `Hello ${this.name}`;
//   }
// }

// en TS
class Contact {
  protected name: string; // il faut déclarer les propriétés

  constructor(name: string) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

const romain = new Contact('Romain');

// possible en JS
// delete romain.name; // erreur en TS
// delete Math.random; // erreur en TS

