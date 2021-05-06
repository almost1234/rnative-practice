import {ADD_ITEM, DELETE_ITEM,CLEAR_CART} from '../actions/cartActions'

const initialState = {
    cart: []
}

//todo maybe add some unique identifier area for the add item and delete item
export default (state = initialState, action)=> {
    console.log(state);
    switch(action.type){
        case ADD_ITEM:
            const added = {...action.product, amount : action.itemAmount}
            const altered = state.cart;
            altered.push(added)
            console.log(altered);
            return {
                cart: altered
            };
        case DELETE_ITEM:
            console.log(action.product);
            const remove = state.cart.filter(value => value != action.product)
            return{
                cart : remove
            };
        case CLEAR_CART:
            return{
                cart: []
            };
        default:
            return initialState;
    }
}