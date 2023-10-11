function identity<T>(val: T): T {
  return val;
}

identity<string>('ABC').toUpperCase();
identity<number>(123).toFixed();


// Avec l'inférence de type, T est déterminé à partir de la valeur passé en param
identity('ABC').toUpperCase();
identity(123).toFixed();


// const myBoxEl = document.querySelector<HTMLFormElement>('#my-box');


// avec le assertion type
// const checkboxes1 = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;


// avec l'utilisation du type generique défini dans querySelectorAll
// const checkboxes2 = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')


class Stack<T> {
  private list: T[] = [];

  push(val: T) {
    this.list.push(val);
  }
  pop() {
    return this.list.pop();
  }
  peek() {
    return this.list.at(-1);
  }
}

const cartes = new Stack<string>();

cartes.push('Roi de Carreau');
cartes.push('3 de Treffle');

console.log(cartes.peek()?.toLowerCase()); // 3 de treffle


function timeout(delayMs: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

async function testAsync(): Promise<string> {


  return 'ABC';
}

interface MyArray<T> {
  list: T[];
}

const arrayLike: MyArray<number> = {
  list: [1, 2, 3, 4],
}
