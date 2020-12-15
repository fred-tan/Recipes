import { combineReducers } from 'redux';
import counter from './counter';
import recipes from './recipes';
import user from './user';
export default combineReducers({
  counter,
  recipes,
  user,
});
