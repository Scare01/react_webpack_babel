import actions from './actions';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = [];

const addTodo = (state = INITIAL_STATE, action) => {
  return [
    ...state,
    {
      id: action.id,
      text: action.text
    }
  ]
};

const deleteTodo = (state = INITIAL_STATE, action) => {
  return state.filter(todo => todo.id !== action.id);
};

const HANDLERS = {
  [actions.addTodo]: addTodo,
  [actions.deleteTodo]: deleteTodo
};

export default createReducer(INITIAL_STATE, HANDLERS);


