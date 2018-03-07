import axios from 'axios'
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

// trae la orden de la base de datos 
export const fetchCart = () => dispatch =>
    axios.get('/api/orders/Uncreated')
        .then(res => res.data)
        .then(orderUncreated => dispatch(getCart(orderUncreated)));