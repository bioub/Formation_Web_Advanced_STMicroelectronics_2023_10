import z from 'zod';

export const Todo = z.object({
  title: z.string(),
  completed: z.boolean().optional(),
});

export type TodoDto = z.infer<typeof Todo>;
export type Todo = TodoDto & { id: number };

export const todos: Todo[] = [
  { id: 1, title: 'ABC', completed: false },
  { id: 2, title: 'DEF', completed: true },
];

export function nextId(): number {
  return (
    todos.reduce((maxId, todo) => (todo.id > maxId ? todo.id : maxId), 0) + 1
  );
}

export async function find(): Promise<Todo[]> {
  return todos;
}

export async function findById(id: string): Promise<Todo | undefined> {
  return todos.find((todo) => todo.id === Number(id));
}

export async function create(todo: TodoDto): Promise<Todo> {
  const newTodo = { id: nextId(), ...todo };
  todos.push(newTodo);
  return newTodo;
}

export async function findByIdAndRemove(id: string): Promise<Todo | undefined> {
  const oldTodo = await findById(id);

  if (!oldTodo) {
    return;
  }

  const index = todos.indexOf(oldTodo);
  todos.splice(index, 1);

  return oldTodo;
}

export async function findByIdAndReplace(
  id: string,
  todo: TodoDto
): Promise<Todo | undefined> {
  const oldTodo = await findById(id);

  if (!oldTodo) {
    return;
  }

  const index = todos.indexOf(oldTodo);
  const newTodo: Todo = { id: todos[index].id, ...todo };
  todos[index] = newTodo;

  return oldTodo;
}

export async function findByIdAndUpdate(
  id: string,
  todo: TodoDto
): Promise<Todo | undefined> {
  const oldTodo = await findById(id);

  if (!oldTodo) {
    return;
  }

  const index = todos.indexOf(oldTodo);
  const newTodo: Todo = { ...oldTodo, ...todo };
  todos[index] = newTodo;

  return oldTodo;
}
