import { sum, sub } from './my-math.js'; // si le fichier est local au projet toujours préfixer par ./ (le dossier courant) ou ../ le dossier parent
import hello from './hello.js'; // si le fichier est local au projet toujours préfixer par ./ (le dossier courant) ou ../ le dossier parent


console.log(sum(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(hello('Romain')); // Hello Romain


