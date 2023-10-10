// Promise est un API (une classe) apparue en ES2015
// avec des nouveautés ajoutés en 2018, 2019, 2021
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Le constructeur est utile pour transformer un API asynchrone basé sur des callbacks
// en un API asynchrone basé sur des promesses

// Exemple : transformons setTimeout en un API basé sur des promesses
function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

// au lieu de :
// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// on pourrait écrire
// timeout(1000).then(() => {
//   console.log('1s');
// });

// ou en await
// await timeout(1000);
// console.log('1s');

// pour aller plus vite, on peut trouver des utilitaires pour faire la même chose,
// exemple util dans Node.js
// import { promisify } from 'node:util';

// const timeout = promisify(setTimeout);
// await timeout(1000);
// console.log('1s');

// pour aller encore plus vite, je peux utiliser une version déjà prête de timeout
// dans Node.js :

// import { setTimeout } from 'node:timers/promises';

// await setTimeout(1000);
// console.log('1s');


// Les méthodes Promise.all, Promise.race, Promise.allSettled, Promise.any
// permettent de combiner plusieurs promesses en une

// Promise.all
// Combiner plusieurs promesses en une seule qui sera résolue
// lorsque toutes les promesses en entrée auront été résolues
// si l'une est rejetée l'ensemble est rejeté
// Use case : dans le build je veux lire les 2 fichiers JS en même
// et les écrire dans app.js lorsque les 2 auront été lu
// si l'un n'arrive pas à être lu, on arrête le build
import fs from 'node:fs/promises';

// Promise.all([
//   fs.readFile('package.json', { encoding: 'utf-8' }),
//   fs.readFile('.prettierrc', { encoding: 'utf-8' }),
// ]).then((strings) => {
//   const strPackage = strings[0];
//   const strPrettier = strings[1];
// })

// Promise.all([
//   fs.readFile('package.json', { encoding: 'utf-8' }),
//   fs.readFile('.prettierrc', { encoding: 'utf-8' }),
// ]).then(([strPackage, strPrettier]) => {
//   console.log(strPackage);
//   console.log(strPrettier);
// })

const [strPackage, strPrettier] = await Promise.all([
  fs.readFile('package.json', { encoding: 'utf-8' }),
  fs.readFile('.prettierrc', { encoding: 'utf-8' }),
]);

console.log(strPackage);
console.log(strPrettier);

// Promise.race
// Combiner plusieurs promesses en une seule qui sera résolue
// lorsque la première promesse en entrée aura été résolue
// si la première est rejetée l'ensemble est rejeté
// Use case : une opération asynchrone avec un timeout
const strPackageWithTimeout = await Promise.race([
  fs.readFile('package.json', { encoding: 'utf-8' }),
  timeout(100),
]);

// Promise.allSettled
// Combiner plusieurs promesses en une seule qui sera résolue
// lorsque toutes les promesses en entrée auront été résolues
// si l'une est rejetée on récupère tout les résultats avec l'info
// si succes ou erreur
// Use case : dashboard avec plusieurs panneaux (widgets)
// et on veut faire toutes les requetes HTTP pour alimenter les panneaux
// on souhaite afficher les widgets qui ne sont pas en errreur

// Promise.any
// Combiner plusieurs promesses en une seule qui sera résolue
// lorsque la première promesse en entrée aura été résolue
// si la première est rejetée on attend la suivante
// Use case : ping de plusieurs serveurs pour connaitre le plus rapide
// Promise.any([
//   ping('server.domain1.com'),
//   ping('server.domain2.com'),
//   ping('server.domain3.com'),
// ])
