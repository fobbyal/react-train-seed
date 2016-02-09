/* eslint-disable no-console */
import * as CounterActions from './counter-action';
import * as TodoActions from './todo-action';
import { push } from 'react-router-redux';
import { getAllApps } from '../server-api/integ-apps';

export const doCrazy = () => {
  return (dispatch) => {
    dispatch(push('/counters'));
    dispatch(CounterActions.add());
    dispatch(CounterActions.add());
    dispatch(CounterActions.add());
    return dispatch(CounterActions.add());
  };
};

export const evenCrazier = () => {
  return (dispatch, getState) => {
    dispatch(getAllApps)
    .then((res) => {
      console.log(res);
      dispatch(doCrazy());
      const l = getState().counters.length;
      dispatch(TodoActions.add(`clear up ${l} counters`));
      dispatch(push('/'));
    });
  };
};
