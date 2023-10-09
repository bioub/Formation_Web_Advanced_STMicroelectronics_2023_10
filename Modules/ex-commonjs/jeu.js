// importer en CommonJS getRandomInt (et remplacer l'appel si besoin ligne 29)
const readline = require('readline');

class Jeu {
  // ECMAScript 2022 (Class fields)
  #rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  constructor(options = {}) {
    // const min = options.min;
    // 1 - default avec un if
    // let min = options.min;
    // if (min === undefined) {
    //   min = 0;
    // }
    // 2 - default avec un ternaire
    // const min = (options.min !== undefined) ? options.min : 0;
    // 3 - default avec un OR (si la valeur par defaut est falsy (converti en Boolean vaut false))
    // const min = options.min || 0;
    // 4 - default avec un NULLISH COALESCING operator (ES2020)
    this.min = options.min ?? 0;
    this.max = options.max ?? 100;

    // this.rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    // });
    this.entierAlea = Random.getRandomInt(this.min, this.max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez saisi : ' + this.essais.join(' - '));
    }

    this.#rl.question(`Quel est le nombre (entre ${this.min} et ${this.max}) ? `, (answer) => {
      // answer est de type string (à vous le convertir)
      console.log('Vous avez saisi : ' + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un entier');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.#rl.close();
      }
    });
  }
}

// exporter Jeu
