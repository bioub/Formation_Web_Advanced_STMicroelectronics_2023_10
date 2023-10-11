function interval(delayMs) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, delayMs);
  });
}

// setInterval(() => {
//   console.log('1s')
// }, 1000);

// interval(1000).then(() => {
//   console.log('1s')
// });

// await interval(1000);
// console.log('1s')

// Principale limite d'une promesse : elle ne peut s'exécuter qu'une seule fois
// Pas possible d'utiliser les promesses pour :
// - setInterval
// - addEventListener
// - WebSocket
// - Worker

// Pour y répondre on peut utiliser Async Iterator (ES2018)
// (ou les Observable mais pas la norme (en cours depuis 2017), exemple avec RxJS)

// Async Iterator complexe à créer soit même, donc idéalement on passe par des APIs existants
import { setInterval } from 'node:timers/promises'

for await (const startTime of setInterval(1000, Date.now())) {
  console.log('1s');

  if (Date.now() - startTime > 3000) {
    // au bout de 3s on arrête
    break;
  }
}
console.log('fin');

// Un jour peut-être ?
// for await (const event of el.addEventListener('click')) {
//
// }
