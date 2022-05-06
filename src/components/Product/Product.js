import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = props => {
    const { name, price, img, quantity, supplier, _id } = props.product;


    const navigate = useNavigate('');
    const handleNavigation = id => {
        console.log('hello');
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='product-info shadow  mb-5 bg-white rounded'>
            <img src={img}></img>
            <div className="product-details">
                <h2> {name}</h2>
                <h3> {price}</h3>
                <p>quantity : {quantity}</p>
                <p>supplier : {supplier}</p>

                <br />

            </div>
            <div className="btn-container">
                <button className='ware-button' onClick={() => { handleNavigation(_id) }}><p>Manage Product</p></button>
            </div>

        </div>
    );
};

export default Product;