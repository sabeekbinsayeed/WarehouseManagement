import React from 'react';
import { Table } from 'react-bootstrap';

const AllProduct = props => {
    const { name, price, img, quantity, supplier, _id } = props.product;
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><button>delete</button></td>

        </tr>
    );
};

export default AllProduct;