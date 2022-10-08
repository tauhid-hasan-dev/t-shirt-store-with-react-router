import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({cart}) => {
    
    return (
        <div>
            <p>Product quantity: {cart.length} </p>
            {
                cart.map(tshirt => <CartProduct tshirt = {tshirt}></CartProduct>)
            }
        </div>
    );
};

export default Cart;