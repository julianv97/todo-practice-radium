import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: title,
      completed: false,
      id: Math.floor(Math.random() * 100),
    };
    addTodo(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New ToDo" value={title} onChange={(e) => handleChange(e)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
