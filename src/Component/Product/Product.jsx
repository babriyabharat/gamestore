import React from 'react';
import './product.css';

function Product({ productItem , handleAddProduct}) {
  return (
    <>
      <div className='item'>
        {productItem.map((productItem) => (
          <div className='card'>
            <div>
              <img className='product-image' src={productItem.image} alt={productItem.name} />
            </div>
            <div>
              <h3 className='product-name'>{productItem.name}</h3>
            </div>
            <div className='product-price'>${productItem.price}</div>
            <div>
              <button className='product-add' onClick={() => handleAddProduct(productItem)}>Add To Cart</button>
            </div>
          </div>

        ))}
      </div>
    </>
  )
}

export default Product