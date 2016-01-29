import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

/** constants **/
const Actions = {
  ADD_TODO: 'ADD_TODO'
};

let todoReducer = (state = [],action) => {
  switch(action.type) {
    case Actions.ADD_TODO:
      let todoText = action.txt.trim();
      return [...state,todoText];
  }
  return state;
}

const store = createStore(todoReducer);

/** actions **/
let addTodo = (txt) =>{
  store.dispatch({type:Actions.ADD_TODO,txt});
}


class Todo extends React.Component {
  constructor(){
    super();
    this.state = {todos: store.getState()};
  }

  componentWillMount(){
    this.removeListener=store.subscribe(()=>this.setState({todos: store.getState()}));
  }

  componentWillUnMount(){
    this.removeListener();
  }

  render(){
    let todos = this.state.todos.map((t)=>{
      return <li key={t}>{t}</li>
    });
    return (
      <div>
        <input ref={(n)=>{this.inp=n}} type="text"/>
        <button onClick={()=>addTodo(this.inp.value)}>add Todo</button>
        {todos}
      </div>
    )
  }
}


ReactDom.render(<Todo />,document.getElementById('app'));
