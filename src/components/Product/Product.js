import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = props => {
    const { name, price, img, quantity, supplier, _id, description } = props.product;


    const navigate = useNavigate('');
    const handleNavigation = id => {
        console.log('hello');
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='product-info shadow  mb-5 bg-white rounded'>
            <img src={img} className='w-100'></img>
            <div className="product-details">
                <h4> {name}</h4>
                <h5 className='text-danger'> {price} Tk</h5>
                <h5>quantity : {quantity}</h5>
                <h6>supplier : {supplier}</h6>
                <p>{description} </p>


                <br />

            </div>
            <div className="btn-container">
                <button className='ware-button' onClick={() => { handleNavigation(_id) }}>Manage Product</button>
            </div>

        </div>
    );
};

export default Product;