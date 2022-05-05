import { Button } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const DetailInventory = () => {
    const { productId } = useParams();
    const [pdetail, setPdetail] = useState([])
    const [quantity, setQuantity] = useState(0);
    const stockRef = useRef('')
    const Navigate = useNavigate()
    const handleNavigateManage = () => {
        Navigate('/manageinventories');
    }
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url).then(res => res.json()).then(data => {
            setPdetail(data)
            setQuantity(pdetail.quantity)
        }

        )
    }, [pdetail.quantity])


    const handleUpdate = detail => {
        console.log(detail.pdetail.name)

        console.log('clicked')

        const quantity = detail.pdetail.quantity - 1;

        const updatedProduct = { quantity };
        console.log(updatedProduct)
        handleNumber(updatedProduct, quantity)

        // send data to the server

    }

    const handleNumber = (updatedProducts, quantity) => {
        const url = `http://localhost:5000/products/${pdetail._id}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully!!!');
                setQuantity(quantity)
                console.log(quantity)
                pdetail.quantity = quantity;

            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const stock = stockRef.current.value;
        const quantity = stock
        //  const name = detail.pdetail.name

        const updatedProduct = { quantity };
        console.log(updatedProduct)
        handleNumber(updatedProduct, quantity)

        console.log(stock)

    }
    return (
        <div>
            <h1>detail inventory </h1>
            <p>{pdetail.name}</p>
            <p>{quantity}</p>

            <button onClick={() => handleUpdate({ pdetail })}>Delivered</button>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Input stock</Form.Label>
                    <Form.Control ref={stockRef} type="text" placeholder="Enter stock" />

                </Form.Group>


                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            <button onClick={handleNavigateManage}>manage inventories</button>
        </div>
    );
};

export default DetailInventory;
