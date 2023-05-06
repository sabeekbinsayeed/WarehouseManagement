import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Myitems.css'

const Myitems = () => {
    //fetching data for products





    const [user] = useAuthState(auth)
    const email = user.email;
    console.log(email)
    const [items, setItems] = useState([])

    // fetching item data
    useEffect(() => {

        fetch(`https://warehouse-new-vercel.vercel.app/products?email=${email}`).then(res => res.json()).then(data => { setItems(data); console.log(data) })
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

                        const remaining1 = items.filter(u => u._id !== id);

                        setItems(remaining1)
                    }
                })
        }
        else {
            console.log('else ')
        }
    }
    return (
        <div style={{ minHeight: '100vh' }}>
            <h1 className='text-danger'>Your added products are shown below </h1>
            {

                items.map(item =>

                    <div>

                        <div className='w-50 mx-auto p-3 m-3' style={{ border: '2px solid red' }}>
                            <h3>product name: {item.name}  </h3>

                            <h5>supplier: {item.supplier}</h5>
                            <p>quantity: {item.quantity}</p>

                            <span>  <button className='ware-button' onClick={() => handleDelete(item._id)} style={{ width: '30%' }}> delete</button></span>

                        </div>
                    </div>
                )
            }



        </div>
    );
};

export default Myitems;