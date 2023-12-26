import React, {useState, useEffect} from 'react';
import './Clock.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import gaming from '../images/gaming.png'
import google from '../images/google.PNG'

function Clock(props) {

    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])
 

    const [dateState, setDateState] = useState(new Date());
    dateState.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
          
    }, []);

    return (
        <div className='clock-main-container'>
            
        <div className="clock-container">
           
         <div className='clockimage' data-AOS='fade-right'>
         <div className="digital-clock" >
                <div className='clock1'><h1>24</h1></div>
                <div className='days-clock-container' ><h5>Days</h5></div>
                <div className='clock2' > <h1>12</h1></div>
                <div className='days-clock-container' ><h5>Hours</h5></div>
                <div className='clock3' ><h1>
            {dateState.toLocaleString('en-US', {
                minute: 'numeric'
            })}</h1></div>
            <div className='days-clock-container' ><h5>Minutes</h5></div>
                <div className='clock4'><h1> {dateState.toLocaleString('en-US', {
                second: 'numeric'
            })}</h1></div>
            <div className='days-clock-container' ><h5>Seconds</h5></div>
            </div>
            <h2 >WOO! Flash Sale</h2>
            <h6>Shop now</h6>
            
            <img src={gaming} alt="img" />

             </div>  
           <div className="googleimage" data-AOS='fade-left'> <img src={google} alt="img" /></div>
        </div>
       

        {/* <img src={clockimage} alt="img" /> */}

            
        </div>
    );
}

export default Clock;