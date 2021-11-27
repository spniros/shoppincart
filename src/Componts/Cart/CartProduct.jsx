import React from 'react'
import Thumb from '../Products/Thumb'

const CartProduct = ({product,removeProduct}) => {
    return (
        // <div className={classes.join(' ')}>
        <div>
        <div
          className="shelf-item__del"
        //   onMouseOver={() => this.handleMouseOver()}
        //   onMouseOut={() => this.handleMouseOut()}
        //   onClick={() => removeProduct(product)}
        />
        <Thumb
          classes="shelf-item__thumb"
          src={product?.details?.image}
          alt={product?.name}
        />
        <div className="shelf-item__details">
          <p className="title">{product?.name}</p>
          <p className="desc">
          
            Quantity: {product?.quantity}
          </p>
        </div>
        <div className="shelf-item__price">
        <p> $ {   product.details?.price}</p>
          
        </div>

        <div className="clearfix" />
      </div>
    )
}

export default CartProduct
