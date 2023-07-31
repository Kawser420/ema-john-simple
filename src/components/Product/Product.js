import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleToAddCart}) => {
    // const {product, handleToAddCart} = props;
    const {name, seller, img, price, ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className="product-name">{name}</p>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p><small>Ratting: {ratings} star</small></p>
            </div>
            <button className='btn-name' onClick={() => handleToAddCart(product)}>
                <p className='btn-cart-name'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;