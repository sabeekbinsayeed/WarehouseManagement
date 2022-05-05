import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllProduct from '../AllProduct/AllProduct';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products').then(res => res.json()).then(data => setProducts(data))
    }, [])
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
                        products.map(product => <AllProduct key={product._id} product={product}></AllProduct>)
                    }



                </tbody>
            </Table>


        </div>
    );
};

export default ManageInventory;