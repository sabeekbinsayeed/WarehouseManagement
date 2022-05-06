import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myitems = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products').then(res => res.json()).then(data => setProducts(data))
    }, [])


    const [user] = useAuthState(auth)
    const email = user.email;
    console.log(email)
    const [items, setItems] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/products?email=${email}`).then(res => res.json()).then(data => { setItems(data); console.log(data) })
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
                        const remaining1 = items.filter(u => u._id !== id);
                        setProducts(remaining);
                        setItems(remaining1)
                    }
                })
        }
        else {
            console.log('else ')
        }
    }
    return (
        <div>
            {items.length}
            {items.email}
            {

                items.map(item =>
                    item.email === email ? <div>
                        <p>product name: {item.name}  </p>
                        <span>  <button onClick={() => handleDelete(item._id)} style={{ width: '30%' }}> delete</button></span>

                    </div> : ''
                )
            }

        </div>
    );
};

export default Myitems;