import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/appcontext';

function MyForm() {

    const { data, handleSubmit, handleChange } = useContext(AppContext)

    return (
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit} >
                <input onChange={handleChange} type='text' name='name' value={data.name} placeholder='Your Name' className='mb-2 h-10 pl-2 bg-gray-50 rounded' />
                <input onChange={handleChange} type='email' name='email' value={data.email} placeholder='Your Email' className='my-2 h-10 pl-2 bg-gray-50 rounded' />
                <input onChange={handleChange} type='text' name='subject' value={data.subject} placeholder='Subject' className='my-2 h-10 pl-2 bg-gray-50 rounded' />
                <textarea onChange={handleChange} type='text' name='message' value={data.message} placeholder='Your Message' className='my-2 h-40 pl-2 bg-gray-50 rounded' />
                <button className='mt-2 h-10 bg-amber-900 text-white rounded-sm'>Submit</button>
            </form>
        </div>
    );
}

export default MyForm;