import React from 'react';

import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Arrival from '../components/Arrival';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';




export default function Home() {
  return (
    <div>
      <Navbar />
    {/*Main Body */}
    <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>save more coupons & up to 70% off!</p>
        <button>Shop now</button>
      </section>

      <section id="features" className="section-p1">
        <div className="f-box">
          <img src="images/features/f1.png" alt="free shipping" />
          <h6>Free shipping</h6>
        </div>
        <div className="f-box">
          <img src="images/features/f2.png" alt="online order" />
          <h6>online order</h6>
        </div>
        <div className="f-box">
          <img src="images/features/f3.png" alt="save money" />
          <h6>save money</h6>
        </div>
        <div className="f-box">
          <img src="images/features/f4.png" alt="promotions" />
          <h6>promotions</h6>
        </div>
        <div className="f-box">
          <img src="images/features/f5.png" alt="happy sell" />
          <h6>happy sell</h6>
        </div>
        <div className="f-box">
          <img src="images/features/f6.png" alt="24/7 support" />
          <h6>24/7 support</h6>
        </div>
      </section>

<Featured />


<section id="off-banner" className="section-m1">
        <h4>Repaire Services</h4>
        <h2>Up to 70% Off - All t-Shirts & Accessories</h2>
        <button className="normal">Explore More</button>
      </section>


<Arrival />


<section id="banners" className="section-p1">
        <div className="big-banners">
          <div className="big-banners-1">
            <h2>Seams Like Magic</h2>
            
            <span>We Bring Fabric to Life</span>
            <button className="banner-btn">Learn More</button>
          </div>
          <div className="big-banners-2">
            <h2>Master the Needle:</h2>
   
            <span>Sewing Instruction Made Easy</span>
            <button className="banner-btn">Read More</button>
          </div>
        </div>
        <div className="small-banners">
          <div className="small-banners-1">
            <h2>SEASONAL SALE</h2>
            <h5>Winter Collection 50% Off</h5>
          </div>
          <div className="small-banners-2">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h5>Spring/Summer 2022</h5>
          </div>
          <div className="small-banners-3">
            <h2>T-SHIRTS</h2>
            <h5>New Trendy Prints</h5>
          </div>
        </div>
      </section>

      <div className="teams">
 <p><i>Meet The Team</i></p>
     
     <div className="tf">


     <div className="tm">
 
      <img src="/images/people/m1.jpg" alt="" />
   
      <div className="hn">
      <Link>
      <h3 className="name">Anna Houston</h3>
          <p className="p">Senior Developer</p>
          </Link>
      </div>
     
     </div>

     
     <div className="tm">
      <img src="/images/people/m1.jpg" alt="" />
      <div className="hn">
      <Link>
      <h3 className="name">Anna Houston</h3>
          <p className="p">Senior Developer</p>
          </Link>
      </div>
     </div>

     
     <div className="tm">
      <img src="/images/people/m1.jpg" alt="" />
      <div className="hn">
      <Link>
      <h3 className="name">Anna Houston</h3>
          <p className="p">Senior Developer</p>
          </Link>
      </div>
     </div>




     </div>
      </div>

    <Footer />
     
    </div>
  )
}
