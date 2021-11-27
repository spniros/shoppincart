import React, { useState } from 'react'
import Thumb from './Thumb';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartBag } from 'src/actions/orderAction';


const Product = ({productItem}) => {

 let productDetail = useSelector((state) => state.cart.product);

const [products, setProducts] = useState(productItem);
const dispatch = useDispatch();

const addToCart=(item)=>{
 

 productDetail.push(item);
  // console.log(item);
  dispatch(addToCartBag(productDetail));

}


    return (
       
            <div
              className="shelf-item"
           
            >
            
                <div className="shelf-stopper">{products?.details?.tag}</div>
              
              <Thumb
                classes="shelf-item__thumb"
                src={products?.details?.image}
                alt="Cat Tee Black T-Shirt"
              />
              <p className="shelf-item__title">{products?.name}</p>
              <div className="shelf-item__price">
                <div className="val">
                  <small>$</small>
                  <b>{products?.details?.price}</b>
                 
                </div>
               
              </div>
              <div className="shelf-item__buy-btn"  onClick={()=>addToCart(products)}>Add to cart</div>
            </div>
         
    )
}


Product.propTypes = {
  productItem: PropTypes.object,
  
};

export default Product
