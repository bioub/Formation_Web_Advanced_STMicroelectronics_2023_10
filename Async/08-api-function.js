// 'use strict';

// this ici, 3 cas possibles :
// - undefined en mode strict et donc en module ESM où le mode strict est activé par défaut
// donc this.name provoque une erreur (.name est appelé sur undefined)
// - Dans le navigateur this en mode non-strict (sloppy), est égal à l'objet global depuis ES2020
// === globalThis
// - En CommonJS dans Node this est la fonction généré par Node qui correspond au module cjs :
// function (exports, require, module, __filename, __dirname)

function hello(n1, n2) {
  return `Hello ${n1}, hello ${n2}, my name is ${this.name}`;
}

// On peut utiliser les fonctions comme des valeurs
// c'est à dire les affecter à des variables, des paramètres :

// const myFunction = hello;
// process.on('', () => {})
// btnEl.addEventListener('click', () => {})

// Les fonctions sont des objets

if (typeof hello === 'function') {
  console.log('hello is a function');
}

if (hello instanceof Function) {
  console.log('hello is a function');
}

if (hello instanceof Object) {
  console.log('hello is a function that inherits from Object');
}

// Les fonctions ont un API (sous forme de propriétés et de méthodes) :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

function use(cb) {
  console.log(cb.length);
  cb();
}

use((err, req, res, next) => {
  console.log('le callback à 4 paramètres');
});

use((req, res, next) => {
  console.log('le callback à 3 paramètres');
});

console.log(hello.length); // le nombre de paramètres déclarés
console.log(hello.name); // hello

console.log(hello.toString());

// console.log(hello('Toto', 'Titi')); // erreur en Mode ESM (car mode strict)

const user = {
  name: 'Romain',
};

console.log(hello.call(user, 'Toto', 'Titi')); // Hello Toto, hello Titi, my name is Romain
// console.log(hello.apply(user, ['Toto', 'Titi'])); // Hello Toto, hello Titi, my name is Romain
// apply n'est plus très aujourd'hui avec le SPREAD operator :
console.log(hello.call(user, ...['Toto', 'Titi'])); // Hello Toto, hello Titi, my name is Romain

// .bind idem à .call mais on paramètre en amont la valeur de this
const userHello = hello.bind(user);
console.log(userHello('Toto', 'Titi')); // Hello Toto, hello Titi, my name is Romain

// 2 cas d'utilisation :
// 1/ mélanger des callbacks avec this

// class Contact {
//   name = 'Romain';

//   hello() {
//     // this est une pseudo variable : elle est créé au moment de l'appel
//     console.log(`Hello ${this.name}`);
//   }

//   helloWithAsyncCode() {
//     setTimeout(function() {
//       // this est la valeur de l'appel du callback (et pas de helloWithAsyncCode)
//       console.log(this); // dans Node this ici est un objet de type Timeout
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// }

// const romain = new Contact();
// romain.hello(); // Hello Romain
// romain.helloWithAsyncCode(); // Hello undefined (car this est une classe de Node Timeout et qui n'a pas de propriété name)

// Pour afficher la bonne (Romain dans l'exemple) il existe 4 solutions :

// Solution 1 : aliaser this
// class Contact {
//   name = 'Romain';

//   hello() {
//     // this est une pseudo variable : elle est créé au moment de l'appel
//     console.log(`Hello ${this.name}`);
//   }

//   helloWithAsyncCode() {
//     const that = this;
//     setTimeout(function() {
//       console.log(`Hello ${that.name}`);
//     }, 1000);
//   }
// }

// const romain = new Contact();
// romain.hello(); // Hello Romain
// romain.helloWithAsyncCode(); // Hello Romain

// Solution 2 : utilise .bind
// class Contact {
//   name = 'Romain';

//   hello() {
//     // this est une pseudo variable : elle est créé au moment de l'appel
//     console.log(`Hello ${this.name}`);
//   }

//   helloWithAsyncCode() {
//     setTimeout(function() {
//       console.log(`Hello ${this.name}`);
//     }.bind(this), 1000);
//   }
// }

// const romain = new Contact();
// romain.hello(); // Hello Romain
// romain.helloWithAsyncCode(); // Hello Romain

// Solution 2 : plutôt quand les fonction ne sont pas imbriqué
// class Contact {
//   name = 'Romain';

//   hello() {
//     // this est une pseudo variable : elle est créé au moment de l'appel
//     console.log(`Hello ${this.name}`);
//   }

//   helloWithAsyncCode() {
//     setTimeout(this.hello.bind(this), 1000);
//   }
// }

// const romain = new Contact();
// romain.hello(); // Hello Romain
// romain.helloWithAsyncCode(); // Hello Romain

// Solution 3 : le callback soit fléché
// les fonctions fléchées ne créées pas les pseudo variables (this, arguments...)
// class Contact {
//   name = 'Romain';

//   hello() {
//     // this est une pseudo variable : elle est créé au moment de l'appel
//     console.log(`Hello ${this.name}`);
//   }

//   helloWithAsyncCode() {
//     setTimeout(() => {
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// }

// const romain = new Contact();
// romain.hello(); // Hello Romain
// romain.helloWithAsyncCode(); // Hello Romain

// Solution 3 : le callback soit fléché (variante avec la méthode hello)
// class Contact {
//   name = 'Romain';

//   hello() {
//     // this est une pseudo variable : elle est créé au moment de l'appel
//     console.log(`Hello ${this.name}`);
//   }

//   helloWithAsyncCode() {
//     setTimeout(() => this.hello(), 1000);
//   }
// }

// const romain = new Contact();
// romain.hello(); // Hello Romain
// romain.helloWithAsyncCode(); // Hello Romain



// Solution 4 : la méthode hello soit fléchés (créer la propriété hello et lui affecter la fonction fléché)
// inconvénient : on aura autant de fonction hello que d'objet Contact (syntaxe est plus lourde)
class Contact {
  name = 'Romain';

  hello = () => {
    // this est une pseudo variable : elle est créé au moment de l'appel
    console.log(`Hello ${this.name}`);
  };

  helloWithAsyncCode() {
    setTimeout(this.hello, 1000);
  }
}

const romain = new Contact();
romain.hello(); // Hello Romain
romain.helloWithAsyncCode(); // Hello Romain
