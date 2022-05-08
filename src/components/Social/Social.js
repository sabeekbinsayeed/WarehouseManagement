import React from 'react';
import google from '../../images/google.png'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();
    let errorElement;
    const handleGoogle = () => {
        signInWithGoogle();
        console.log('done google')
    }
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}
            </p>
        </div>

    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className=''>
                <h3 className='text-danger text-center mb-3'>OR <br></br> </h3>

            </div>
            <div className='  '>
                <button onClick={handleGoogle} className='btn btn-danger text-white w-50  d-block mx-auto my-2'>
                    <img src={google} width={'30px'} alt="" />
                    <span style={{ color: 'white', marginLeft: '10px' }}>google sign in</span>
                </button>


            </div>
            {
                errorElement
            }
        </div >
    );
};

export default Social;