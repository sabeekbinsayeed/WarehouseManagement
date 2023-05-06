import { Button } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './DetailInventory.css'
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
        const url = `https://warehouse-new-vercel.vercel.app/products/${productId}`
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


    // handle deliver items
    const handleNumber = (updatedProducts, quantity) => {
        const url = `https://warehouse-new-vercel.vercel.app/products/${pdetail._id}`;
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
                alert('successfully done!!!');
                setQuantity(quantity)
                console.log(quantity)
                pdetail.quantity = quantity;

            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const stock = stockRef.current.value;
        const quantity1 = parseInt(stock) + parseInt(pdetail.quantity);
        const quantity = quantity1 + ""
        //  const name = detail.pdetail.name

        const updatedProduct = { quantity };
        console.log(updatedProduct)
        handleNumber(updatedProduct, quantity)

        console.log(stock)

    }
    return (
        <div >
            <h1 className='text-danger mb-5'>Product Details Information </h1>

            <div className='grids w-100 ' >
                <div >
                    <img className='image' src={pdetail.img}></img>
                </div>

                <div className='px-5 mx-4'>
                    <h1 className='text-danger'>{pdetail.name}</h1>
                    <h3>{pdetail.suplier}</h3>
                    <h5 className='text-danger'>Price : {pdetail.price} Tk</h5>
                    <h5 className='text-dark'>Quantity: {pdetail.quantity}</h5>
                    <h5>{pdetail.quantity === 0 ? 'sold' : 'unsold'}</h5>
                    <p>{pdetail.description}</p>
                    <button className='ware-button' onClick={() => handleUpdate({ pdetail })}>Delivered</button>
                    <h3 className='text-danger mt-4 pt-2'>Stock Quantities Form</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-danger'>Input stock</Form.Label>
                            <Form.Control ref={stockRef} type="text" placeholder="Enter stock" />

                        </Form.Group>

                        <Button className='ware-button' variant=" w-50 mx-auto d-block mb-2 border" type="submit">
                            Add new quantity
                        </Button>
                    </Form>

                    <Button onClick={handleNavigateManage} variant="danger w-100 mx-auto d-block mb-2 border" >
                        Manage Inventories
                    </Button>

                </div>
            </div>


        </div>
    );
};

export default DetailInventory;