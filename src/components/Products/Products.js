import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products').then(res => res.json()).then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>{products.length}</h1>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;