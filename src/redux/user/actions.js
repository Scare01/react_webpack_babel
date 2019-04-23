import v4 from 'uuid';

import { ADD_TODO, DELETE_TODO } from './constants';

const addTodo = text => ({
  type: ADD_TODO,
  id: v4(),
  text
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

const actions = { addTodo, deleteTodo };

export default actions;
