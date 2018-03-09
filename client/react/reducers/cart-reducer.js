import { GET_CART, CHANGE_AMOUNT } from '../constants';

const initialState = {
    products: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return action.cart;
        case CHANGE_AMOUNT:
            const prod = state.products.slice()
            const st = Object.assign({}, state, { products: prod })
            st.products[action.index].orderDetail.amount = action.value
            return st
        default:
            return state;
    }
}