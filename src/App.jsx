import React, { useState } from 'react';
import data from './Component/Back/Data/Data';
import Header from './Component/Front/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Product from './Component/Product/Product';
import Signup from './Component/Front/Signup/Signup';
import Cart from './Component/Front/Cart/Cart';

function App() {

  const { productItems } = data;
  const [cartItems, setcartItem] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setcartItem(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quntity: productExist.quntity + 1 }
            : item)
      )
    } else {
      setcartItem([...cartItems, { ...product, quntity: 1 }])
    }
  };

  const handlerRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist.quntity === 1){
      setcartItem(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setcartItem(
        cartItems.map((item) => 
        item.id === product.id
        ? { ...productExist, quntity: productExist.quntity - 1 }
        : item
        )
      )
    }
  }


  return (
    <>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Product productItem={productItems} handleAddProduct={handleAddProduct}/>} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Cart' element={<Cart cardItem={cartItems} handleAddProduct={handleAddProduct} handlerRemoveProduct={handlerRemoveProduct}/>} />

      </Routes>

    </>
  )
}

export default App