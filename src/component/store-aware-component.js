import React from 'react';
import AppStore from '../store/app-store';
import AppCartItem from './cart-item';


export default (OrginComponent, callback)  => class extends React.Component {

  constructor(props){
    super(props);
    this.state = callback(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    AppStore.addChangeListener( this._onChange );
  }

  componentWillUnmount(){
    AppStore.removeChangeListener( this._onChange );
  }

  _onChange(){
    this.setState( callback(this.props) );
  }


  render() {
    return <OrginComponent {...this.state} {...this.props}  /> 
  }


}




