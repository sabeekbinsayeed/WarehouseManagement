import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://arcane-plateau-22519.herokuapp.com/products').then(res => res.json()).then(data => setProducts(data))
    }, [])
    if (products.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-danger text-center'>Our Products</h1>
            <div className='product-container'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;