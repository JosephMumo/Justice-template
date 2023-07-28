import React, { useState } from 'react'
import Info from './Info'
import Data from '../QnsData'
import logo from '../images/que.png'

const Faqs = () => {
    const [ show, setShow ] = useState(false)


    return (
        <>
            <div className='mt-5 p-8 text-center text-black'>
                <h1 className='text-3xl'>Frequently Asked Questions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eum illo aut expedita ducimus voluptates accusantium eveniet saepe doloribus eos.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between p-8 content-center items-center'>
                <div className='w-full md:w-{50%} flex flex-col p-2'>
                    {Data.map(item => {
                        return (
                            <Info 
                                key={item.id}
                                question= { item.question }
                                answer= { item.answer}

                                show={ show }
                                setShow= { setShow }
                            />
                        )
                    })}
            
                </div>
                <div className='w-full  md:w-{50%} ml-3 grid place-items-center'>
                    <img src={logo} alt='1' className='w-96 h-96 ' />
                </div>
            </div>
        </>
    )
}
export default Faqs