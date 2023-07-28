import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


function Info(props) {
    const { question, answer, show, setShow } = props

    function handleShow() {
        setShow(!show)
    }
    return (
        <div className="w-{90%} bg-gray-50 rounded-md p-2 mb-1">
            <p className='w-{90%}'>Q: {question}</p>
            <br />
            <p onClick={handleShow} className='cursor-pointer'>{show ? <AiOutlineMinus /> : <AiOutlinePlus />} {show && answer}</p>
        </div>
    );
}

export default Info;