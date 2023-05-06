import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllProduct = props => {
    const { name, price, img, quantity, supplier, _id } = props.product;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://warehouse-new-vercel.vercel.app/products').then(res => res.json()).then(data => setProducts(data))
    }, [])
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
            console.log('else .. ')
        }
    }
    return (

        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><button onClick={() => handleDelete(_id)}>delete</button></td>

        </tr>
    );
};

export default AllProduct;