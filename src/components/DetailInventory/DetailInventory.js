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
        const url = `https://arcane-plateau-22519.herokuapp.com/products/${productId}`
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
        const url = `https://arcane-plateau-22519.herokuapp.com/products/${pdetail._id}`;
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
            <h1>Product Details Information </h1>

            <div className='d-flex' style={{ width: '80%', margin: 'auto', paddingTop: '30px' }}>
                <div>
                    <img style={{ width: '500px' }} src={pdetail.img}></img>
                </div>

                <div style={{ width: '400px', border: '2px solid black;', marginLeft: '100px' }}>
                    <h1 className='text-danger'>{pdetail.name}</h1>
                    <h3>{pdetail.suplier}</h3>
                    <h5>Price : {pdetail.price} Tk</h5>
                    <h5>Quantity: {pdetail.quantity}</h5>
                    <p>{pdetail.description}</p>
                    <button className='ware-button' onClick={() => handleUpdate({ pdetail })}>Delivered</button>


                </div>
            </div>




            <div className='mx-auto w-50 ' style={{ border: '2px solid red', padding: '60px', margin: '30px' }}>
                <h3 className='text-danger'>Stock Quantities Form</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-danger'>Input stock</Form.Label>
                        <Form.Control ref={stockRef} type="text" placeholder="Enter stock" />

                    </Form.Group>

                    <Button className='ware-button' variant=" w-50 mx-auto d-block mb-2 border" type="submit">
                        Add new quantity
                    </Button>
                </Form>
            </div>

            {/* <button className='ware-button' onClick={handleNavigateManage}>manage inventories</button> */}

            <Button onClick={handleNavigateManage} variant="danger w-50 mx-auto d-block mb-2 border" >
                Manage Inventories
            </Button>
        </div>
    );
};

export default DetailInventory;
