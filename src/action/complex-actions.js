import * as CounterActions from './counter-action';
import * as TodoActions from './todo-action';
import { push } from 'react-router-redux';
import axios from 'axios';

axios.defaults.baseURL = 'http://train.integdev.com:9000';

export const getIntegApi = () => {
  return axios.get('/api');
};

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
  return (dispatch) => {
    dispatch(getIntegApi)
    .then((res) => {
      console.log(res);
      dispatch(doCrazy());
    });
  };
};
