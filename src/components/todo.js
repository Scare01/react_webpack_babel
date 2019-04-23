import React from 'react';

const Todo = ({ todo }) => (
  <div key={todo.id}>
    <h3>{todo.name}</h3>
  </div>
);

export default Todo;