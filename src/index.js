import React from 'react';
import ReactDom from 'react-dom';
import {createStore,combineReducers} from 'redux';

/** constants **/
const Actions = {
  ADD_TODO: 'Todo/ADD_TODO',
  INCREASE: 'Counter/Increase',
  DECREASE: 'Counter/Decrease',
  ADD: 'Counter/Add'
};

let todos = (state = [],action) => {
  switch(action.type) {
    case Actions.ADD_TODO:
      let todoText = action.txt.trim();
      return [...state,todoText];
  }
  return state;
}

let counters = (state = [],action) => {
  switch(action.type) {
    case Actions.DECREASE:
      return [...state.slice(0,action.index),
        state[action.index]-1,
        ...state.slice(action.index+1)
      ];
    case Actions.INCREASE:
      return [...state.slice(0,action.index),
        state[action.index]+1,
        ...state.slice(action.index+1)
      ];
    case Actions.ADD:
      return [...state,0];
  }
  return state;
}

const finalReducer = combineReducers({todos,counters});
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
    console.log(store.getState());
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



const Counter =({increase,decrease,count}) => {
    return (
      <div>
        <h1>{ count }</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    );
};


let increaseCount = (i) => {
  console.log('got incrase here with'+i);
  store.dispatch({type:Actions.INCREASE,index:i});
}

let decreaseCount = (i) => {
  console.log('got decrase here with'+i);
  store.dispatch({type:Actions.DECREASE,index:i});
}

let addCounter = () => {
  store.dispatch({type:Actions.ADD});
}

class CounterManager extends React.Component {

  constructor(){
    super();
    this.state = {counters: store.getState().counters};
  }

  componentWillMount(){
    this.removeListener=store.subscribe(()=>this.setState({counters: store.getState().counters}));
  }

  componentWillUnMount(){
    this.removeListener();
  }
  render() {
    let counters = this.state.counters.map(
      (c,i) => {
        return <Counter 
              key={i}
              increase = {increaseCount.bind(null,i)}  
              decrease = {decreaseCount.bind(null,i)}
              count = {c}
              />
      }
    )
    return (
      <div>
        <button onClick={addCounter}>Add Counter</button>
        {counters}
      </div>
    )
  }


}


const App = ()=> {
  return (
    <div>
      <Todo/>
      <CounterManager/>
    </div>

  );
}


ReactDom.render(<App />,document.getElementById('app'));
