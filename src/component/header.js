import React from 'react';
import CartSummary from './cart-summary';

export default () => {

  let styles = {borderBottom: '1px solid #ccc'};

  return (
      <div className="row" style={styles}>
          <div className="col-sm-2"><h1>Store</h1></div>
          <div className="col-sm-10 text-right">
              <CartSummary />
          </div>
      </div>
  );
}
