import fs from 'node:fs';

// Lire un fichier avec Node.js en version synchrone
// Avantage : le code est simple à lire/écrire, les lignes s'exécutent dans l'ordre
// Inconvénient : tant que le fichier est en lecture (par l'OS),
// le thread JS reste bloqué sur l'appel à readFileSync
const data = fs.readFileSync('package.json');
console.log(data.toString('utf-8'));



// Lire un fichier avec Node.js en version asynchrone
// Inconvénient : les lignes ne s'exécutent pas dans l'ordre (ligne 16, 19 puis 17 plus tard)
// l'ordre peut être impossible à prédire (plusieurs opérations async qui démarrent en même temps)
// Avantage : performant car le thread n'est pas bloqué par l'opération (ici de lire le fichier)
fs.readFile('package.json', (err, data) => {
  console.log(data.toString('utf-8'));
});
