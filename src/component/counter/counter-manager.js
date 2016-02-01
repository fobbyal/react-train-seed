import { connect } from 'react-redux';
import Counter from './counter';
import React from 'react';
import * as CounterAction from '../../action/counter-action';

export const CounterManager = ({ counters, addCounter }) => {
  const countersRender = counters.map(
      (c, i) => {
        return (<Counter key={i} count = {c} index={i}/>);
      }
    );
  return (
      <div>
        <button onClick={addCounter}>Add Counter</button>
        <div>{countersRender}</div>
      </div>
    );
};

export default connect(
  (state) => {return { counters: state.counters };},
  (dispatch) => {
    return { addCounter: () => {
      dispatch(CounterAction.add());
    }
  };}
 )(CounterManager);
