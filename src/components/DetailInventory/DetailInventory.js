import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailInventory = () => {
    const { productId } = useParams();
    const [pdetail, setPdetail] = useState([])
    const [quantity, setQuantity] = useState(0)

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
        const name = detail.pdetail.name

        const updatedProduct = { name, quantity };
        console.log(updatedProduct)

        // send data to the server
        const url = `http://localhost:5000/products/${pdetail._id}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully!!!');
                setQuantity(quantity)
                pdetail.quantity = quantity;

            })
    }
    return (
        <div>
            <h1>detail inventory </h1>
            <p>{pdetail.name}</p>
            <p>{quantity}</p>

            <button onClick={() => handleUpdate({ pdetail })}>Delivered</button>
        </div>
    );
};

export default DetailInventory;