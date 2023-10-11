import { Todo } from "./todo";

export function createTodo(todo: Todo): HTMLDivElement {
  const rowEl = document.createElement('div');
  rowEl.className = 'todos-item';
  rowEl.dataset.todoId = String(todo.id);

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todos-completed';
  checkboxEl.checked = todo.completed;

  const spanEl = createSpanValue(todo.title);

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todos-delete-btn';
  buttonEl.innerText = '-';

  rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return rowEl;
}

export function createSpanValue(val: string): HTMLSpanElement {
  const spanEl = document.createElement('span');
  spanEl.className = 'todos-span-value';
  spanEl.innerText = val;
  return spanEl;
}

export function createInputValue(val: string): HTMLInputElement {
  const inputEl = document.createElement('input');
  inputEl.className = 'todos-input-value';
  inputEl.value = val;
  requestAnimationFrame(() => {
    inputEl.select();
  });
  return inputEl;
}
