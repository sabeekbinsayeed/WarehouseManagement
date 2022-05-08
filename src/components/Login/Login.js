import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import './Login.css'

import Social from '../Social/Social';
const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')

    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

    const from = location?.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}
            </p>
        </div>

    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (

        <div style={{ minHeight: '100vh' }} className='main'>
            <div className='border-login bg-white '>
                <h1 className=' text-center text-danger' >Please<span className='text-danger'> Login</span></h1>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-danger' style={{ color: '#ff4444', fontWeight: '500' }}>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="text-danger " controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: '500' }}><bold>Password</bold></Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button style={{ backgroundColor: '#ff4444', color: 'white' }} variant=" w-50 mx-auto d-block mb-2 mt-2" type="submit">
                        Login
                    </Button>
                </Form>
                <p>No account?<span onClick={navigateRegister} className='text-danger'> Please Register</span></p>
                <p>Forget Password? <button className='btn btn-link text-danger  text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                {errorElement}
                <Social></Social>
                <ToastContainer />
            </div>
        </div >

    );
};

export default Login;