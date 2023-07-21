import React from 'react'

function Form() {
    return (
        <div>
            <form className='flex justify-center space-x-4 mb-4'>
                <input type='text' placeholder='Search your service' className='w-56 h-8 rounded text-sm px-2 bg-neutral-100 text-black outline-none' />
                <button className=' w-32 h-8 bg-orange-800 font-semibold rounded-sm hover:bg-orange-700'>Search</button>
            </form>
        </div>
    );
}

export default Form;