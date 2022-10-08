import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({cart, handleDeleteItem}) => {
    
    return (
        <div>
            <p className='text-2xl font-bold'>Product quantity: {cart.length} </p>
           <div className='flex flex-col gap-5'>
                {
                    cart.map(tshirt => <CartProduct tshirt = {tshirt} handleDeleteItem = {handleDeleteItem}></CartProduct>)
                }
           </div>
        </div>
    );
};

export default Cart;