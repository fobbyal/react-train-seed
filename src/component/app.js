import React from 'react';
import Actions from '../action/app-actions'

export default class App extends React.Component {

  render(){
    return <h1 onClick={Actions.addItem}> Flux Shopping Example !!!</h1>;
  }
}
