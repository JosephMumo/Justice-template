import React from 'react'

function MyForm() {
    return (
        <div>
            <form className='flex flex-col'>
                <input type='text' name='name' placeholder='Your Name' className='mb-2 h-10 pl-2 bg-gray-50 rounded' />
                <input type='email' name='email' placeholder='Your Email' className='my-2 h-10 pl-2 bg-gray-50 rounded' />
                <input type='text' name='subject' placeholder='Subject' className='my-2 h-10 pl-2 bg-gray-50 rounded' />
                <textarea type='text' name='message' placeholder='Your Message' className='my-2 h-40 pl-2 bg-gray-50 rounded' />
                <button className='mt-2 h-10 bg-amber-900 text-white rounded-sm'>Submit</button>
            </form>
        </div>
    );
}

export default MyForm;