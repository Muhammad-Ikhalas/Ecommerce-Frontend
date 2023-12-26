import React, {useEffect} from 'react';

import './Popularsales.css'
import Longarow from '../images/long-arrow-right.png'
import Productimg2 from '../images/product-img-2.jpg'
import Productimg3 from '../images/product-img-3.jpg'
import Productimg4 from '../images/product-img-4.jpg'
import Productimg5 from '../images/product-img-5.jpg'
import Productimg6 from '../images/product-img-6.jpg'
import Productimg7 from '../images/product-img-7.jpg'
import Productimg8 from '../images/product-img-8.jpg'
import Productimg9 from '../images/product-img-9.jpg'
import Gameicon from '../images/game.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Popularsales(props) {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])

    return (
        <>
            <div className='popular-parent' >

<div className="popular-header">
    <h1>Popular Sales</h1>
    <h6>View More </h6>
    <div className="Arrow-popular">
    <img src={Longarow} alt="img" />
    </div>
    
</div>
<div className="Popular-main-container" data-AOS='fade-up'>
    <div className="First-block">
        <img src={Gameicon} alt="img" />
        <p className='product-name-popular'>Xoggle aute et pariatur...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>
    </div>

    <div className="Second-block">
        <img src={Productimg2 } alt="img" />
        <p className='product-name-popular'>Canopoly duis volupe...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>

    </div>

    <div className="Third-block">
        <img src={Productimg3 } alt="img" />
        <p className='product-name-popular'>Anarco aute consectet...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>

    </div>
    
</div>



<div className="Popular-main-container" data-AOS='fade-up'>
    <div className="First-block">
        <img src={Productimg4 } alt="img" />
        <p className='product-name-popular'>Geeky repreh aute est...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>
    </div>

    <div className="Second-block">
        <img src={Productimg5} alt="img" />
        <p className='product-name-popular'>Unisure aliqua repreh...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>

    </div>

    <div className="Third-block">
        <img src={Productimg6} alt="img" />
        <p className='product-name-popular'>Plasto cillum ad minim...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>

    </div>
    
</div>

 {/* <div className="main-class-popular"> */}
<div className="Popular-main-container" data-AOS='fade-up'>
    <div className="First-block">
        <img src={Productimg7} alt="img" />
        <p className='product-name-popular'>Conjuricate eiusmod...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>
    </div>

    <div className="Second-block">
        <img src={Productimg8 } alt="img" />
        <p className='product-name-popular'>Kenegy consectetur id ...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>

    </div>

    <div className="Third-block">
        <img src={Productimg9 } alt="img" />
        <p className='product-name-popular'>Conjurica auteea magna ...</p>
         <p className='update-price'> <strike>$27.27</strike>  <span> $18.73 </span></p>

    </div>
    
</div>
{/* </div> */}


</div>
        </>
    );
}

export default Popularsales;