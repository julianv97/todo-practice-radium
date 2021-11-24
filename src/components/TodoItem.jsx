import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
