import express, { NextFunction, Request, Response } from 'express';
import { ZodError, z } from 'zod';

const Todo = z.object({
  title: z.string(),
  completed: z.boolean().optional(),
});

type TodoDto = z.infer<typeof Todo>;
type Todo = TodoDto & { id: number };

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
  const todo: TodoDto = Todo.parse(req.body);

  // Ajouter au tableau
  const newTodo = { id: nextId(), ...todo };
  todos.push(newTodo);

  res.statusCode = 201;
  return res.json(newTodo);
});

app.delete('/api/todos/:todoId', (req, res) => {
  const todo = todos.find((todo) => todo.id === Number(req.params.todoId));

  if (!todo) {
    res.statusCode = 404;
    return res.json({
      msg: 'Todo not found',
    });
  }

  // Suppression du tableau
  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  res.json(todo);
});

app.put('/api/todos/:todoId', express.json(), (req, res) => {
  const todo: TodoDto = Todo.parse(req.body);
  const oldTodo = todos.find((todo) => todo.id === Number(req.params.todoId));

  if (!oldTodo) {
    res.statusCode = 404;
    return res.json({
      msg: 'Todo not found',
    });
  }

  // Remplacement dans le tableau
  const index = todos.indexOf(oldTodo);
  const newTodo: Todo = { id: todos[index].id, ...todo };
  todos[index] = newTodo;


  res.json(oldTodo);
});

app.patch('/api/todos/:todoId', express.json(), (req, res) => {
  const todo: TodoDto = Todo.parse(req.body);
  const oldTodo = todos.find((todo) => todo.id === Number(req.params.todoId));

  if (!oldTodo) {
    res.statusCode = 404;
    return res.json({
      msg: 'Todo not found',
    });
  }

  // Mise à jour dans le tableau
  const index = todos.indexOf(oldTodo);
  const newTodo: Todo = { ...oldTodo, ...todo };
  todos[index] = newTodo;


  res.json(oldTodo);
});

app.use(((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    res.statusCode = 400;
    return res.json({
      err: err,
    });
  }

  res.statusCode = 500;
  res.json({
    err: err,
  })
}) as any);

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
