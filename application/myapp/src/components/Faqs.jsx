import React, { useState } from 'react'
import Info from './Info'
import Data from '../QnsData'

const Faqs = () => {
    const [ show, setShow ] = useState(false)


    return (
        <>
            <div className='mt-5 p-3 text-center text-black'>
                <h1 className='text-3xl'>Frequently Asked Questions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eum illo aut expedita ducimus voluptates accusantium eveniet saepe doloribus eos.</p>
            </div>
            <div className='columns-1 md:columns-2  w-full align-center p-2'>
                <div className='w-full md:w-{50%} flex flex-col p-2'>
                    {Data.map(item => {
                        return (
                            <Info 
                                key={item.id}
                                question= { item.question }
                                answer= { item.answer}

                                show={ show }
                                setShow= { setShow}
                            />
                        )
                    })}
            
                </div>
                <div className='w-full md:w-{50%} h-96 bg-slate-200'>

                </div>
            </div>
        </>
    )
}
export default Faqs