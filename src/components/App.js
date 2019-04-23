import React from 'react';

import '../styles/App.css';

import Header from './Header';
import CreateForm from './createTodo';
import TodosList from './todosList';

const App = () => (
  <div>
    <Header />
    <CreateForm />
    <TodosList />
  </div>
);

export default App;
