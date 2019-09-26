import { combineReducers } from 'redux';
import currentAqiReducer from './current';

const rootReducer = combineReducers({
  current: currentAqiReducer
});

export default rootReducer;
