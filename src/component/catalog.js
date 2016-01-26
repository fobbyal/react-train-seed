import React from 'react';
import AppStore from '../store/app-store';
import CatalogItem from './app-catalogitem';

class Catalog extends React.Component {
  constructor(){
    super();
    this.state = {items:AppStore.getCatalog()};
  }

  render(){
    let items = this.state.items.map( item => {
      return <CatalogItem key={ item.id } item={ item } />
    });
    return (
      <div className="row">
        { items }
      </div>
    )
  }
}
export default Catalog;
