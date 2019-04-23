import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todos: state.todos
});

const TodosListObj = ({ todos }) => 
  todos ? 
  todos.map(todo => {
    return (
      <Todo todo={todo} />
    )
  }) : null;

const TodosList = connect(mapStateToProps)(TodosListObj);

export default TodosList;