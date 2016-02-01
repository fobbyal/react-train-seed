import React from 'react';
import { connect } from 'react-redux';
import * as CounterAction from '../../action/counter-action';

export const Counter = ({ increase, decrease, count }) => {
  return (
      <div style={{ display: 'inline-block' }}>
        <h1>{ count }</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    );
};

export default connect(
  null, (dispatch, { index }) => {
    return {
      increase: () => dispatch(CounterAction.increase(index)),
      decrease: () => dispatch(CounterAction.decrease(index))
    };
  }
)(Counter);
