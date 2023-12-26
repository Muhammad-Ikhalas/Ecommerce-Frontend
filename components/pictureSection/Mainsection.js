import React, { useEffect, useState } from "react";

import freeshipping from "../images/freeshoping.PNG";
import xbox from "../images/xbox-5th-version.PNG";
import apple from "../images/apple-smart-watch.PNG";
import samsung from "../images/samsung.PNG";
import "./Mainsection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Cardone from "../card1box/Cardone";
import Brands from "../shopBrands/Brands";
import Clock from "../usingClock/Clock";
import Bestsaller from "../bestSeller/Bestsaller";
import Popularsales from "../popularsales/Popularsales";
import Sellingproducts from "../sellingProducts/Sellingproducts";
import Thirdsection from "../thirstsection/Thirdsection";
import Addcarts from "../addCarts/Addcarts";

function Mainsection(props) {
  const [count, setCount] = useState(0);

  const handleClick = (increment) => {
    setCount(count + increment);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="main-section">
        <section className="top-container">
          <header className="showcase">
            <img src={samsung} alt="" />
          </header>

          <div className="top-box top-box-a">
            <img src={apple} alt="" />
          </div>

          <div className="top-box top-box-b">
            <img src={xbox} alt="" />
          </div>
        </section>
        <div className="freeshipping" data-aos="fade-up">
          <img src={freeshipping} alt="img" />
        </div>
      </div>
      {/* {<Thirdsection/>} */}

      {<Brands />}
      {<Clock />}
      {
        <Cardone
          handleClick={props.handleClick}
          carthandleClick={props.carthandleClick}
        />
      }
      {<Sellingproducts />}
      {/* {<Addcarts />} */}
      {<Bestsaller />}
      {<Popularsales />}
    </>
  );
}

export default Mainsection;
