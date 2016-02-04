/* eslint-env mocha */
import counterReducer from '../src/reducer/counter-reducer';
import * as Actions from '../src/action/counter-action';
import { expect } from 'chai';

describe('Counter Reducer', () => {
  let state = counterReducer(undefined, Actions.add());
  it('Should be [0] after add aciton', () => {
    expect(state).to.deep.equal([0]);
  });

});
