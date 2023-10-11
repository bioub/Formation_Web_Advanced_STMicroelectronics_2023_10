import { Todo } from './todo.js';
import { createInputValue, createSpanValue, createTodo } from './todos.js';

const formEl = document.querySelector('.todos-form') as HTMLFormElement;
const inputEl = document.querySelector('.todos-new-input') as HTMLInputElement;
const divEl = document.querySelector('.todos-container') as HTMLDivElement;
const toggleEl = document.querySelector('.todos-toggle-checked') as HTMLInputElement;

toggleEl.addEventListener('click', () => {
  const checkboxEls = divEl.querySelectorAll<HTMLInputElement>('.todos-completed');

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
  const target = event.target as HTMLElement;

  if (target.classList.contains('todos-delete-btn')) {
    target.closest('.todos-item')!.remove();
  }
});

divEl.addEventListener('dblclick', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('todos-span-value')) {
    const inputEl = createInputValue(target.innerText);
    target.replaceWith(inputEl);
  }
});

divEl.addEventListener('keydown', (event) => {
  const target = event.target as HTMLElement;

  if (
    target.classList.contains('todos-input-value') &&
    event.code === 'Enter'
  ) {
    target.replaceWith(createSpanValue((target as HTMLInputElement).value));
  }
});

const res = await fetch('https://jsonplaceholder.typicode.com/todos');
const todos: Todo[] = await res.json();

for (const todo of todos.slice(0, 20)) {
  const itemEl = createTodo(todo);
  divEl.append(itemEl);
}


inputEl.addEventListener('input', () => {
  localStorage.setItem('new-todo', inputEl.value);
});

const newTodoFromStorage = localStorage.getItem('new-todo');
if (newTodoFromStorage) {
  inputEl.value = newTodoFromStorage;
}
