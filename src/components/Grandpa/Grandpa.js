import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    return (
        <div className='p-5 border-2 border-red-500 m-10'>
            <p className='text-3xl font-bold '> Grandpa</p>
            <section className='flex gap-5 mt-5'>
                <Father ></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;