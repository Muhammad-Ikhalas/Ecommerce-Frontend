import React from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="parent-div-checkout">
        <h1>Check Out</h1>
        <div className="checkout-login">
          <button onClick={() => navigate("/login")}>
            {" "}
            Login to your account
          </button>
        </div>
        <div className="billing-details">
          <div className="checkout-firstname">
            <p className="checkout-p">First Name*</p>
            <input
              className="checkout-inputbox"
              placeholder="Enter First Name"
            />
          </div>
          <div className="checkout-lastname">
            <p className="checkout-p">Last Name*</p>
            <input
              className="checkout-inputbox"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div className="billing-details">
          <div className="checkout-firstname">
            <p className="checkout-p">Email Address*</p>
            <input
              className="checkout-inputbox"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="checkout-lastname">
            <p className="checkout-p">Phone Number*</p>
            <input
              className="checkout-inputbox"
              placeholder="Enter Your Phone Number"
            />
          </div>
        </div>

        <div className="billing-details">
          <div className="checkout-lastname">
            <p className="checkout-p">Country*</p>
            <input
              className="checkout-inputbox new-input"
              placeholder="Enter Your Country"
            />
          </div>
        </div>

        <div className="billing-details">
          <div className="checkout-lastname">
            <p className="checkout-p">Address*</p>
            <input
              className="checkout-inputbox new-input"
              placeholder="Enter Your Address"
            />
          </div>
        </div>

        <div className="billing-details">
          <div className="checkout-firstname">
            <p className="checkout-p">Town/City*</p>
            <input
              className="checkout-inputbox"
              placeholder="Enter Your Town"
            />
          </div>
          <div className="checkout-lastname">
            <p className="checkout-p">Postcode/Zip*</p>
            <input className="checkout-inputbox" placeholder="Enter Your Zip" />
          </div>
        </div>

        <div className="checkout-checkbox">
          <input type="checkbox" />
          <p className="checkout-para">Create an account?</p>
        </div>
        <div className="checkout-footer-login">
          <h3>Billing Details</h3>
          <input type="checkbox" />
          <p className="checkout-para">Ship to difference address</p>
        </div>
      </div>
    </>
  );
}

export default Checkout;
