import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header({cartItems}) {
  return (
    <>
      <header className='header'>
        <div>
          <h1>
            <Link to="/" className='logo'>
              Game List
            </Link>
          </h1>
        </div>
        <div className='header-link'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/signup">Singup</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/cart" className='cart'>
                <i className="fas fa-shopping-cart" />
                <span className='cart-count'>
                  {cartItems.length === 0 ? "" :  cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header