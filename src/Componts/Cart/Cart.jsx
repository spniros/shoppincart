import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const Cart = () => {
   const [classes, setclasses] = useState(['float-cart'])
   const [isOpen, setIsOpen] = useState(false)
   let productDetail = useSelector((state) => state.cart.product);

   useEffect(() => {
    
       if(!isOpen){
        classes.push('float-cart--open');
       }else {
        //  classes.reduce('float-cart--open')
         classes.splice(classes.indexOf('float-cart--open'), 1);
       }
 
   }, [isOpen])
   

   
const removeProduct = product => {
  // const { cartProducts, updateCart } = this.props;

  // const index = cartProducts.findIndex(p => p.id === product.id);
  // if (index >= 0) {
  //   cartProducts.splice(index, 1);
  //   updateCart(cartProducts);
  // }
};

const totalPrice=()=>{
  let total=0;
  

  for(var i in productDetail) { 
    total += productDetail[i]?.details?.price;
}
return total;
}

const productDet= productDetail.map(p => {
  return (
    <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
  );
});

    return (
        <>
             <div className={classes.join(' ')}>
        {/* If cart open, show close (x) button */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="float-cart__close-btn"
          >
            X
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!isOpen && (
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{productDetail.length}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{productDetail.length}</span>
            </span>
            <span className="header-title">Bag</span>
          </div>

          <div className="float-cart__shelf-container">
          
            {productDet}
            {/* {!productDetail.length && (
              <p className="shelf-empty">
                Add some products in the bag <br />
                :)
              </p>
            )} */}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
              $  {totalPrice()}
              </p>
             
            </div>
            <div  className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Cart
