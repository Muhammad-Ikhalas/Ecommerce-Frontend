import React, { useContext, useState, useEffect } from "react";

import "./Addcarts.css";
import Mycontext from "../context/Context";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Addcarts(props) {
  const navigate = useNavigate();
  const { cartimages } = useContext(Mycontext);
  const { countgame, setCountgame } = useContext(Mycontext);
  const { countrobot, setCountrobot } = useContext(Mycontext);
  const { countdrown, setCountdrown } = useContext(Mycontext);
  const [student, setStudent] = useState({
    day: "",
  });

  function changeHandler(event) {
    setStudent({ ...student, day: event.target.value });
    console.log(student);
  }

  const increaseHandler1 = () => {
    setCountgame(countgame + 1);
  };
  const decreaseHandler1 = () => {
    if (countgame > 0) {
      setCountgame(countgame - 1);
    }
  };

  const increaseHandler2 = () => {
    setCountrobot(countrobot + 1);
  };
  const decreaseHandler2 = () => {
    if (countrobot > 0) {
      setCountrobot(countrobot - 1);
    }
  };

  const increaseHandler3 = () => {
    setCountdrown(countdrown + 1);
  };
  const decreaseHandler3 = () => {
    if (countdrown > 0) {
      setCountdrown(countdrown - 1);
    }
  };

  return (
    <>
      <div className="wishlist-main-container">
        <h1>Add To Card List</h1>
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

        {cartimages.game ? (
          <div className="game-product">
            <img src={cartimages.game} alt="img" />
            <h5>iPhone 12 Pro Max 128GB</h5>
            <div className="rounded-color"></div>
            <h6>Small</h6>
            <h6>$38</h6>
            <div className="quantity-state">
              <button onClick={increaseHandler1}>+</button>
              <p>{countgame}</p>
              <button onClick={decreaseHandler1}>-</button>
            </div>
            <h6>$38</h6>
          </div>
        ) : null}

        {cartimages.robot ? (
          <div className="game-product">
            <img src={cartimages.robot} alt="img" />
            <h5>iPhone 12 Pro Max 128GB</h5>
            <div className="rounded-color"></div>
            <h6>Small</h6>
            <h6>$38</h6>
            <div className="quantity-state">
              <button onClick={increaseHandler2}>+</button>
              <p>{countrobot}</p>
              <button onClick={decreaseHandler2}>-</button>
            </div>
            <h6>$38</h6>
          </div>
        ) : null}

        {cartimages.drown ? (
          <div className="game-product">
            <img src={cartimages.drown} alt="img" />
            <h5>iPhone 12 Pro Max 128GB</h5>
            <div className="rounded-color"></div>
            <h6>Small</h6>
            <h6>$38</h6>
            <div className="quantity-state">
              <button onClick={increaseHandler3}>+</button>
              <p>{countdrown}</p>
              <button onClick={decreaseHandler3}>-</button>
            </div>
            <h6>$38</h6>
          </div>
        ) : null}
      </div>
      {cartimages.game || cartimages.robot || cartimages.drown ? (
        <div className="shipping-contianer">
          <div className="subtotal">
            <h6>Subtotal</h6>
            <span>$350</span>
          </div>
          <div className="shipping">
            <h6>Shipping</h6>
            <div className="free-shipping">
              <input type="radio" id="radio-btn" name="group" />
              <span>Free Shipping</span> <p>+$0000</p>
            </div>
            <div className="flat-rate">
              <input type="radio" id="radio-btn" name="group" />{" "}
              <span>Flat Rate</span> <p>+$0000</p>
            </div>
            <div className="lacal-delivery">
              <input type="radio" id="radio-btn" name="group" />{" "}
              <span>Local Delivery</span> <p>+$0000</p>
            </div>
          </div>
          <div className="calculating-shipping">
            <div className="calculating">
              <h1>Calculating Shipping</h1>
            </div>
            <InputLabel
              className="select-country"
              id="demo-simple-select-label"
            >
              Country
            </InputLabel>
            <Select
              className="setdate day"
              onChange={changeHandler}
              value={student.day}
              placeholder="Day"
              labelId="demo-simple-select-label"
              id="day"
              name="day-input"
              defaultValue="Sunday"
            >
              <MenuItem value="pakistan">Pakistan</MenuItem>
              <MenuItem value="afghnistan">Afghanistan</MenuItem>
              <MenuItem value="india">India</MenuItem>
              <MenuItem value="bangladah">Bangladash</MenuItem>
              <MenuItem value="turki">Turki</MenuItem>
              <MenuItem value="englan">England</MenuItem>
              <MenuItem value="atli">Atli</MenuItem>
            </Select>

            <InputLabel
              className="select-country"
              id="demo-simple-select-label"
            >
              Postcode / ZIP
            </InputLabel>
            <Select
              className="setdate day"
              onChange={changeHandler}
              value={student.day}
              placeholder="Day"
              labelId="demo-simple-select-label"
              id="day"
              name="day-input"
              defaultValue="Sunday"
            >
              <MenuItem value="pakistan">1010</MenuItem>
              <MenuItem value="afghnistan">1001</MenuItem>
              <MenuItem value="india">1011</MenuItem>
              <MenuItem value="bangladah">4021</MenuItem>
              <MenuItem value="turki">2312</MenuItem>
              <MenuItem value="englan">3002</MenuItem>
              <MenuItem value="atli">1234</MenuItem>
              <MenuItem value="atli">1002</MenuItem>
              <MenuItem value="atli">1004</MenuItem>
              <MenuItem value="atli">1005</MenuItem>
              <MenuItem value="atli">1034</MenuItem>
              <MenuItem value="atli">1035</MenuItem>
              <MenuItem value="atli">1025</MenuItem>
              <MenuItem value="atli">10215</MenuItem>
              <MenuItem value="atli">102135</MenuItem>
              <MenuItem value="atli">10125</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
              <MenuItem value="atli">17025</MenuItem>
            </Select>
          </div>
          <div className="total-amount">
            <h6>Total</h6>
            <span>$365</span>
          </div>
          <button onClick={() => navigate("/checkout")}>
            Procceed to CheckOut
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Addcarts;
