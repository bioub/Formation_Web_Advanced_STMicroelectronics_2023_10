import { NextFunction, Request, Response } from 'express';
import {
  Todo,
  TodoDto,
  create,
  find,
  findById,
  findByIdAndRemove,
  findByIdAndReplace,
  findByIdAndUpdate,
} from './model';

export async function listCtrl(req: Request, res: Response) {
  const todos = await find();
  res.json(todos);
}

export async function showCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todo = await findById(req.params.todoId);

  if (!todo) {
    return next();
  }

  res.json(todo);
}

export async function createCtrl(req: Request, res: Response) {
  const todo: TodoDto = Todo.parse(req.body);

  // Ajouter au tableau
  const newTodo = await create(todo);

  res.statusCode = 201;
  return res.json(newTodo);
}

export async function deleteCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todo = await findByIdAndRemove(req.params.todoId);

  if (!todo) {
    return next();
  }

  res.json(todo);
}

export async function replaceCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todo: TodoDto = Todo.parse(req.body);
  const oldTodo = await findByIdAndReplace(req.params.todoId, todo);

  if (!oldTodo) {
    return next();
  }

  res.json(oldTodo);
}

export async function updateCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todo: TodoDto = Todo.parse(req.body);
  const oldTodo = await findByIdAndUpdate(req.params.todoId, todo);

  if (!oldTodo) {
    return next();
  }

  res.json(oldTodo);
}
