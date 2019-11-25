import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import pokeReducer from './reducers/pokeReducer';
import inventoryReducer from './reducers/inventoryReducer';

const rootReducer = combineReducers({
    pokeReducer,
    inventoryReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));