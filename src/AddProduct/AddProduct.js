import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AddProduct = () => {
    // const { register, handleSubmit } = useForm();
    const nameRef = useRef('')
    const priceRef = useRef('')
    const supplierRef = useRef('')
    const quantityRef = useRef('')
    const urlRef = useRef('')
    const desRef = useRef('')
    const [user, loading] = useAuthState(auth)
    console.log(user)
    const onSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplier = priceRef.current.value;
        const des = desRef.current.value;
        const url = urlRef.current.value;
        const email = user.email;
        console.log(email)

        const data = { name, price, quantity, des, supplier, url, email }

        console.log(data)
        // send data to the server
        fetch('http://localhost:5000/products/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('submit done')


            })

    };
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter stock" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Supplier</Form.Label>
                    <Form.Control ref={supplierRef} type="text" placeholder="Enter stock" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>price</Form.Label>
                    <Form.Control ref={priceRef} type="text" placeholder="Enter stock" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>quantity</Form.Label>
                    <Form.Control ref={quantityRef} type="text" placeholder="Enter quantity" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>description</Form.Label>
                    <Form.Control ref={desRef} type="text" placeholder="Enter desc" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control ref={urlRef} value={"https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"} type="text" placeholder="Enter quantity" />

                </Form.Group>


                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};
export default AddProduct;