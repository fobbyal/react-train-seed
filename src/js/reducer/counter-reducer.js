import { Actions } from '../action/counter-action';

export default (state = [], action) => {
  switch (action.type) {
  case Actions.DECREASE:
    return [...state.slice(0, action.index),
        state[action.index] - 1,
        ...state.slice(action.index + 1)
      ];
  case Actions.INCREASE:
    return [...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1)
      ];
  case Actions.ADD:
    return [...state, 0];
  default:
    return state;
  }
};
