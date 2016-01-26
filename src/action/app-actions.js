import * as Constants from '../constants';
import {dispatch} from '../dispatcher/app-dispatcher';

export default {
  addItem(item) {
    dispatch({ actionType: Constants.ADD_ITEM, item });
  },
  removeItem(item) {
    dispatch({ actionType: Constants.REMOVE_ITEM, item });
  },
  incraseItem(item) {
    dispatch({ actionType: Constants.INCREASE_ITEM, item });
  },
  decreaseItem(item) {
    dispatch({ actionType: Constants.DECREASE_ITEM, item });
  }
};
