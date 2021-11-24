import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Learn about React',
      id: Math.floor(Math.random() * 100),
    }
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} />;
      })}
    </div>
  );
}

export default App;
