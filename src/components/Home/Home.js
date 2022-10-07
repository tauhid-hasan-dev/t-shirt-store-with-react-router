import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='grid grid-cols-5'>
        <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-20 ">
            {
               tshirts.map(tshirt => <Tshirt tshirt={tshirt} key={tshirt.id}></Tshirt>)
            }
        </div>
        <div className="products bg-orange-400">
            <p>cart</p>
        </div>
    </div>
        
    );
};

export default Home;