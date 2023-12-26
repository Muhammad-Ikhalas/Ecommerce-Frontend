import React, {useState} from "react";

import "./HeaderMenuBar.css";
import dropdown from "../images/dropdown-icon.png";
import alignment from "../images/alignment.png";
import morethan from "../images/more-than-2.png"
import {useNavigate} from 'react-router-dom'

function HeaderMenuBar(props) {
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false);



 
    
   
 
  return (
    <>
      <div className="header-main-container">
        <div className="header-dropdown">
          <div className="header-first-container" onClick={() => setIsVisible(!isVisible)}>
         {/* {isVisible ? "Hide" : "Show"} */}
            <img src={alignment} alt="img" />
            <ul>
              <li >
                All Categories
              
              </li>
            </ul>
            <div className="dropdown-category" style={{ display: isVisible ? "block" : "none" }} >
                    <div className="inner-dropdown-category">
                      <p onClick={()=> navigate('/')}>Mobile & Laptop</p>
                      <p onClick={()=> navigate('/bestsaller')}>Gaming Entertainment</p>
                      <p onClick={()=> navigate('/brands')}>Image & Video</p>
                      <p onClick={()=> navigate('/sellingproducts')}>Furnitures</p>
                      <p onClick={()=> navigate('/cards')}>Sports</p>
                      <p onClick={()=> navigate('/popularsales')}>Food & Drinks</p>
                      <p onClick={()=> navigate('/brands')}>Fashion Accessories</p>
                      <p onClick={()=> navigate('/bestsaller')}>Makup Corner</p>
                      <p onClick={()=> navigate('/sellingproducts')}>Baby Items</p>
                      
                    </div>
               </div>
            <div id="header-arrow-icon">
              <img src={dropdown} alt="img" />
            </div>
          </div>
        </div>

        <div className="header-menubar">
          <div className="header-container">
            <ul>
              <li onClick={()=> navigate('/')}>Home</li>
              <li onClick={()=> navigate('/cards')}>Shop</li>
              <li onClick={()=> navigate('/bestsaller')}>Pages</li>
              <li onClick={()=> navigate('/bestsaller')}>Blog</li>
              <li onClick={()=> navigate('/popularsales')}>About</li>
              <li onClick={()=> navigate('/contact')}>Contact</li>
            </ul>
          </div>
          
        </div>

        <div className="header-seller-btn" >
          
            Become a Seller
          <img src={morethan} alt="img" />          
        </div>
      </div>
    </>
  );
}

export default HeaderMenuBar;
