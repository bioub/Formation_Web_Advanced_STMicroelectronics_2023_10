import fs from 'node:fs/promises';

// 1er intérêt d'un promise, l'API pour les callbacks est normé quelque soit l'opération
// .then(callbackDeSucces).catch(callbackDErreur)

// fs.readFile('package.json')
//   .then((data) => {
//     fs.writeFile('package.json.copy', data)
//       .then(() => {
//         console.log('Copy done')
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2e intérêt, si dans un callback d'une promesse (dans le .then ou le .catch)
// je retourne une nouvelle promesse, je peux ne pas imbriqué les promesses
// dit autrement : le .then qui suit portera sur la promesse retournée

// grace à ça plus de callback hell (plus de pyramide et une gestion centralisée de l'erreur)
// fs.readFile('package.json')
//   .then((data) => {
//     return fs.writeFile('package.json.copy', data);
//   })
//   .then(() => {
//     console.log('Copy done');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// en raccourissant les fonctions fléchées (ce qui suit la flèche est la valeur de retour)
fs.readFile('package.json')
  .then((data) => fs.writeFile('package.json.copy', data))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log(err));
  