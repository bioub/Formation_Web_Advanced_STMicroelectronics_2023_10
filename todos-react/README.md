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

## Props

Déclarer une prop todo dans `TodoItem`.

Cette prop doit être un objet avec 3 clés :
- `_id` de type `string`
- `title` de type `string`
- `completed` de type `boolean`

Dans `App` passer ensuite un objet d'exemple différent à chaque `<TodoItem />` par exemple :

```
{ _id: 'abcdef1234', title: 'ABC', completed: false }
```

Modifier le code de `TodoItem` de façon à :
- affecter `_id` à `data-todo-id`
- affecter `completed` à la propriété `checked` de la checkbox
- passer `title` en prop de `<TodoSpanValue />`

Déclarer ensuite la prop `title` dans `TodoSpanValue` et l'afficher dans la balise `<span>`

Utiliser `TypeScript` pour typer les props.

## JSX conditionnel et listes

Ajouter une prop `isEditing` au composant `TodoItem`, elle doit être optionnelle, de type boolean et avoir en valeur par défault `false`.

Dans le JSX de `TodoItem` si `isEditing` vaut `false`, continuer d'afficher le composant `TodoSpanValue`, par contre si `isEditing` vaut `true` afficher le composant `TodoInputValue`.

Tester depuis `App` que les composants s'affichent correctement si on passe `isEditing={true}` ou `isEditing={false}` à `TodoItem`

Créer dans `App` les 2 variables suivantes :

```
const todos = [
  { _id: 'abcdef1234', title: 'ABC', completed: false },
  { _id: 'dngudtub45', title: 'DEF', completed: true },
  { _id: 'dfgfg35335', title: 'XYZ', completed: false },
];
const editingId = 'dfgfg35335';
```

Transformer le JSX de `App` pour qu'il dépende de ces variables

## Event et State

Modifier `App` de sorte à ce que `todos` soit défini dans le state (avec `useState`)

Créer un nouveau state `newTodo` avec la valeur saisie dans le champ (comme `UserForm`).

Au submit du formulaire utiliser `setTodos` pour ajouter un nouvel élement au tableau en utilisant la syntaxe suivante :

```
setTodos(
  [
    ...todos,
    { /*  la nouvelle todo avec _id (Math.random().toString()), title et completed  */ }
  ]
)
```