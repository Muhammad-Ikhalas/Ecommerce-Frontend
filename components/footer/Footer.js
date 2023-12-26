import React from 'react';
import './Footer.css'
import Logo from '../images/logo.svg'
import Instagram from '../images/instagram.PNG'
import Facebook from '../images/Facebook.PNG'
import Youtube from '../images/Youtube.PNG'
import Visa from '../images/Visa.png'

function Footer(props) {
    return (
        <>
             <div className='footer'>
      <img src={Logo} alt="img" />
     </div>
     <div className="footer-main-container">
      <div className='Aboutus'>
        <h3>About us</h3>
        <p>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
      </div>
      <div className='Feature'>
        <h3>Feature</h3>
        <ul>
            <li><a href="About us"> About us</a></li>
            <li><a href="Terms condition"> Terms Conditions</a></li>
            <li><a href="Best products"> Best Products</a></li>
        </ul>
      </div>
      <div className='Generallinks'>
      <h3>General Links</h3>
        <ul>
            <li><a href="Blogs">Blog</a></li>
            <li><a href="Tracking order">Tracking Order</a></li>
            <li><a href="Become seller"> Become Seller</a></li>
        </ul>
      </div>
      <div className="Helpful">
      <h3>Helpful</h3>
        <ul>
            <li><a href="Flash sale">Flash Sale</a></li>
            <li><a href="FAQ">FAQ</a></li>
            <li><a href="Support">Support</a></li>
        </ul>
      </div>
     </div>
     <div className="Footer-Main-Icon-Box">
     <div className="Footer-icons">
      <img src={Instagram} alt="img" />
      <img src={Facebook} alt="img" />
      <img id='youtube' src={Youtube} alt="img" />
       <p className='copy_right'>©2022</p>
       <a href="Quomodosoft">Quomodosoft</a>
       <p className='rights'>All rights reserved</p>
     </div>
      <div className='Footer-Images-Box'>
         <img src={Visa} alt="img" />
         {/* <img src={MissionCard} alt="img" />
         <img src={Paypal} alt="img" />
         <img src={Skrill} alt="img" />
         <img src={Maestro} alt="img" />
         <img src={VisaElection} alt="img" /> */}
      </div>

     </div>
        </>
    );
}

export default Footer;