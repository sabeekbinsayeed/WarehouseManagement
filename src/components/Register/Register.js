import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Button } from 'react-bootstrap';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import Loading from '../Loading/Loading';
import img from '../../images/programming.webp'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)

    const navigateLogin = () => {
        navigate('/');
    }

    // if (user) {
    //     navigate('/home');
    // }

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}
            </p>
        </div>

    }
    if (user) {
        console.log('user is here')
    }
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Done successfully');
        navigate('/login')




    }

    return (
        <div style={{ minHeight: '100vh' }} >
            <h2 style={{ textAlign: 'center', marginBottom: '60px', color: 'black', marginTop: '20px' }}>Please <span className='text-danger'>Register</span></h2>

            <div className='grids mx-auto'>
                <div className=''>
                    <img src={img}></img>

                </div>

                <div className='  register-form ' style={{ marginTop: '30px' }}>
                    <form onSubmit={handleRegister}>
                        <input type="text" name="name" id="" placeholder='Your Name' required />

                        <input type="email" name="email" id="" placeholder='Email Address' required />

                        <input type="password" name="password" id="" placeholder='Password' required />


                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>

                        <Button disabled={!agree} variant="primary w-50 mx-auto d-block mb-2 mt-4 bg-danger" type="submit">
                            Register
                        </Button>
                    </form>
                    <p className='text-danger'>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link> </p>
                    {/* <ToastContainer /> */}
                    <p className=' text-danger'>{errorElement}</p>
                </div>

            </div>

        </div>
    );
};

export default Register;