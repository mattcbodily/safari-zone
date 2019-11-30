import axios from 'axios';

let initialState = {
    inventory: [],
    loading: false,
    errorMessage: ''
};

const GET_INVENTORY = 'GET_INVENTORY';
const USE_ITEM = 'USE_ITEM';

export function getInventory(){
    const inventory = axios.get('/api/inventory').then(res => res.data).catch(err => err.message);
    return {
        type: GET_INVENTORY,
        payload: inventory
    }
}

export function useItem(inventoryObj){
    return {
        type: USE_ITEM,
        payload: inventoryObj
    }
}

export default function inventoryReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_INVENTORY + '_PENDING':
            return {...state, loading: true};
        case GET_INVENTORY + '_FULFILLED':
            return {...state, inventory: payload, loading: false};
        case GET_INVENTORY + '_REJECTED':
            return {...state, errorMessage: payload};
        case USE_ITEM:
            //adjust this to find and remove the used item from state
            return state;
        default:
            return state;
    }
}