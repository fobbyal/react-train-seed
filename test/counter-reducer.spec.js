/* eslint-env mocha */
import counterReducer from '../src/reducer/counter-reducer';
import * as Actions from '../src/action/counter-action';
import { expect } from 'chai';

describe('Counter Reducer', () => {

  it('Should have new counter after add aciton', () => {
    const state = counterReducer(undefined, Actions.add());
    expect(state).to.deep.equal([0]);
  });

  it('Should have incrased counter at index 0',()=>{
    const state = counterReducer([0],Actions.increase(0));
    expect(state).to.deep.equal([1]);
  });

  it('Should have incrased counter at index 2',()=>{
    const state = counterReducer([0,1,3],Actions.decrease(2));
    expect(state).to.deep.equal([0,1,2]);
  });

});
