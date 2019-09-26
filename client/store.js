import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
// import { createLogger } from 'redux-logger'; // note: may cause perfomance issues in react native
import thunkMiddleware from 'redux-thunk';


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
