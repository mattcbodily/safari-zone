import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import inventoryReducer from './reducers/inventoryReducer';

export default createStore(inventoryReducer, applyMiddleware(promiseMiddleware));