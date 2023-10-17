import express from 'express';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: 'ABC', completed: false },
  { id: 2, title: 'DEF', completed: true },
];

function nextId() {
  return todos.reduce((maxId, todo) => (todo.id > maxId) ? todo.id : maxId, 0) + 1;
}

const app = express();

// API REST : un API distant (contrairement à une classe
// qui est un API local)
// accessible via un simple client HTTP (fetch, axios... en JS)
// Convention d'URL : RESTful
// pour les API orientés données (à la différence de traitement comme
// le geocodage ou conversion de devise)
// GET /api/todos
// GET /api/todos/:todoId
// POST /api/todos
// DELETE /api/todos/:todoId
// PUT /api/todos/:todoId
// PATCH /api/todos/:todoId

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.get('/api/todos/:todoId', (req, res) => {
  const todo = todos.find((todo) => todo.id === Number(req.params.todoId));

  if (!todo) {
    res.statusCode = 404;
    return res.json({
      msg: 'Todo not found',
    });
  }

  res.json(todo);
});

// app.post<'/api/todos', undefined, undefined, Omit<Todo, 'id'>>('/api/todos', express.json(), (req, res) => {
app.post('/api/todos', express.json(), (req, res) => {
  const todo: Omit<Todo, 'id'> = req.body;
  const newTodo = { id: nextId(), ...todo };
  todos.push(newTodo);

  res.statusCode = 201;
  return res.json(newTodo);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
