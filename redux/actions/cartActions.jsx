export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const CLEAR_CART = "CLEAR_CART"

export const addToCart = (product, amount) => {
    return {type : ADD_ITEM, product : product, itemAmount : amount }
}

export const removeFromCart = (product) => {
    return {type : DELETE_ITEM, product : product}
}

export const clearCart = (product) => {
    return {type : CLEAR_CART}
}