import React from 'react'
import Form from './Form';

function Hero() {
    return (
        <div className='bg-black text-center text-white p-10 mt-3'>
            <h1 className='text-3xl '>We Provide Effective <br /> Legal Solutions</h1>
            <br />
            <div className='p-2'>
                <p>
                    Lorem, ipsum dolor amet consectetur adipisicing elit. Quia magni voluptatum molestiae distinctio placeat odio id, 
                    odit commodi ducimus voluptas repellendus voluptates reiciendis corporis asperiores accusantium minus maxime animi
                    omnis necessitatibus in. Illo rerum sunt non facilis sint nam aliquid, minima ut eius accusantium excepturi doloremque 
                    mollitia soluta nemo veniam!
                </p>
            </div>
            <br />
            <Form/>
        </div>
    );
}

export default Hero;