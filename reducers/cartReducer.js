import * as action from './actionTypes'

const cartReducer = (state, { type, payload }) => {
    switch (type) {

    case action.ITEM_ADDED:
        return { ...state, cartItems: [...state.cartItems, {id: payload.id, quantity: 1}] }

    case action.ITEM_REMOVED:
        const updatedCart = state.cartItems.filter( item => (item.id!==payload.id)  );
        return { ...state, cartItems: updatedCart }

    case action.QUANTITY_INCREMENT:
        
        if (state.cartItems.find(item => item.id===payload.id)) {
            const updatedCart = state.cartItems.map( item => (
                (item.id===payload.id) ? {...item, quantity: item.quantity+1} : item
            ));

            return { ...state, cartItems: [...updatedCart] }
        }

        return state;

    case action.QUANTITY_DECREMENT:
        const existingItem = state.cartItems.find(item => item.id===payload.id);
        if (existingItem && existingItem.quantity > 1) {
            const updatedCart = state.cartItems.map( item => (
                (item.id===payload.id) ? {...item, quantity: item.quantity-1} : item
            ));

            return { ...state, cartItems: [...updatedCart] }
        }
        else if (existingItem) {
            const updatedCart = state.cartItems.filter( item => (item.id!==payload.id)  );
            return { ...state, cartItems: updatedCart }
        }

        return state;
        
    default:
        return state;
    }
}

export default cartReducer;
