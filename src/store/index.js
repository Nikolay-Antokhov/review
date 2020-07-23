import { createStore, applyMiddleware } from 'redux';
import reducers from './../reducers';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = ( process.env.NODE_ENV !== 'production' )
  // ? applyMiddleware(logger, thunk)(createStore)(reducers)
  ? applyMiddleware(thunk)(createStore)(reducers)
  : applyMiddleware(thunk)(createStore)(reducers);

export default store;
