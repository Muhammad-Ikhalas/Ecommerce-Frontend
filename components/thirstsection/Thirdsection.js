import React, { useState, useContext } from "react";

import "./Thirdsection.css";
import img3 from "../images/logo.svg";
import img4 from "../images/refresh.png";
import img5 from "../images/hearts.png";
import img6 from "../images/lock-2.png";
import img7 from "../images/user.png";
import catogaryIcon from "../images/dropdown-icon.png";
import { useNavigate } from "react-router-dom";
import Mycontext from "../context/Context";

function Thirdsection(props) {
  const navigate = useNavigate();
  const { images } = useContext(Mycontext);
  const { cartimages } = useContext(Mycontext);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringcart, setIsHoveringcart] = useState(false);

  // const [count , setCount]=useState(1);
  // const countHandler = ()=>{
  //     setCount(count+1)
  // }

  return (
    <>
      <div className="third-section-main-container">
        <div className="logo-container">
          <img src={img3} alt="" />
        </div>
        <div className="search-container">
          <input type="text" name="" id="" placeholder="Search Products..." />

          <ul>
            <li>
              All Categories
              <img src={catogaryIcon} alt="" />
              {/* <ul className="mid">
                    <li>United State</li>
                    <li>Bangladash</li>
                    <li>India</li>
                </ul> */}
            </li>
          </ul>
          <button>Search</button>
        </div>

        <div className="icons-container">
          <img src={img4} alt="img" />
          <div className="iconone">
            <h9>2</h9>
          </div>

          <img
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => navigate("/wishlist")}
            className="heartimg-hover"
            src={img5}
            alt="img"
          />

          <div className="icontwo">
            <h9>{props.count}</h9>
          </div>
          <img
            onMouseEnter={() => setIsHoveringcart(true)}
            onMouseLeave={() => setIsHoveringcart(false)}
            onClick={() => navigate("/addtocarts")}
            src={img6}
            alt="img"
          />
          <div className="iconthree">
            <h9>{props.countcart}</h9>
          </div>
          <img src={img7} alt="img" />
        </div>

        <div className="heart-hover-container">
          {isHovering && images.game ? (
            <div className="heart-hover-game">
              <img src={images.game} alt="img" />
              <h5>iPhone 12 Pro Max 128GB</h5>
              <div className="heart-hover-rounded-color"></div>
            </div>
          ) : null}

          {isHovering && images.robot ? (
            <div className="heart-hover-game">
              <img src={images.robot} alt="img" />
              <h5>iPhone 12 Pro Max 128GB</h5>
              <div className="heart-hover-rounded-color"></div>
            </div>
          ) : null}

          {isHovering && images.drown ? (
            <div className="heart-hover-game">
              <img src={images.drown} alt="img" />
              <h5>iPhone 12 Pro Max 128GB</h5>
              <div className="heart-hover-rounded-color"></div>
            </div>
          ) : null}
        </div>

        <div className="cart-hover-container">
          {isHoveringcart && cartimages.game ? (
            <div className="cart-hover">
              <img src={cartimages.game} alt="img" />
              <h5>iPhone 12 Pro Max 128GB</h5>
            </div>
          ) : null}
          {isHoveringcart && cartimages.robot ? (
            <div className="cart-hover">
              <img src={cartimages.robot} alt="img" />
              <h5>iPhone 12 Pro Max 128GB</h5>
            </div>
          ) : null}
          {isHoveringcart && cartimages.drown ? (
            <div className="cart-hover">
              <img src={cartimages.drown} alt="img" />
              <h5>iPhone 12 Pro Max 128GB</h5>
            </div>
          ) : null}
          {isHoveringcart &&
          cartimages.game &&
          cartimages.robot &&
          cartimages.drown ? (
            <button>CheckOut</button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Thirdsection;
