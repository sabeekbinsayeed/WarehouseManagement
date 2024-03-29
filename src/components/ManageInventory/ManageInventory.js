import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AllProduct from '../AllProduct/AllProduct';
import Loading from '../Loading/Loading';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://warehouse-new-vercel.vercel.app/products').then(res => res.json()).then(data => setProducts(data))
    }, [])

    const navigate = useNavigate();
    const handleNavigateAdd = () => {
        navigate('/addproduct');
    }

    const handleDelete = id => {
        const proceed = window.confirm('sure?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `https://warehouse-new-vercel.vercel.app/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = products.filter(u => u._id !== id);
                        setProducts(remaining);
                    }
                })
        }
        else {
            console.log('else ')
        }

        if (products.length === 0) {
            return <Loading></Loading>
        }
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th> Name</th>
                        <th> Quantity</th>
                        <th> Suplier</th>
                        <th> Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product => <tr>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.supplier}</td>
                            <td><button onClick={() => handleDelete(product._id)}>delete</button></td>

                        </tr>)
                    }

                    {/* {
                        products.map(product => <AllProduct key={product._id} product={product}></AllProduct>)
                    } */}



                </tbody>
            </Table>
            {/* <button onClick={handleNavigateAdd}>add products</button> */}

            <Button onClick={handleNavigateAdd} type="submit" variant="danger w-50 mx-auto d-block mb-2 border " >
                Add Items? Go to our add new item page
            </Button>


        </div>
    );
};

export default ManageInventory;