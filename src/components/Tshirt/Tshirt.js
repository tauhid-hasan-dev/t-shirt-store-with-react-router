import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tshirt = ({tshirt, handleAddtoCart}) => {
    const {name, picture} = tshirt;
    return (
        <div className=' border-[1px] rounded-lg relative '>
            <div className='p-2'>
                <img src={picture} alt=""  className='rounded '/>
                <div className='flex flex-col pt-3  h-52 '>
                        <p className='font-semibold'>{name}</p>
                </div>
            </div>
            <button className="bg-orange-400 hover:bg-orange-600 text-black py-3 px-4 rounded-b absolute bottom-0 w-full flex items-center justify-center gap-3" onClick={()=>handleAddtoCart(tshirt)}>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Tshirt;