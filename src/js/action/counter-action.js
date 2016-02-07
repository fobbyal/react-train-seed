export const Actions = {
  INCREASE: 'Counter/Increase',
  DECREASE: 'Counter/Decrease',
  ADD: 'Counter/Add'
};

export const increase = (index) => ({ type: Actions.INCREASE, index });
export const decrease = (index) => ({ type: Actions.DECREASE, index });
export const add = () => ({ type: Actions.ADD });
