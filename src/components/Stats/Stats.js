import React from 'react';
import './Stats.css'

const Stats = () => {
    return (
        <div className='shadow  bg-white rounded mx-5 my-5 py-2'>
            <h1 className='text-danger mb-3 pb-3'>Our stats</h1>
            <h5 className='py-2'>TechStock warehouse and distribution management solutions by the numbers:</h5>

            <div className='grid-stats shadow'>
                <div >
                    <h2 className='text-danger font'>100%</h2>
                    <p>end-to-end visibility through RyderShare™</p>

                </div>

                <div className=''>
                    <h2 className='text-danger font'>63M+</h2>
                    <p>square feet of managed warehouse space</p>

                </div>

                <div >
                    <h2 className='text-danger font'>up to 25%</h2>
                    <p>

                        improvement in productivity and efficiency</p>

                </div>
            </div>

        </div>
    );
};

export default Stats;