import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllProduct from '../AllProduct/AllProduct';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products').then(res => res.json()).then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('sure?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/products/${id}`;
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


        </div>
    );
};

export default ManageInventory;