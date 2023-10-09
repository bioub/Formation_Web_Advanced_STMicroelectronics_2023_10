const { sum, sub } = require('./my-math'); // si le fichier est local au projet toujours préfixer par ./ (le dossier courant) ou ../ le dossier parent
const hello = require('./hello'); // si le fichier est local au projet toujours préfixer par ./ (le dossier courant) ou ../ le dossier parent
const chalk = require('chalk');

console.log(sum(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(chalk.red(hello('Romain'))); // Hello Romain


