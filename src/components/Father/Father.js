import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='p-5 border-4 border-blue-600'>
              <p className='text-2xl font-bold border-2 border-red-500 p-3'>Father</p>
              <section className='flex gap-3 mt-3' >
                <Brother></Brother>
                <Myself></Myself>
                <Sister></Sister>
              </section>
        </div>
    );
};

export default Father;