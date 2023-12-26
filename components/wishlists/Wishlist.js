import React, { useState , useContext, useEffect} from 'react';
import './Wishlist.css'
import Mycontext from '../context/Context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Wishlist(props) {
    const {images} = useContext(Mycontext)
    const {countgame, setCountgame} = useContext(Mycontext)
    const {countrobot, setCountrobot} = useContext(Mycontext)
    const {countdrown, setCountdrown} = useContext(Mycontext)
    


    const increaseHandler1 =()=>{

        setCountgame(countgame+1)
    }
    const decreaseHandler1 =()=>{
        if (countgame > 0){
        setCountgame(countgame-1)
        }
    }




    const increaseHandler2 =()=>{

        setCountrobot(countrobot+1)
    }
    const decreaseHandler2 =()=>{
        if (countrobot > 0){
        setCountrobot(countrobot-1)
        }
    }




    const increaseHandler3 =()=>{

        setCountdrown(countdrown+1)
    }
    const decreaseHandler3 =()=>{
        if (countdrown > 0){
        setCountdrown(countdrown-1)
        }
    }




    

    return (
        <>
            <div className="wishlist-main-container">
                <h1>Wish List</h1>
                <div className="product-details">
                    <h2>Product</h2>
                    <h3>Color</h3>
                    <h3>Size</h3>
                    <h3>Price</h3>
                    <h3>Quantity </h3>
                    {/* <div className="heart-icon">
      <FontAwesomeIcon icon={faHeart} />
    </div> */}
                    <h3>Total</h3>
                </div>
                
                
               {images.game? <div className="game-product">
                    <img src={images.game} alt="img" />
                    <h5>iPhone 12 Pro Max 128GB</h5>
                    <div className='rounded-color'></div>
                    <h6>Small</h6>
                    <h6>$38</h6>
                    <div className="quantity-state">
                        <button onClick={increaseHandler1}>+</button>
                        <p>{countgame}</p>
                        <button onClick={decreaseHandler1}>-</button>
                    </div>
                    <h6>$38</h6>
                </div>:null}

                {images.robot?
                <div className="game-product">
                    <img src={images.robot} alt="img" />
                    <h5>iPhone 12 Pro Max 128GB</h5>
                    <div className='rounded-color'></div>
                    <h6>Small</h6>
                    <h6>$38</h6>
                    <div className="quantity-state">
                        <button onClick={increaseHandler2}>+</button>
                        <p>{countrobot}</p>
                        <button onClick={decreaseHandler2}>-</button>
                    </div>
                    <h6>$38</h6>
                </div>:null}


                {images.drown?
                <div className="game-product">
                    <img src={images.drown} alt="img" />
                    <h5>iPhone 12 Pro Max 128GB</h5>
                    <div className='rounded-color'></div>
                    <h6>Small</h6>
                    <h6>$38</h6>
                    <div className="quantity-state">
                        <button onClick={increaseHandler3}>+</button>
                        <p>{countdrown}</p>
                        <button onClick={decreaseHandler3}>-</button>
                    </div>
                    <h6>$38</h6>
                </div>:null}

            </div>
            
        </>
    );
}

export default Wishlist;