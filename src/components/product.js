import React from 'react';

const Product = ({details}) => (
    <li>
        <h2>Category: { details.fields.category }</h2>
        <p>Field: { details.fields.brand }</p>
        <p>Title: { details.fields.title }</p>
        <p>Category: { details.fields.category }</p>
    </li>
);

export default Product;