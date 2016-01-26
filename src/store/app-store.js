import {register} from '../dispatcher/app-dispatcher'
import * as Constants from '../constants';
import { EventEmitter } from 'events';

const STORE_CHANGE = 'store-change';

let _catalog = [];

for ( let i = 1; i < 9; i++ ) {
  _catalog.push( {
          'id': 'Widget' + i,
          'title': 'Widget #' + i,
          'summary': 'A great widget',
          'description': 'Lorem ipsum dolor sit amet.',
          'cost': i
      } );
}

let _cartItems = [];

const _removeItem = ( item ) => {
    _cartItems.splice( _cartItems.findIndex( i => i === item ), 1 );
};

const _findCartItem = ( item ) => {
    return _cartItems.find( i => i.id === item.id )
};

const _increaseItem = ( item ) => item.qty++;

const _decreaseItem = ( item ) => {
    item.qty--;
    if ( item.qty === 0 ) {
            _removeItem( item )
        }
};

const _addItem = ( item ) => {
    const cartItem = _findCartItem( item );
    if ( !cartItem ) {
            _cartItems.push( Object.assign( {qty: 1}, item ) );
    }else {
      _increaseItem( cartItem );
    }
};

const _cartTotals = ( qty = 0, total = 0 ) => {
    _cartItems.forEach( cartItem  => {
            qty += cartItem.qty;
            total += cartItem.qty * cartItem.cost;
        } );
    return {qty, total};
};


export default const AppStore = Object.assign(EventEmitter.prototype,{
  emitChange(){
    this.emit(STORE_CHANGE);
  },
  addChangeListener(callback){
    this.on(STORE_CHANGE,callback);
  },
  removeChangeListener(callback){
    this.removeChangeListener(callback);
  },
  getCart(){
    return _cartItems;
  },
  getCatalog(){
    return _catalog.map(item => {
      return Object.assign( {}, item, _cartItems.find( cItem => cItem.id === item.id))
    })
  },
  getCartTotals(){
    return _cartTotals();
  },
  dispatchIndex: register((action)=> {
    switch(action.actionType){
      case Constants.ADD_ITEM:
        _addItem(action.item);
        break;
      case Constants.REMOVE_ITEM:
        _removeItem(action.item);
        break;
      case Constants.INCREASE_ITEM:
        _increaseItem(action.item);
        break;
      case Constants.DECREASE_ITEM:
        _decreaseItem(action.item);
        break;
    }

    AppStore.emitChange();
  })

});



