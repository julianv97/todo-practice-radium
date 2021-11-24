import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Learn about React',
      completed: false,
      id: Math.floor(Math.random() * 100),
    },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} />;
      })}
    </div>
  );
}

export default App;
