import React, { useEffect } from 'react'
import './Bestsaller.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Seller1 from '../images/saller-1.png'
import Seller2 from '../images/saller-2.png'
import Seller3 from '../images/saller-3.png'
import Seller4 from '../images/saller-4.png'
import Seller5 from '../images/saller-5.png'
import Seller6 from '../images/saller-6.png'
import longarrow from '../images/long-arrow-right.png'

function Bestsaller(props) {

    useEffect(()=>{
        AOS.init({duration:2000})
       },[])

    return (
        <>
            <div div className='Seller-Super-Parent'>
    <div className="Best-Saller-header">
      <h1>Best Saller</h1>
      <h5>View More</h5>
      <div className="arrow-popular">
        <img src={longarrow} alt="img" />
        </div>
    </div>
    <div className="Parent-Best-Saller">
     <div className="Best-Saller-Image" data-aos='fade-right'>
     <div className='seller-common seller-img1'> <img src={Seller1} alt="img" /></div>

     
     <div className='seller-common seller-img2'><img src={Seller2} alt="img" /></div>
    
     <div className='seller-common seller-img3'><img src={Seller3} alt="img" /></div>

     <div className='seller-common seller-img4'> <img src={Seller4} alt="img" /></div>

     <div className='seller-common seller-img5'><img src={Seller5} alt="img" /></div>

     <div className='seller-common seller-img6'><img src={Seller6} alt="img" /></div> 
     </div>
     <div className="Footerclass" data-aos='fade-right'>
     <div className="Seller-img-footer1">
         <p>Shopno BD</p>
     </div>
     <div className="Seller-img-footer2">
         <p>Eecoms Shop</p>
     </div>
     <div className="Seller-img-footer3">
         <p>Fusion X</p>
     </div>
     <div className="Seller-img-footer4">
         <p>Rikayi Rox</p>
     </div>
     <div className="Seller-img-footer5">
         <p>Habbriyi</p>
     </div>
     <div className="Seller-img-footer6">
         <p>Rayhans
        </p>
     </div>
     </div>
    </div>
    </div> 
        </>
    );
}

export default Bestsaller;