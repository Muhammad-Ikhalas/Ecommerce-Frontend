import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Abovefooter from "./components/aboveFooter/Abovefooter";
import Bestsaller from "./components/bestSeller/Bestsaller";
import Cardone from "./components/card1box/Cardone";
import Footer from "./components/footer/Footer";
import HeaderMenuBar from "./components/headerMenuBar/HeaderMenuBar";
import Menubar from "./components/menuBar/Menubar";
import Secondsection from "./components/menuBar/Secondsection";
import Mainsection from "./components/pictureSection/Mainsection";
import Popularsales from "./components/popularsales/Popularsales";
import Sellingproducts from "./components/sellingProducts/Sellingproducts";
import Brands from "./components/shopBrands/Brands";
import Thirdsection from "./components/thirstsection/Thirdsection";
import Clock from "./components/usingClock/Clock";
import "./App.css";
import CrossButton from "./components/images/cross-mark-button.png";
import LOGO from "./components/images/logo.svg";
import OnfreshHeadphones from "./components/images/headphones.png";
import Wishlist from "./components/wishlists/Wishlist";
import Contact from "./components/contactus/Contact";
import Reducer from "./components/context/Reducer";
import Addcarts from "./components/addCarts/Addcarts";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";

function App() {
  const [show, setShow] = useState(false);

  const [heart, setHeart] = useState("");

  const handleheart = (value) => {
    setHeart(value);
  };

  const [count, setCount] = useState(0);

  const handleClick = (increment) => {
    setCount(count + increment);
  };

  const [countcart, setCountcart] = useState(0);

  const carthandleClick = (increment) => {
    setCountcart(countcart + increment);
  };

  useEffect(() => {
    const element = document.querySelector(".main-parent-CSSContainerRule");
    element.style.display = !show ? "block" : "none";
  }, [show]);

  const clickHandler = () => {
    setShow(true);
  };

  return (
    <>
      <Reducer>
        <Menubar />
        <Secondsection />
        <Thirdsection count={count} countcart={countcart} />
        <HeaderMenuBar />

        <Routes>
          <Route
            path="/"
            element={
              <Mainsection
                handleClick={handleClick}
                carthandleClick={carthandleClick}
              />
            }
          />
          <Route
            path="/cards"
            element={
              <Cardone handleClick={handleClick} setHeart={handleheart} />
            }
          />
          <Route path="/brands" element={<Brands />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/sellingproduct" element={<Sellingproducts />} />
          <Route path="/bestsaller" element={<Bestsaller />} />
          <Route path="/popularsales" element={<Popularsales />} />
          <Route path="/wishlist" element={<Wishlist heart={heart} />} />
          <Route path="/addtocarts" element={<Addcarts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Abovefooter />
        <Footer />
      </Reducer>

      {
        <div className="main-parent-CSSContainerRule">
          <div className="refresh-main-container">
            <img
              onClick={clickHandler}
              className="Cross-img"
              src={CrossButton}
              alt="img"
            />
            <img className="LOGO-refresh" src={LOGO} alt="img" />
            <h6>by Subscribe our Newslette</h6>
            <h1>
              Get <span>20%</span> Off Discount Coupon
            </h1>
            <div className="Refresh-para-class">
              <p>
                Get has been the industry's standard dummy text ever andmen
                unlimiedted offer book.
              </p>
            </div>
            <div className="Headphone-img">
              <img src={OnfreshHeadphones} alt="img" />
            </div>
            <input type="text" placeholder="Enter Your Email" />
            <button>Get the Coupon</button>
          </div>
        </div>
      }
    </>
  );
}

export default App;
