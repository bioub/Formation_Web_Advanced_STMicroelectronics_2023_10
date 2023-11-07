import { FormEvent, useEffect, useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import { Todo } from './model';

function App() {
  // const [todos, setTodos] = useState([
  //   { _id: 'abcdef1234', title: 'ABC', completed: false },
  //   { _id: 'dngudtub45', title: 'DEF', completed: true },
  //   { _id: 'dfgfg35335', title: 'XYZ', completed: false },
  // ]);
  const [todos, setTodos] = useState<Todo[]>([]); // si le tableau est vide, il faut spécifier le type
  const [newTodo, setNewTodo] = useState('GHI');
  const editingId = 'dfgfg35335';

  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Todo[] = await res.json();
      setTodos(data);
    })();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodos([
      { _id: Math.random().toString(), title: newTodo, completed: false },
      ...todos,
    ]);
  }

  return (
    <div className="App">
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}  />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => <TodoItem key={todo._id} todo={todo} isEditing={todo._id === editingId} />)}
      </div>
    </div>
  );
}

export default App;
