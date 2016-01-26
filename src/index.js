import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import AppStore from './store/app-store';


class Comp extends React.Component {

  constructor(){
    super();
    this.state = {name:"Alex Liang", count:0}
  }

  componentWillMount(){
    console.log('will mount');
  }

  componentDidMount() {
    this.listener = () => {
      this.setState({ catalogs:AppStore.getCatalog()});
    };
    AppStore.addChangeListener(this.listener);
  }

  shouldComponentUpdate(nextProps,  nextState) {
    return nextState.count>5;
  }

  componentWillUpdate(nextProps, nextState)  {

  }

  componentDidUpdate(prevProps, prevState){

  }


  componentWillUnmount(){
    console.log('will un mount');
    AppStore.removeChangeListener(this.listener);
  }

  render(){
    return (
      <div> 
      <h1>hello World!! {this.state.name}</h1>
      <button onClick={()=>{
        this.setState({name:'Manan',count:this.state.count+1});
      }}>rerender</button>
      </div>
    );
  }
}


ReactDom.render(<Comp />, document.getElementById('app'));
