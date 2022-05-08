import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark ' style={{ padding: '50px' }}>
            <div className='grid'>
                <div >
                    <h5>Tech Stocks</h5>
                    <p style={{ color: '#999999', marginTop: '20px' }} className='w-50 mx-auto'>Techstocks is a leading store shop in Bangladesh. We offer thousands tech materials here.</p>

                </div>

                <div>
                    <h5>Communicate</h5>
                    <p className='w-50 mx-auto' style={{ color: '#999999', marginTop: '20px' }}>
                        <br></br>
                        House 310, Road 21
                        <br></br>
                        Mohakhali DOHS, Dhaka-1206
                        <br></br>Phone:
                        017-9992-5050  096-7877-1365</p>
                </div>
                <div>
                    <h5>Find us at</h5>
                    <p className='w-50 mx-auto' style={{ color: '#999999', marginTop: '20px' }}> Facebook
                        <br></br>
                        Instragram
                        <br></br>
                        Whatsapp
                        <br></br>
                        Telegram</p>
                </div>
            </div>


            <div style={{ backgroundColor: '#22252c', color: 'white', marginTop: '30px' }}>
                <p className='text-center text-white'>copyright &copy; All rights reserved TechStock</p>
            </div>

        </div >
    );
};

export default Footer;