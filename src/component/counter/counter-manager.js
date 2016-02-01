import { connect } from 'react-redux';
import Counter from './counter';
import React from 'react';
import * as CounterAction from '../../action/counter-action';

export const CounterManager = ({ counters, addCounter }) => {
  const countersRender = counters.map(
      (c, i) => (<Counter key={i} count = {c} index={i}/>)
    );

  return (
      <div>
        <button onClick={addCounter}>Add Counter</button>
        <div>{countersRender}</div>
      </div>
    );
};

export default connect(
  (state) => ({ counters: state.counters }),
  (dispatch) => ({ addCounter: () => dispatch(CounterAction.add()) })
 )(CounterManager);
