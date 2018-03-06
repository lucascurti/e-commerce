import React from 'react'
import store from '../store';
import { connect } from 'react-redux'
import { changeAmount } from '../action-creator/cart'
import Cart from '../components/Cart'


function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeAmount: function (e, index) { dispatch(changeAmount(e, index)) }
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer