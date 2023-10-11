function loop1(letters: string[]) { // style C (recommandé)

}

function loop2(letters: Array<string>) { // style Java

}

// Attention à l'inference de type d'un tableau

const prenoms = ['Toto', 'Titi'];
prenoms.push('Tata');
// prenoms.push(123); ERREUR

const emptyArray = []; // pas assez explicite (accepte n'importe quel type)
emptyArray.push(123)
emptyArray.push('123')

const stringArray: string[] = []; // mieux
// stringArray.push(123) // erreur
stringArray.push('123')

// dans une classe
// class Collection {
//   myArray = [];

//   add(value: string) {
//     this.myArray.push(value); // myArray est de type never[], donc toujours vide
//   }
// }

class Collection {
  myArray: string[] = [];

  add(value: string) {
    this.myArray.push(value); // myArray est de type never[], donc toujours vide
  }
}
