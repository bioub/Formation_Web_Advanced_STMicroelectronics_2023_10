import './App.css';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="App">
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        <TodoItem todo={{ _id: 'abcdef1234', title: 'ABC', completed: false }} />
        <TodoItem todo={{ _id: 'dngudtub45', title: 'DEF', completed: true }} />
        <TodoItem todo={{ _id: 'dfgfg35335', title: 'XYZ', completed: false }} />
      </div>
    </div>
  );
}

export default App;
