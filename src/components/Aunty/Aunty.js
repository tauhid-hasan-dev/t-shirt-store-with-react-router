import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div className='p-5 border-4 border-blue-600'>
              <p className='text-2xl font-bold border-2 border-red-500 p-3'>Aunty</p>
              <section className='flex gap-3 mt-3' >
                <Cousin></Cousin>
                <Cousin></Cousin>
              </section>
        </div>
    );
};

export default Aunty;