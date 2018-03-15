import axios from 'axios';
import { GET_CART, CHANGE_AMOUNT, PRODUCT_TO_CART } from '../constants';
import store from '../store';
import CircularJson from 'circular-json';

export const getCart = cart => ({
  type: GET_CART,
  cart,
});

export const changeAmount = (value, index) => ({
  type: CHANGE_AMOUNT,
  value,
  index,
});

export const postProductToOrder = product => ({
  type: PRODUCT_TO_CART,
  product,
});

export const addProductToCart = function(product, userId, index) {
  return function(dispatch) {
    if (userId) {
      axios
        .post('/api/orders', { productId: product.id, userId })
        .then(res => res.data)
        .then(() => {
          var orderDetail = 'orderDetail';
          product[orderDetail] = product;
          product[orderDetail].amount = 1;
          dispatch(postProductToOrder(product));
        });
    } else {
      const localCartString = localStorage.getItem('cart');
      const localCart = JSON.parse(localCartString);
      console.log(localCart);
      var orderDetail = 'orderDetail';
      product[orderDetail] = product;
      product[orderDetail].amount = 1;
      var cache = [];
      if (localCart) {
        localStorage.setItem(
          'cart',
          CircularJson.stringify([...localCart, product]),
        );
        // localStorage.setItem('cart', [
        //   ...localCart,
        //   JSON.stringify(product, function(key, value) {
        //     if (typeof value === 'object' && value !== null) {
        //       if (cache.indexOf(value) !== -1) {
        //         // Circular reference found, discard key
        //         return;
        //       }
        //       // Store value in our collection
        //       cache.push(value);
        //     }
        //     return value;
        //   }),
        // ]);
        // cache = null;
      } else {
        localStorage.setItem('cart', CircularJson.stringify([product]));

        // localStorage.setItem('cart', [
        //   product,
        //   JSON.stringify(product, function(key, value) {
        //     if (typeof value === 'object' && value !== null) {
        //       if (cache.indexOf(value) !== -1) {
        //         // Circular reference found, discard key
        //         return;
        //       }
        //       // Store value in our collection
        //       cache.push(value);
        //     }
        //     return value;
        //   }),
        // ]);
        cache = null;
      }
      dispatch(postProductToOrder(product));
    }
  };
};

// trae la orden de la base de da
export const fetchCart = function(userId) {
  return function(dispatch) {
    if (userId) {
      axios
        .get(`/api/orders/Uncreated/${userId}`)
        .then(res => res.data)
        .then(orderUncreated => dispatch(getCart(orderUncreated)));
    } else {
      var cart = store.getState().cart;
      var localCart = localStorage.getItem('cart');
      var carrito = JSON.parse(localCart);
      if (!carrito) {
        var carrrrrr = { products: [] };
      } else {
        var carrrrrr = { products: carrito };
      }
      dispatch(getCart(carrrrrr));
    }
  };
};
