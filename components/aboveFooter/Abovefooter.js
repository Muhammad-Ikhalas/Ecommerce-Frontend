import React, { useEffect } from 'react'
import './Abovefooter.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Headphone from '../images/headphones.png'
function Abovefooter(props) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <>
             <div className="main-above-container">
     <img src={Headphone} alt="img" />
     <h1 data-aos='fade-up'>Get <span>20%</span> Off Discount Coupon</h1>
     <p data-aos='fade-up'>by Subscribe our Newslette</p>
     <input data-aos='fade-right' type="text"  placeholder='Enter Your Email'/>
    <button data-aos='fade-right'>Get the Coupon</button>



    </div>
        </>
    );
}

export default Abovefooter;