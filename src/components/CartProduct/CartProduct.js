import React from 'react';

const CartProduct = ({tshirt}) => {
    const {name} = tshirt;
    return (
        <div className='flex justify-center items-center'>
            <p className='text-2xl font-bold'>{name}</p>
            <button className="btn btn-error ">x</button>
        </div>
    );
};

export default CartProduct;