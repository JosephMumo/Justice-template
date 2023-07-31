import React from 'react'

function Footer() {
    const d = new Date()
    const year = d.getFullYear()
    return (
        <div className='bg-black text-white p-8 text-center'>
            <h6>Copyright ©{year} Justice. All rights reserved.</h6>
        </div>
    );
}

export default Footer;