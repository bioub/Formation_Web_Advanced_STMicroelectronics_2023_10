# Exercices

## JSX

Reprendre le HTML suivant du projet Todos et le transformer en JSX dans App :

```
<form class="todos-form">
  <input type="checkbox" class="todos-toggle-checked" />
  <input type="text" class="todos-new-input" />
  <button>+</button>
</form>
<div class="todos-container"></div>
```

Créer ensuite 3 composants `TodoItem` (remplace `createTodo`), `TodoSpanValue` (remplace `createSpanValue`) et `TodoInputValue` (remplace `createInputValue`) dans `todo-item.tsx` qui traduit le code suivant en JSX :

```
export function createTodo(todo: Todo): HTMLDivElement {
  const rowEl = document.createElement('div');
  rowEl.className = style.todosItem;
  rowEl.dataset.todoId = todo._id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = style.todosCompleted;
  checkboxEl.checked = todo.completed ?? false;

  const spanEl = createSpanValue(todo.title);

  const buttonEl = document.createElement('button');
  buttonEl.className = style.todosDeleteBtn;
  buttonEl.innerText = '-';

  rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return rowEl;
}

export function createSpanValue(val: string): HTMLSpanElement {
  const spanEl = document.createElement('span');
  spanEl.className = style.todosSpanValue;
  spanEl.innerText = val;
  return spanEl;
}

export function createInputValue(val: string): HTMLInputElement {
  const inputEl = document.createElement('input');
  inputEl.className = style.todosInputValue;
  inputEl.value = val;
  return inputEl;
}
```

Le type de retour des composant : `ReactNode` 

Le `todo.module.scss` peut être repris tel quel (dans le projet Web-Advanced-Tools)

Les innerText sont à remplacer en écrivant au milieu d'une balise JSX
ex: `<button>-</button>`

`rowEl.dataset.todoId` s'écrit comme en HTML : `<div data-todo-id="">`

Ne pas passer todo en paramètre d'entrée du composant (pour l'instant)

A la place, remplacer des valeurs fixes :
- todo.completed par false
- todo.title par 'ABC'
- todo._id = '1234'

En JSX, on passe une expression autre qu'un constante de type string comme ceci :

```
<input type="text" checked={true}>
<div>{todo.title}</div>
<input type="text" checked={todo.completed}>
```

Enfin utiliser `TodoItem` 3 fois dans `App`

```
<div class="todos-container">
  <TodoItem />
  <TodoItem />
  <TodoItem />
</div>
```
