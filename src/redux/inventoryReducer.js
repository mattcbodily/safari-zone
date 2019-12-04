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
            let copyInv = state.inventory.slice()
            let usedItem = copyInv.findIndex(item => item.name === payload);
            copyInv[usedItem] = copyInv[usedItem] - 1;
            if(copyInv[usedItem].qty === 0){
                copyInv.splice(usedItem, 1);
            }
            return {...state, inventory: copyInv};
        default:
            return state;
    }
}