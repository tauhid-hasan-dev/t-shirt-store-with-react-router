import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({cart, handleDeleteItem}) => {
    let messeage;
    if(cart.length === 3){
         messeage = <p>Card e 3 ta item ase</p>
    }else{
        messeage = <p>Card kintu 3 ta element nai</p>
    }
    
    return (
        <div>
            <p className='text-2xl font-bold'>Product quantity: {cart.length} </p>
           <div className='flex flex-col gap-5'>
                {
                    cart.map(tshirt => <CartProduct tshirt = {tshirt} handleDeleteItem = {handleDeleteItem}></CartProduct>)
                }
           </div>
           {
            messeage
           }
           {cart.length === 5 ? <p>Wow you have 5 items, buy more</p> : <p>5 items are gold</p>}
           {
            cart.length === 1 && <p className='text-5xl'>Matro ekta</p>
           }
           {
            cart.length === 6 || <p className='text-5xl bg-red-500'>Eto com kano</p>
           }
        </div>
    );
};

export default Cart;

/*
There are four way to render conditionally in react (conditional rendering)
1- use element in a variable and then use if/else to set value
2- ternary operation   condition ? true : false
3- && operator (if only the condition is true then render)
4- || operator (if only the condition is false then render)

*/