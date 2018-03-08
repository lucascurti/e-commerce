import { GET_CART, CHANGE_AMOUNT } from '../constants';

const initialState = {
    product: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return action.cart;
        case CHANGE_AMOUNT:
            const prod = state.product.slice()
            const st = Object.assign({}, state, { product: prod })
            st.product[action.index].amount = action.value
            return st
        default:
            return state;
    }
}