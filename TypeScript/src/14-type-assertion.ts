// HTMLDivElement -> HTMLElement -> Element -> Node -> EventTarget
const divEl = document.querySelector('div');

if (divEl) {
  divEl.innerText = 'TEXT';
}

const boxEl = document.querySelector('#box');

if (boxEl instanceof HTMLElement) {
  boxEl.innerText = 'TEXT';
}

// syntaxe recommandée :
const box2El = document.querySelector('#box') as HTMLDivElement;
box2El.innerText = 'TEXT';

// syntaxe inspirée de Java
const box3El = <HTMLDivElement> document.querySelector('#box');
box3El.innerText = 'TEXT';


