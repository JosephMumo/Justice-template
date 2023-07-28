import React from 'react'
import { GiHandcuffs } from 'react-icons/gi'
import { MdChildCare, MdBusiness } from 'react-icons/md'
import { GiBookmark } from 'react-icons/gi'
import { LiaHeartBrokenSolid } from 'react-icons/lia'
import { SiTaxbuzz } from 'react-icons/si'
import { BsArrowRightCircle } from 'react-icons/bs'


function Landing() {
    return (
        <div className='mt-3 p-5 bg-white text-black text-center'>
            <h1 className='text-3xl mt-3'>The Legal Practice Area</h1>
            <p className='text-center'>"We are a team of legal experts who provide you with the best comprehensive legal counsel in diverse practice areas for your peace of mind and success."</p>
            <div className='mt-3 py-2 px-4 divide-y grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
                <div className='p-4 grid place-items-center'>
                    <MdBusiness size={54} color='brown' />
                    <br />
                    <h1 className='text-xl mb-2'>Business Law</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt optio quas at ipsa eaque expedita illo, facilis error numquam animi nihil possimus minima esse minus amet id? Minima, aliquid quo.</p>
                    <br />
                    <BsArrowRightCircle size={28} color='brown' className='animate-bounce hover:animate-spin' />
                    <br />
                </div>
                <div className='p-4 grid place-items-center'>
                    <GiHandcuffs size={54} color='brown' />
                    <br />
                    <h1 className='text-xl mb-2'>Criminal Law</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt optio quas at ipsa eaque expedita illo, facilis error numquam animi nihil possimus minima esse minus amet id? Minima, aliquid quo.</p>
                    <br />
                    <BsArrowRightCircle size={28} color='brown' className='animate-bounce' />
                    <br />
                </div>
                <div className='p-4 grid place-items-center'>
                    <MdChildCare size={54} color='brown' />
                    <br />
                    <h1 className='text-xl mb-2'>Child Support</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt optio quas at ipsa eaque expedita illo, facilis error numquam animi nihil possimus minima esse minus amet id? Minima, aliquid quo.</p>
                    <br />
                    <BsArrowRightCircle size={28} color='brown' className='animate-bounce' />
                    <br />
                </div>
                <div className='p-4 grid place-items-center'>
                    <GiBookmark size={54} color='brown' />
                    <br />
                    <h1 className='text-xl mb-2'>Education Law</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt optio quas at ipsa eaque expedita illo, facilis error numquam animi nihil possimus minima esse minus amet id? Minima, aliquid quo.</p>
                    <br />
                    <BsArrowRightCircle size={28} color='brown' className='animate-bounce' />
                    <br />
                </div>
                <div className='p-4 grid place-items-center'>
                    <LiaHeartBrokenSolid size={54} color='brown' />
                    <br />
                    <h1 className='text-xl mb-2'>Divorce Law</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt optio quas at ipsa eaque expedita illo, facilis error numquam animi nihil possimus minima esse minus amet id? Minima, aliquid quo.</p>
                    <br />
                    <BsArrowRightCircle size={28} color='brown' className='animate-bounce' />
                    <br />
                </div>
                <div className='p-4 grid place-items-center'>
                    <SiTaxbuzz size={54} color='brown' />
                    <br />
                    <h1 className='text-xl mb-2'>Tax Law</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt optio quas at ipsa eaque expedita illo, facilis error numquam animi nihil possimus minima esse minus amet id? Minima, aliquid quo.</p>
                    <br />
                    <BsArrowRightCircle size={28} color='brown' className='animate-bounce' />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Landing;