import { Schema, model } from "mongoose";

interface Todo {
  title: string;
  completed?: boolean;
}

const todoSchema = new Schema<Todo>({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  completed: {
    type: Boolean,
  },
});

export const Todo = model<Todo>('Todo', todoSchema);

