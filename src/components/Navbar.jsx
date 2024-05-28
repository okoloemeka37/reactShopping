import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  
    
   
        <header>
          <div id="header">
            <div className="header-logo">
              <Link to="/"> 
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="header-list">
              <nav className="header-list-nav">
                <ul>
                  <li>
                    <Link to="/" className="active">Home</Link> 
                  </li>
                  <li>
                    <Link to="/cart">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className="header-list-icon">
                <Link to="/cart">
                  <i className="fa fa-bag-shopping"></i>
                </Link>
              </div>
            </div>
          </div>
        </header>
  )
    

}
