import React, {useEffect} from 'react';
import './Sellingproducts.css'

import star from '../images/star.png'
import laptop from '../images/laptopimg.jpg'
import fan from '../images/fanproduct.jpg'
import mobile from '../images/mobileproduct.jpg'
import mouse from '../images/mouseproduct.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sellingproducts(props) {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])

    return (
        <div className='sellingproducts-main-container' >
            <h1>Top Selling Products</h1>
            <div className="sellingproducts-second-container" data-AOS='fade-right'>
             <div class="selling-product-container">
               <div className="laptop-image"> <img src={mobile} alt="img"/></div>
                <div className="product-second-container">
                <div className="rate-images">
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                </div>
                <p>Senmei ipsum dolore eiusmod dolor officia do nisi</p>
                <div className="product-price">
                <h3 id='change-gray-color'>$20.64</h3>
                <h3 id='change-red-color'>$27.61</h3>
                </div>
                <button>Add to Card</button>
                </div>
            </div>

            <div class="selling-product-container2">
               <div className="laptop-image"> <img src={laptop} alt="img"/></div>
                <div className="product-second-container">
                <div className="rate-images">
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                </div>
                <p>Senmei ipsum dolore eiusmod dolor officia do nisi</p>
                <div className="product-price">
                <h3 id='change-gray-color'>$20.64</h3>
                <h3 id='change-red-color'>$27.61</h3>
                </div>
                <button>Add to Card</button>
                </div>
            </div>
            
            </div>




            <div className="sellingproducts-second-container" data-AOS='fade-left'>
             <div class="selling-product-container">
               <div className="laptop-image"> <img src={mouse} alt="img"/></div>
                <div className="product-second-container">
                <div className="rate-images">
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                </div>
                <p>Senmei ipsum dolore eiusmod dolor officia do nisi</p>
                <div className="product-price">
                <h3 id='change-gray-color'>$20.64</h3>
                <h3 id='change-red-color'>$27.61</h3>
                </div>
                <button>Add to Card</button>
                </div>
            </div>
            <div className="products-second-container2">
            <div class="selling-product-container2">
               <div className="laptop-image"> <img src={fan} alt="img"/></div>
                <div className="product-second-container">
                <div className="rate-images">
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                    <img src={star} alt="img" />
                </div>
                <p>Senmei ipsum dolore eiusmod dolor officia do nisi</p>
                <div className="product-price">
                <h3 id='change-gray-color'>$20.64</h3>
                <h3 id='change-red-color'>$27.61</h3>
                </div>
                <button>Add to Card</button>
                </div>
            </div>
            </div>
            
            </div>




        </div>
    );
}

export default Sellingproducts;