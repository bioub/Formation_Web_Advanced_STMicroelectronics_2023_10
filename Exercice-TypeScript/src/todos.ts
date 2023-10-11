// TODO: déclare les type d'entrée et de retour
// todo est un object

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
export function createTodo(todo) {
  const rowEl = document.createElement('div');
  rowEl.className = 'todos-item';
  rowEl.dataset.todoId = todo.id;

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

/**
 * @param {string} val
 * @returns {HTMLSpanElement}
 */
export function createSpanValue(val) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todos-span-value';
  spanEl.innerText = val;
  return spanEl;
}

/**
 * @param {string} val
 * @returns {HTMLInputElement}
 */
export function createInputValue(val) {
  const inputEl = document.createElement('input');
  inputEl.className = 'todos-input-value';
  inputEl.value = val;
  requestAnimationFrame(() => {
    inputEl.select();
  });
  return inputEl;
}
