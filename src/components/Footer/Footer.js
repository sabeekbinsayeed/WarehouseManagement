import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark' style={{ color: 'white', height: '400px', padding: '100px' }}>

            <div className='grid'>
                <div className=''>
                    <h5>Tech Stocks</h5>
                    <p style={{ color: '#999999', marginTop: '20px' }} className='w-50 mx-auto'>Wafilife is a leading book shop in Bangladesh. We offer thousands of islamic, general and academic books at a discounted price. We provide good packaging with low shipping cost all over the Bangladesh.</p>

                </div>

                <div>
                    <h5>Communicate</h5>
                    <p style={{ color: '#999999', marginTop: '20px' }}>
                        <br></br>
                        House 310, Road 21
                        <br></br>
                        Mohakhali DOHS, Dhaka-1206
                        <br></br>Phone:
                        017-9992-5050  096-7877-1365</p>
                </div>
                <div>
                    <h5>Communicate</h5>
                    <p style={{ color: '#999999', marginTop: '20px' }}> Head Office:
                        <br></br>
                        House 310, Road 21
                        <br></br>
                        Mohakhali DOHS, Dhaka-1206
                        <br></br>Phone:
                        017-9992-5050  096-7877-1365</p>
                </div>
            </div>

        </div >
    );
};

export default Footer;