import TodoSpanValue from './TodoSpanValue';
import styles from './TodoItem.module.css';
import { ReactNode } from 'react';
import { Todo } from './model';
import TodoInputValue from './TodoInputValue';

type Props = {
  todo: Todo;
  isEditing?: boolean;
};

function TodoItem({ todo, isEditing = false }: Props): ReactNode {
  return (
    <div className={styles.TodoItem} data-todo-id={todo._id}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed} />
      {isEditing ? <TodoInputValue value={todo.title} /> : <TodoSpanValue value={todo.title} />}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
