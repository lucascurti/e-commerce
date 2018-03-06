import { GET_CART, CHANGE_AMOUNT } from '../constants';
import store from '../store';

export const getCart = (cart) => ({
    type: GET_CART,
    cart,
});

export const changeAmount = (value, index) => ({
    type: CHANGE_AMOUNT,
    value,
    index,
})

export const fetchCart = () => dispatch => dispatch(getCart({ products: [{ id: 1, name: 'ayudin', price: 20, amount: 1 }, { id: 2, name: 'ala', price: 30, amount: 1 }] }));
