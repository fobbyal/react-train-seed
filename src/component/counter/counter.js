import React from 'react';
import { connect } from 'react-redux';
import * as CounterAction from '../../action/counter-action';

export const Counter = ({ increase, decrease, count, index }) => {
  return (
      <div style={{ display: 'inline-block' }}>
        <h1>{ count }</h1>
        <button onClick={increase(index)}>+</button>
        <button onClick={decrease(index)}>-</button>
      </div>
    );
};

export default connect(
  null, (dispatch) => {
    return {
      increase: (index) => {
        return () => dispatch(CounterAction.increase(index));
      },
      decrease: (index) => {
        return () => dispatch(CounterAction.decrease(index));
      }
    };
  }
)(Counter);
