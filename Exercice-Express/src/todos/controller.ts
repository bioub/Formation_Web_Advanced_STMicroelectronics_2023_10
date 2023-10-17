import { NextFunction, Request, Response } from 'express';
import {
  Todo,
} from './model-mongoose';


export async function listCtrl(req: Request, res: Response) {
  const todos = await Todo.find();
  res.json(todos);
}

export async function showCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todo = await Todo.findById(req.params.todoId);

  if (!todo) {
    return next();
  }

  res.json(todo);
}

export async function createCtrl(req: Request, res: Response) {
  const newTodo = await Todo.create(req.body);

  res.statusCode = 201;
  return res.json(newTodo);
}

export async function deleteCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todo = await Todo.findByIdAndRemove(req.params.todoId);

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
  const oldTodo = await Todo.findOneAndReplace({_id: req.params.todoId}, req.body);

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
  const oldTodo = await Todo.findByIdAndUpdate(req.params.todoId, req.body);

  if (!oldTodo) {
    return next();
  }

  res.json(oldTodo);
}
