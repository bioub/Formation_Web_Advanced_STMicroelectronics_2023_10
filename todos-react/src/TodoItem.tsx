import TodoSpanValue from "./TodoSpanValue";
import styles from './TodoItem.module.css'
import { ReactNode } from "react";

function TodoItem(): ReactNode {
  return (
    <div className={styles.TodoItem} data-todo-id="123">
      <input type="checkbox" className="todosCompleted" checked={true} />
      <TodoSpanValue />
      <button className="todosDeleteBtn">-</button>
    </div>
  )
}

export default TodoItem;