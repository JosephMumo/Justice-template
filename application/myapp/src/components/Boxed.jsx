import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { LuClock3 } from 'react-icons/lu'
import MyForm from './MyForm'

const Boxed = () => {
    return (
        <div className='w-full flex flex-col md:flex-row mt-5'>
            <div className='w-full grid grid-cols-2 gap-0 divide-x divide-y md:w-{50%} p-3'>
                <div className='w-{50%} h-{50%} bg-gray-50 rounded-sm p-5 grid place-items-center md:p-8 hover:bg-slate-100'>
                    <SlLocationPin size={36} color='brown' className='mb-2' />
                    <h4 className='text-lg font-bold mb-2'>Address</h4>
                    <p className='text-md'>A108 Adam Svie</p>
                    <p className='text-md'>New York, NY 539022</p>
                </div>
                <div className='w-{50%} h-{50%} bg-gray-50 rounded-sm p-5 grid place-items-center md:p-8 hover:bg-slate-100'>
                    <FiPhoneCall size={36} color='brown' className='mb-2' />
                    <h4 className='text-lg font-bold mb-2'>Call Us</h4>
                    <p className='text-md'>+3344556677</p>
                    <p className='text-md'>+9988776655</p>
                </div>
                <div className='w-{50%} h-{50%} bg-gray-50 rounded-sm p-5 grid place-items-center md:p-8 hover:bg-slate-100'>
                    <AiOutlineMail size={36} color='brown' className='mb-2'/>
                    <h4 className='text-lg font-bold mb-2'>Email Us</h4>
                    <p className='text-md'>info@gmail.com</p>
                    <p className='text-md'>info@gmail.com</p>
                </div>
                <div className='w-{50%} h-{50%} bg-gray-50 rounded-sm p-5 grid place-items-center md:p-8 hover:bg-slate-100'>
                    <LuClock3 size={36} color='brown' className='mb-2'/>
                    <h4 className='text-lg font-bold mb-2'>Working Hours</h4>
                    <p className='text-md'>WKD:9AM-5PM</p>
                    <p className='text-md'>Sat 9AM to 1PM</p>
                </div>
            </div>
            <div className='w-full md:w-{50%} p-3'>
                <MyForm />
            </div>
        </div>
    )
}
export default Boxed