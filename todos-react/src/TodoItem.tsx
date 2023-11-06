import TodoSpanValue from "./TodoSpanValue";
import styles from './TodoItem.module.css'
import { ReactNode } from "react";
import { Todo } from "./model";

type Props = {
  todo: Todo;
}

function TodoItem({ todo }: Props): ReactNode {
  return (
    <div className={styles.TodoItem} data-todo-id={todo._id}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed} />
      <TodoSpanValue value={todo.title} />
      <button className="todosDeleteBtn">-</button>
    </div>
  )
}

export default TodoItem;