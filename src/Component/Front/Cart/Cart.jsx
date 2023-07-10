import React from 'react'
import './cart.css'

function Cart({ cardItem, handleAddProduct, handlerRemoveProduct }) {

    const totalPrice = cardItem.reduce(
        (price, item) => price + item.quntity * item.price,
        0
    );

    return (
        <>
            <div className='cart-item'>
                <div className='cart-item-header'>Card Items</div>
                {cardItem.length === 0 && (
                    <div className='cart-empty'>No items are add.</div>
                )}
                <div>
                    {cardItem.map((item) => (
                        <div key={item.id} className='cart-list'>
                            <img className='cart-image'
                                src={item.image}
                                alt={item.name}
                            />
                            <div className='cart-name'>{item.name}</div>
                            <div className='cart-function'>
                                <button className='cart-add' onClick={() => handleAddProduct(item)}>+</button>
                                <button className='cart-remove' onClick={() => handlerRemoveProduct(item)}>-</button>
                            </div>
                            <div className='cart-item-price'>
                                {item.quntity} * ${item.price}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='cart-total-name'>
                    Total Price
                    <div className='cart-total-price'>
                        ${totalPrice}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart