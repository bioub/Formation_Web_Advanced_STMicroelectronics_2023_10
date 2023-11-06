import './App.css';
import TodoItem from './TodoItem';

function App() {
  const todos = [
    { _id: 'abcdef1234', title: 'ABC', completed: false },
    { _id: 'dngudtub45', title: 'DEF', completed: true },
    { _id: 'dfgfg35335', title: 'XYZ', completed: false },
  ];
  const editingId = 'dfgfg35335';

  return (
    <div className="App">
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => <TodoItem key={todo._id} todo={todo} isEditing={todo._id === editingId} />)}
      </div>
    </div>
  );
}

export default App;
