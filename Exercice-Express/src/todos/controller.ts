import { NextFunction, Request, Response } from 'express';
import { Todo } from './model-mongoose';

export async function listCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const todos = await Todo.find({}, 'title completed');
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

export async function showCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const todo = await Todo.findById(req.params.todoId, 'title completed');

    if (!todo) {
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function createCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newTodo = await Todo.create(req.body);
    res.statusCode = 201;
    return res.json(newTodo);
  } catch (err) {
    next(err);
  }
}

export async function deleteCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.todoId);

    if (!todo) {
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function replaceCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const oldTodo = await Todo.findOneAndReplace(
      { _id: req.params.todoId },
      req.body,
    );

    if (!oldTodo) {
      return next();
    }

    res.json(oldTodo);
  } catch (err) {
    next(err);
  }
}

export async function updateCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const oldTodo = await Todo.findByIdAndUpdate(req.params.todoId, req.body);

    if (!oldTodo) {
      return next();
    }

    res.json(oldTodo);
  } catch (err) {
    next(err);
  }
}
