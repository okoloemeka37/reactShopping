import React from 'react'

export default function Footer() {
  return (
    <div>
       <section id="newsletter">
        <div className="newsletter-text">
          <h3>Sign Up For Newsletters</h3>
          <h5>get e-mail updates about out latest shop and <span>special offers</span></h5>
        </div>
        <div className="form">
          <input type="email" placeholder="Your email address" id="email-address-input" />
          <button>Sign Up</button>
        </div>
      </section>

      <footer>
      <div id="footer">
        <div className="contact">
          <a href="indext.html"><img src="images/logo.png" alt="" /></a>
          <br /> <br />
          <br /> 
          <h3>Contact</h3>
          <address>
            <p><b>Address:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b>Phone:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b>Hours</b> 10:00 - 18:00. Mon - Sat</p>
          </address>
          <h3>Follow Us</h3>
          <br /> 
          <div className="socials">
            <a href="#"><i className="fa-brands fa-facebook-square"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-telegram"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>

        </div>
        <div className="about">
          <h3>About</h3>
          <br /> 
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="myaccount ">
          <h3>My account</h3>
          <br /> 
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="install">
          <h3>Secured Payment Gateways</h3>
          <br /> 

          <img src="images/pay/pay.png" alt="" />
        </div>
        
      </div>

    </footer>


    </div>
  )
}
