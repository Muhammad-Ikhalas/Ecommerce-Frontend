import React from 'react';
import './Secondsection.css'
import img2 from '../images/unitedStateimg.png'
import dropdown from '../images/dropdown-icon.png'



function Secondsection(props) {
    return (
        <>
        <div className="section-two-container">
            <div className="section-two-first-div">
                <ul>
                    <li><a href="Account">Account</a></li>
                    <li><a href="Track Order">Track Order</a></li>
                    <li><a href="Support">Support</a></li>
                </ul>
            </div>
        <div className="setion-two-dropdown">
        <div className="container">
        <ul>
        <img src={img2} alt="img"/>
            <li>United State
                <ul className="mid">
                    <li>United State</li>
                    <li>Bangladash</li>
                    <li>India</li>
                </ul>

            </li>
            </ul>

            </div>
            <img src={dropdown} className='dropdown-icon' alt="img" />


            <div className="container">
        <ul>
            <li>BDT
                <ul className="mid">
                    <li>USD</li>
                    <li>BDT</li>
                </ul>
            </li>
            </ul>
            </div>
            <img src={dropdown} className='dropdown-icon-two' alt="img" />






            <div className="container">
        <ul>
            <li>English
                <ul className="mid">
                    <li>English</li>
                    <li>Hindi</li>
                </ul>
            </li>
            </ul>
            </div>
            <img src={dropdown} className='dropdown-icon-three' alt="img" />



        </div>

        </div>
            
        </>
    );
}

export default Secondsection;