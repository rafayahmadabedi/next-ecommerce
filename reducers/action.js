import * as actionTypes from './actionTypes';

export const ITEM_ADDED = (product) => {
    return {
        type: actionTypes.ITEM_ADDED,
        payload: {
            id: product.id
        }
    }
}

export const ITEM_REMOVED = (product) => {
    return {
        type: actionTypes.ITEM_REMOVED,
        payload: {
            id: product.id
        }
    }
}

export const QUANTITY_INCREMENT = (product) => {
    return {
        type: actionTypes.QUANTITY_INCREMENT,
        payload: {
            id: product.id
        }
    }
}

export const QUANTITY_DECREMENT = (product) => {
    return {
        type: actionTypes.QUANTITY_DECREMENT,
        payload: {
            id: product.id
        }
    }
}