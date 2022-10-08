import React from 'react';

const CartProduct = ({tshirt, handleDeleteItem}) => {
    const {name} = tshirt;
    return (
        <div className='flex justify-center items-center'>
            <p className='text-2xl font-normal'>{name}</p>
            <button onClick={()=>handleDeleteItem(tshirt)} className="btn btn-error ">x</button>
        </div>
    );
};

export default CartProduct;