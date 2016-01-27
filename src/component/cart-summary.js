import React from 'react';
import AppStore from  '../store/app-store';
import StoreWatchMixin from './store-aware-component';
import { Link } from 'react-router';

const CartSummary = ( props ) => {
  return (
      <div style={{paddingTop: 15}}>
        <Link to="/cart" className="btn btn-success">
          { `Cart Items: ${props.qty} / $${props.total}` }
        </Link>
      </div>
    );
}

export default StoreWatchMixin( CartSummary, AppStore.getCartTotals);
