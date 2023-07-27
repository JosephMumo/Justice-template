import React from 'react'
import Carousel from './Carousel';

function Client() {
    return (
        <>
            <div className='mt-5 p-8'>
                <h1 className='text-black text-center text-3xl'>What Our Clients Say</h1>
                <p className='text-black text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam a esse rem perferendis necessitatibus deleniti.</p>
            </div>
            <div className=' text-white mt-2 p-8 h-fit'>
                <Carousel />
            </div>
        </>
    );
}

export default Client;