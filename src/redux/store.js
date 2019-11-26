import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import inventoryReducer from './inventoryReducer';

export default createStore(inventoryReducer, applyMiddleware(promiseMiddleware));