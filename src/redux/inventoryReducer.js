import axios from 'axios';

let initialState = {
    inventory: [],
    loading: false,
    errorMessage: ''
};

const GET_INVENTORY = 'GET_INVENTORY';

export function getInventory(){
    const inventory = axios.get('/api/inventory').then(res => res.data).catch(err => err.message);
    return {
        type: GET_INVENTORY,
        payload: inventory
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
        default:
            return state;
    }
}