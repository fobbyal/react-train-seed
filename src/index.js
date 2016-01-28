import React from 'react';
import ReactDom from 'react-dom';
import {Dispatcher} from 'flux';
import {EventEmitter} from 'events';


const Actions = {
  ADD_TODO: 'ADD_TODO'
};

const _todos = [];

const AppDispatcher = new Dispatcher();

const TODO_CHANGE = 'TODO_CHANGE';

let TodoStore = Object.assign({},EventEmitter.prototype,{
  emitChange(){
    this.emit(TODO_CHANGE);
  },
  addChangeListener(cb){
    this.on(TODO_CHANGE,cb);
  },
  removeChangeListener(cb){
    this.removeListener(TODO_CHANGE,cb);
  },
  getTodos(){
    return _todos;
  }
})


AppDispatcher.register((action) => {
  switch(action.type) {
    case Actions.ADD_TODO:
      let todoText = action.txt.trim();
      _todos.push(todoText);
  }
  TodoStore.emitChange();
});


let addTodo = (txt) =>{
  AppDispatcher.dispatch({type:Actions.ADD_TODO,txt});
}


class Todo extends React.Component {

  constructor(){
    super();
    this.state = {todos: TodoStore.getTodos()};
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    TodoStore.addChangeListener( this._onChange )
  }
  componentWillUnmount(){
    TodoStore.removeChangeListener( this._onChange )
  }
  _onChange(){
    this.setState({todos: TodoStore.getTodos()});
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
