import React from 'react';
import * as TodoAction from '../../action/todo-action';
import { connect } from 'react-redux';

export const Todo = ({ todos, addTodo }) => {
  const todoList = todos.map((t) => <li key={t}>{t}</li>);
  const comps = {};
  return (
      <div>
        <input ref={n => comps.inp = n} type="text"/>
        <button onClick={() => addTodo(comps.inp.value)}>add Todo</button>
        {todoList}
      </div>
    );
};

export default connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => ({ addTodo: (txt) => dispatch(TodoAction.add(txt)) })
)(Todo);
