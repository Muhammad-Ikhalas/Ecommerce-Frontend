import React, { useState, useEffect, useContext } from "react";

import "./Cardone.css";
import game from "../images/product-img-1.jpg";
import robot from "../images/product-img-2.jpg";
import drown from "../images/product-img-3.jpg";
import watch from "../images/apple-smart-watch.PNG";
import star from "../images/star.png";
import crossArrow from "../images/crossarrow.png";
import heartIcon from "../images/hearts.png";
import refreshIcon from "../images/refresh.png";
import lockimg from "../images/lock-2.png";
import Mycontext from "../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";

function Cardone(props) {
  const { images, setImages } = useContext(Mycontext);
  const { countgame, setCountgame } = useContext(Mycontext);
  const { countrobot, setCountrobot } = useContext(Mycontext);
  const { countdrown, setCountdrown } = useContext(Mycontext);
  const { cartimages, setCartimages } = useContext(Mycontext);
  const [isHovered, setIsHovered] = useState(false);
  const [isrobot, setIsrobot] = useState(false);
  const [isdrown, setIsdrown] = useState(false);
  const [isClickedheart, setIsClickedheart] = useState(false);
  const [isClickedrobot, setIsClickedrobot] = useState(false);
  const [isClickeddrown, setIsClickeddrown] = useState(false);

  const heartIconHandler = () => {
    props.handleClick(1);
    setImages({
      ...images,
      game: game,
    });

    setCountgame(countgame + 1);

    setIsClickedheart(true);

    console.log(isClickedheart);
    console.log(images.game);
    console.log(countgame);
  };

  const robotHandler = () => {
    props.handleClick(1);
    setImages({
      ...images,
      robot: robot,
    });
    setCountrobot(countrobot + 1);
    setIsClickedrobot(true);

    console.log(images.robot);
  };

  const drownHandler = () => {
    props.handleClick(1);
    setImages({
      ...images,
      drown: drown,
    });
    setCountdrown(countdrown + 1);
    setIsClickeddrown(true);

    console.log(images.drown);
  };

  const gameCartHandler = () => {
    props.carthandleClick(1);
    setCartimages({
      ...cartimages,
      game: game,
    });
  };

  const robotCartHandler = () => {
    props.carthandleClick(1);
    setCartimages({
      ...cartimages,
      robot: robot,
    });
  };

  const drownCartHandler = () => {
    props.carthandleClick(1);
    setCartimages({
      ...cartimages,
      drown: drown,
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="cardsone" data-aos="fade-down">
      <h1>Gamer World</h1>
      <section class="boxes">
        <div class="box watch">
          <img src={watch} alt="logo" />
        </div>

        <div
          class="box boxgame"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: "pointer" }}
        >
          <img src={game} alt="logo" />
          <div className="star-images">
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
          </div>
          <p>Xoggle aute et pariatur adipisicing nostrud et...</p>
          <div className="card-price">
            <h3 id="gray-color">$27.27</h3>
            <h3 id="red-color">$17.73</h3>
          </div>
          {isHovered && (
            <div className="add-cards-btn" data-AOS="fade-top">
              <button
                onClick={gameCartHandler}
                style={{ display: "block", transition: "all 0.3s ease-in-out" }}
              >
                Add To Carts
              </button>
              {/* <img src={lockimg} alt="" /> */}
            </div>
          )}
          {isHovered && (
            <div
              className="add-cards-icon"
              style={{ display: "block", transition: "all 0.3s ease-in-out" }}
              data-AOS="fade-left"
            >
              <div className="cross-arrow">
                <img src={crossArrow} alt="img" />
              </div>
              <div className="heart-icon" onClick={heartIconHandler}>
                <img
                  style={
                    isClickedheart
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  src={heartIcon}
                  alt="img"
                />
              </div>
              <div className="refresh-icon">
                <img src={refreshIcon} alt="img" />
              </div>
            </div>
          )}
        </div>

        <div
          class="box boxrobot"
          onMouseEnter={() => setIsrobot(true)}
          onMouseLeave={() => setIsrobot(false)}
          style={{ cursor: "pointer" }}
        >
          <img src={robot} alt="logo" />
          <div className="star-images">
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
          </div>
          <p>Geeky ipsum esse repreh est consequat</p>
          <div className="card-price">
            <h3 id="gray-color">$24.55</h3>
            <h3 id="red-color">$17.79</h3>
          </div>
          {isrobot && (
            <div className="add-cards-btn" data-AOS="fade-top">
              <button style={{ display: "block" }} onClick={robotCartHandler}>
                Add To Carts
              </button>
              {/* <img src={lockimg} alt="" /> */}
            </div>
          )}
          {isrobot && (
            <div
              className="add-cards-icon"
              style={{ display: "block", transition: "all 0.3s ease-in-out" }}
              data-AOS="fade-left"
            >
              <div className="cross-arrow">
                {" "}
                <img src={crossArrow} alt="img" />
              </div>
              <div className="heart-icon" onClick={robotHandler}>
                {" "}
                <img
                  style={
                    isClickedrobot
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  src={heartIcon}
                  alt="img"
                />
              </div>
              <div className="refresh-icon">
                <img src={refreshIcon} alt="img" />
              </div>
            </div>
          )}
        </div>

        <div
          class="box boxdrown"
          onMouseEnter={() => setIsdrown(true)}
          onMouseLeave={() => setIsdrown(false)}
          style={{ cursor: "pointer" }}
        >
          <img src={drown} alt="logo" />
          <div className="star-images">
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
          </div>
          <p>eiusmod esse cupt anim... aliquip</p>
          <div className="card-price">
            <h3 id="gray-color">$32.63</h3>
            <h3 id="red-color">$18.03</h3>
          </div>
          {isdrown && (
            <div className="add-cards-btn" data-AOS="fade-top">
              <button style={{ display: "block" }} onClick={drownCartHandler}>
                Add To Carts
              </button>
              {/* <img src={lockimg} alt="" /> */}
            </div>
          )}
          {isdrown && (
            <div
              className="add-cards-icon"
              style={{ display: "block", transition: "all 0.3s ease-in-out" }}
              data-AOS="fade-left"
            >
              <div className="cross-arrow">
                {" "}
                <img src={crossArrow} alt="img" />
              </div>
              <div className="heart-icon" onClick={drownHandler}>
                {" "}
                <img
                  style={
                    isClickeddrown
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                  src={heartIcon}
                  alt="img"
                />
              </div>
              <div className="refresh-icon">
                {" "}
                <img src={refreshIcon} alt="img" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Cardone;
