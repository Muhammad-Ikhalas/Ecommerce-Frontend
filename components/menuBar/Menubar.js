import React from 'react';
import './Menubar.css'
import img1 from '../images/envato_market-svg.svg'


function Menubar(props) {
    return (
        <>
             <div className="main-container">
        <div className="first-menu-bar">
            {/* <img src={envatoMarket} alt="img"/> */}
            <img src={img1} alt="img"/>
            <span></span>
            <button>Buy now</button>
        </div>
    </div>
        </>
    );
}

export default Menubar;