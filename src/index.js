import React from 'react';
import ReactDom from 'react-dom';


class InputComp extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <input ref="inp" onChange={this.props.updateHandler} type={this.props.inpType} />
    );
  }
}

class MockApp extends React.Component{
  constructor(){
    super();
    this.state = {first:'Alex',middle:'Midlle',last:'last'};
    this.customUpdate = this.customUpdate.bind(this);
  }

  customUpdate(e) {
    console.log(e.target.value);
    this.setState({
      first: this.refs.f.refs.inp.value,
      middle: this.refs.m.refs.inp.value,
      last: this.refs.l.refs.inp.value,
    });
  }

  render(){
    return (
    <div>
      <h1>{this.state.first} {this.state.middle} {this.state.last}</h1>
      <InputComp ref="f" txt={this.state.txt} updateHandler={this.customUpdate} inpType="text" />
      <InputComp ref="m" txt={this.state.txt} updateHandler={this.customUpdate} inpType="range"/>
      <InputComp ref="l" txt={this.state.txt} updateHandler={this.customUpdate} inpType="text"/>
    </div>);
  
  }
}





ReactDom.render(<MockApp />, document.getElementById('app'));
