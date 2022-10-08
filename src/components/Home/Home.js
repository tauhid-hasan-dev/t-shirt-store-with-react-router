import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    
    const handleAddtoCart = (tshirt) =>{
        const exist = cart.find(ts => ts._id === tshirt._id);
        console.log(exist);
        if(exist){
            alert('Already added')
        }else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }    
    }

    
    return (
        <div className='grid grid-cols-5'>
        <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-20 ">
            {
               tshirts.map(tshirt =><Tshirt 
                                        tshirt={tshirt} 
                                        key={tshirt._id}
                                        handleAddtoCart = {handleAddtoCart}
                                        >
                                        
                                    </Tshirt>)
            }
        </div>
        <div className="products bg-orange-400">
            <Cart cart = {cart}></Cart>
        </div>
    </div>
        
    );
};

export default Home;