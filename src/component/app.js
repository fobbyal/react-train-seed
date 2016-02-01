import React from 'react';
import Todo from './todo/todo';
import CounterManager from './counter/counter-manager';


export default () => {
  return (
    <div>
      <Todo/>
      <CounterManager/>
    </div>
  );
};
