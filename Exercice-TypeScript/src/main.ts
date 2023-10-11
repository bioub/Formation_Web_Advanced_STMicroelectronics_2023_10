import { createInputValue, createSpanValue, createTodo } from './todos';

// TODO : pour tous les querySelector utiliser
// - soit le type generic + non null assertion (le !)
// - soit assertion de type (as HTML...Element)

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-new-input');

/** @type {HTMLDivElement} */
const divEl = document.querySelector('.todos-container');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-toggle-checked');

toggleEl.addEventListener('click', () => {
  // TODO: type generic

  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = divEl.querySelectorAll('.todos-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const itemEl = createTodo({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  divEl.prepend(itemEl);
});

divEl.addEventListener('click', (event) => {
  // TODO : assertion de type (sur target)

  /** @type {HTMLElement} */
  const target = event.target;

  // TODO : closest peut retourner null
  // donc ajouter un if ou un ? ou un !
  if (target.classList.contains('todos-delete-btn')) {
    target.closest('.todos-item').remove();
  }
});

divEl.addEventListener('dblclick', (event) => {
  // TODO : assertion de type (sur target)

  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todos-span-value')) {
    const inputEl = createInputValue(target.innerText);
    target.replaceWith(inputEl);
  }
});

divEl.addEventListener('keydown', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (
    target.classList.contains('todos-input-value') &&
    event.code === 'Enter'
  ) {
    target.replaceWith(createSpanValue(target.value));
  }
});

// TODO : utiliser top level await (voir chapitre Async)
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((todos) => {
    for (const todo of todos.slice(0, 20)) {
      const itemEl = createTodo(todo);
      divEl.append(itemEl);
    }
  });


inputEl.addEventListener('input', () => {
  localStorage.setItem('new-todo', inputEl.value);
});

// TODO : refactorer avec une variable pour éviter null
if (localStorage.getItem('new-todo')) {
  inputEl.value = localStorage.getItem('new-todo');
}
