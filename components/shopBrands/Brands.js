import React, {useEffect} from 'react';
import './Brands.css'

import brand1 from  '../images/brand-1.png'
import brand2 from '../images/brand-2.png'
import brand3 from '../images/brand-3.png'
import brand4 from '../images/brand-4.png'
import brand5 from '../images/brand-5.png'
import brand6 from '../images/brand-6.png'

import brand7 from '../images/brand-7.png'
import brand8 from '../images/brand-8.png'
import brand9 from '../images/brand-9.png'
import brand10 from '../images/brand-10.png'
import brand11 from '../images/brand-11.png'
import brand12 from '../images/brand-12.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Brands(props) {

    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])

    return (
       
        <div className='brands-main-container'>
             
            <div className="brand-container" data-aos='fade-up'>
                <h3>Shop by Brand</h3>
                <div className="top-brand-container">
                   <div className="brand brand1"> <img src={brand1} alt="brandLogo" /></div>
                    <div className="brand brand2">  <img src={brand2} alt="brandLogo" /></div>
                  <div className="brand brand2">  <img src={brand3} alt="brandLogo" /></div>
                   <div className="brand brand2">   <img src={brand4} alt="brandLogo" /></div>
                   <div className="brand brand2">   <img src={brand5} alt="brandLogo" /></div>
                   <div className="brand brand2">    <img src={brand6} alt="brandLogo" /></div>
                </div>
                <div className="bottom-brand-container">
                <div className="brand botomBrand">   <img src={brand7} alt="brandLogo" /></div>
                <div className="brand brand2 botomBrand2">   <img src={brand8} alt="brandLogo" /></div>
                 <div className="brand brand2 botomBrand3">   <img src={brand9} alt="brandLogo" /></div>
                <div className="brand brand2 botomBrand4">    <img src={brand10} alt="brandLogo" /></div>
               <div className="brand brand2 botomBrand5">    <img src={brand11} alt="brandLogo" /></div>
                <div className="brand brand2 botomBrand6">    <img src={brand12} alt="brandLogo" /></div>
                </div> 
            </div>
           
        </div>
    );
}

export default Brands;