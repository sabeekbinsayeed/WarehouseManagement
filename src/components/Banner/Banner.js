import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='banner  '>
                <h1 className='white pb-2 mt-2'>We store Your favourite laptops, mobiles and gadgets</h1>
                <p className='text-white w-50 mx-auto py-2'>We are working for our customers for more than 10 years. We store tech machines,instruments and gadgets. We also provide proper packeting.</p>
                <button onClick={() => navigate('/blogs')} className='button py-2 px-1 my-4'>Read Blogs</button>


            </div>
        </div>
    );
};

export default Banner;