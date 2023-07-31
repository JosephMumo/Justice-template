import React, { useContext } from 'react'
import { AiOutlineClose, AiOutlineMenu }  from 'react-icons/ai'
import { AppContext } from '../context/appcontext'

const Header = () => {
    const { menu, changeMenu } = useContext(AppContext)
    return(
        <>
            <div className='hidden md:flex flex-row justify-between py-2 px-4 '>
                <h3 className='text-2xl font-bold'>Justice</h3>
                <ul className='list-none flex flex-row cursor-pointer text-lg'>
                    <li className='p-1 mr-2 hover:translate-y-1'>
                        <a href='#hero'>Home</a>
                    </li>
                    <li className='p-1 mr-2 hover:translate-y-1'>
                        <a href='#services'>Services</a>
                    </li>
                    <li className='p-1 mr-2 hover:translate-y-1'>
                        <a href='#clients'>Clients</a>
                    </li>
                    <li className='p-1 mr-2 hover:translate-y-1'>
                        <a href='#blog'>FAQs</a>
                    </li>
                    <li className='p-1 mr-2 hover:translate-y-1'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                <button className='bg-orange-800 w-28 h-8 rounded-sm text-white hover:bg-orange-700'>Consultation</button>
            </div>
            <div className='md:hidden h-1/2 flex justify-between py-4 px-4'>
                <div className="basis-1/5 transition duration-100" onClick={changeMenu}>
                    { menu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} /> }
                </div>
                <ul className={ menu ? 'list-none flex flex-col ml-2 divide-y basis-4/5 my-2 transition ease-in-out duration-500' : 'hidden'}>
                    <li className='p-2 px-4 mr-3 hover:bg-gray-100'>
                        <a href='#hero'>Home</a>
                    </li>
                    <li className='p-2 px-4 mr-3 hover:bg-gray-100'>
                        <a href='#services'>Services</a>
                    </li>
                    <li className='p-2 px-4 mr-3 hover:bg-gray-100'>
                        <a href='#clients'>Clients</a>
                    </li>
                    <li className='p-2 px-4 mr-3 hover:bg-gray-100'>
                        <a href='#blog'>FAQs</a>
                    </li>
                    <li className='p-2 px-4 mr-3 hover:bg-gray-100'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Header;