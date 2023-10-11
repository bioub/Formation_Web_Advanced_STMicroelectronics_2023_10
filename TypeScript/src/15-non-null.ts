// ! en TypeScript est le Non Null Assertion operator (as not null)

const formEl = document.querySelector('form')!;
formEl.innerText = 'TEXT';


// équivalent à :
const formEl2 = document.querySelector('form') as HTMLFormElement;
formEl2.innerText = 'TEXT';
