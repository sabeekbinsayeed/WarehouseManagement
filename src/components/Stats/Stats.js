import React from 'react';
import './Stats.css'

const Stats = () => {
    return (
        <div className='shadow  bg-white rounded mx-5 py-5'>
            <h5>TechStock warehouse and distribution management solutions by the numbers:</h5>

            <div className='d-flex shadow'>
                <div className='one-third'>
                    <h2 className='text-danger font'>100%</h2>
                    <p>end-to-end visibility through RyderShare™</p>

                </div>

                <div className='one-third'>
                    <h2 className='text-danger'>63M+</h2>
                    <p>square feet of managed warehouse space</p>

                </div>

                <div className='one-third'>
                    <h2 className='text-danger'>up to 25%</h2>
                    <p>

                        improvement in productivity and efficiency</p>

                </div>
            </div>

        </div>
    );
};

export default Stats;