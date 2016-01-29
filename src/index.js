import React from 'react';
import ReactDom from 'react-dom';
import {createStore,combineReducers} from 'redux';

/** constants **/
const Actions = {
  ADD_TODO: 'Todo/ADD_TODO',
  INCREASE: 'Counter/Increase',
  DECREASE: 'Counter/Decrease'
};

let todos = (state = [],action) => {
  switch(action.type) {
    case Actions.ADD_TODO:
      let todoText = action.txt.trim();
      return [...state,todoText];
  }
  return state;
}

let counter = (state = 0,action) => {
  switch(action.type) {
    case Actions.DECREASE:
      return state-1;
    case Actions.INCREASE:
      return state+1;
  }
  return state;
}

const finalReducer = combineReducers({todos,counter});
const store = createStore(finalReducer);

/** actions **/
let addTodo = (txt) =>{
  store.dispatch({type:Actions.ADD_TODO,txt});
}


class Todo extends React.Component {
  constructor(){
    super();
    this.state = {todos: store.getState().todos};
  }

  componentWillMount(){
    this.removeListener=store.subscribe(()=>this.setState({todos: store.getState().todos}));
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


let increaseCount = () => {
  store.dispatch({type:Actions.INCREASE});
}

let decreaseCount = () => {
  store.dispatch({type:Actions.DECREASE});
}

class Counter extends React.Component {

  constructor(){
    super();
    this.state = {count: store.getState().counter};
  }

  componentWillMount(){
    this.removeListener=store.subscribe(()=>this.setState({count: store.getState().counter}));
  }

  componentWillUnMount(){
    this.removeListener();
  }

  render(){
    return (
      <div>
        <h1>{ this.state.count }</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    );
  }


}


const App = ()=> {
  return (
    <div>
      <Todo/>
      <Counter/>
    </div>

  );
}


ReactDom.render(<App />,document.getElementById('app'));
