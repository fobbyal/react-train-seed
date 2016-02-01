export const Actions = {
  INCREASE: 'Counter/Increase',
  DECREASE: 'Counter/Decrease',
  ADD: 'Counter/Add'
};

export const increase = (index) => {
  return { type: Actions.INCREASE, index };
};
export const decrease = (index) => {
  return { type: Actions.DECREASE, index };
};
export const add = () => {
  return { type: Actions.ADD };
};
