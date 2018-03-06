import React from 'react';
import './Cart.css';

export default ({ cart, changeAmount, amount }) => {
    console.log(cart)
    return (
        <div className="container">
            <table id="cart" className="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th style={{ width: '50%' }}>Product</th>
                        <th style={{ width: '10%' }}>Price</th>
                        <th style={{ width: '8%' }}>Quantity</th>
                        <th style={{ width: '22%' }} className="text-center">Subtotal</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.products.map((product, index) => (
                        <tr>
                            <td data-th="Product">
                                <div className="row">
                                    <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
                                    <div className="col-sm-10">
                                        <h4 className="nomargin">{product.name}</h4>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">{product.price}</td>
                            <td data-th="Quantity">
                                <input type="number" className="form-control text-center" value={product.amount} onChange={(e) => changeAmount(Number(e.target.value), index)} id='amount' />
                            </td>
                            <td data-th="Subtotal" className="text-center">{product.price * product.amount}</td>
                            <td className="actions" data-th="">
                                <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>

                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                        <td colSpan="2" className="hidden-xs"></td>
                        <td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
                        <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}