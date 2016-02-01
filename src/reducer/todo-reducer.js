
import { Actions } from '../action/todo-action';

export default (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      const todoText = action.txt.trim();
      return [...state, todoText];
    default:
      return state;

  }
};
