import React from 'react'
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className='Newsletter'>
            <h1 className='text-capitalize'>get exclusive offers on your email</h1>
            <p className='text-capitalize'>subscribe to our newsletter stay updated</p>
            <div className="">
                <input type="email" name="" placeholder='Enter Your email Id' id="" />
                <button>Subscribe</button>
                </div>
        </div>
    )
}

export default Newsletter