import path from 'node:path';

console.log(path.join('logs', 'app.log'));
console.log(path.resolve('logs', 'app.log'));

// Attention __dirname n'existe qu'en module CommonJS

// pour que le chemin dépendent de la position du fichier courant
// console.log(path.join(__dirname, '..', 'logs', 'app.log'));
// console.log(path.resolve(__dirname, '..', 'logs', 'app.log'));

// à partir de Node 20 plus besoin de __dirname (encore experimental) :
console.log(import.meta.resolve && import.meta.resolve(path.join('..', 'logs', 'app.log')));

console.log(path.delimiter); // / ou \ ou :

console.log(path.extname('undossier/monfichier.zip'));
console.log(path.basename('undossier/monfichier.zip'));
console.log(path.parse('undossier/monfichier.zip'));
