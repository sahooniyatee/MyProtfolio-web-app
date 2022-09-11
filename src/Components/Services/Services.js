import React from "react";
import Humble from '../../img/humble.png';
import HeartEmoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import Card from "../Card/Card";
import Resume from "../Services/Niyatee's Resume(new).pdf";
import './Services.css';
import {motion} from 'framer-motion';
const Services = () =>{
    const transition = {duration : 2 , type: 'spring'}
    
    return(
        <div className="services" id='Services'>
        <div className="awesome">
            <span >My Awesome</span>
            <span>Services</span>
            <span>I am a Technology Enthusiasts to know about new Technology and <br/>learning new things
            and   am constantly seeking <br/>out new learning opportunities.</span>
            <a href={Resume} download style={{textDecoration:'none'}}>
            <button className="button s-button" >Download CV</button>
            </a>
        
        <div className="blur s-blur" style={{background:"#ABFlFF94"}}></div>
        </div>
        <div className="cards">
            <motion.div
            initial={{left:'25rem'  }}
                   whileInView={{left:'14rem'}}
                   transition={transition}
            className="cardone"
            style={{left:'13rem', top:'1rem'}}>
                <Card emoji={HeartEmoji} heading='Design' details='Adobe,Canva,Design,Figma' />
            </motion.div> 
            <motion.div
            initial={{left:'-15rem'  }}
                   whileInView={{left:'-4rem',top:'12rem'}}
                   transition={transition}
            className="cardtwo" style={{left:'-6rem',top:'12rem'}}>
                <Card emoji={glasses} heading='Developer' details='Html,CSS,JS,Design,Figma' />
            </motion.div> 
            <motion.div
            initial={{left:'25rem'  }}
                   whileInView={{left:'19rem',top:'19rem'}}
                   transition={transition}
            className="cardtwo" style={{left:'19rem',top:'19rem'}}>
                <Card emoji={Humble} heading='Programmer' details='C,C++,JAVA,PYTHON' />
            </motion.div> 
         </div>
        </div>

    )
}
export default Services;