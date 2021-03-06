import React from 'react';
import './Info.css'

const Info = () => {
    return (
        <div className='grids  py-5 my-5' >
            <div className=''>
                <img className='image ' src="https://img.freepik.com/free-photo/male-business-owner-working-packing-order-shipping-customer-packaging-box-delivery_254717-303.jpg?w=2000" alt="" />

            </div>

            <div className=''>
                <div className='info-div'>
                    <h2>At tech stock, we are transforming warehouses and distribution centers to drive value and customer satisfaction.</h2>
                    <p className='mt-3'>Get ahead of challenges with flexible warehousing and distribution solutions to meet your customers demands. At Ryder, our industry-leading solutions include dedicated and multiclient warehousing, process engineering for continuous improvement, facility design, equipment, labor management, automation technology, and visibility tools to help you improve efficiency and optimize your operations.</p>

                    <button className='py-2 about bg-danger'>About us</button>
                </div>
            </div>

        </div>
    );
};

export default Info;