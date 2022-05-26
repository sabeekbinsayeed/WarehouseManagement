import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate('');
    // https://arcane-plateau-22519.herokuapp.com/products
    useEffect(() => {
        fetch('https://arcane-plateau-22519.herokuapp.com/products').then(res => res.json()).then(data => setProducts(data))
    }, [])
    if (products.length === 0) {
        return <Loading></Loading>
    }
    // const navigate = useNavigate('');


    const handleNavigate = () => {
        navigate(`/manageinventories`)
    }
    return (
        <div className='my-3 py-3'>
            <h1 className='text-danger text-center mt-3 '>Our Items</h1>
            <div className='product-container'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            {/* <button className='ware-button w-50 mx-auto mb-5 pb-4' onClick={() => { handleNavigate() }}><p>Manage Inventories</p></button> */}

            <button className='ware-button w-50 mx-auto bg-danger text-white' onClick={handleNavigate}>Manage Inventories</button>

        </div >
    );
};

export default Products;