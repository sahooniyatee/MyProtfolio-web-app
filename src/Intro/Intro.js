import React from "react";
import Github from '../img/github.png';
import LinkedIn from '../img/linkedin.png';
import Instagram from '../img/instagram.png';
import twitter from '../img/twit.png';
import Vector1 from '../img/Vector1.png';
import Vector2 from '../img/Vector2.png';
import crown from '../img/crown.png';
import thumbup from '../img/thumbup.png';
import glassesimoji from '../img/glassesimoji.png';
import niyu from '../img/boy.png';

import FloatingDiv from "../Components/FloatingDiv/FloatingDiv";
import './Intro.css';
import {motion} from 'framer-motion';
const Intro = () => {
    const transition = {duration : 2 , type: 'spring'}
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am<br/></span>
                    <span>Niyatee Sahoo<br/></span>
                    <span>Frontend Developer in Web Designing and Devement ,producing the quality work</span>
                </div>
                <button className=" button i-button">HireMe</button>
                <div className="i-icon">
                <a target='/' href="https://github.com/sahooniyatee" >
                <img src={Github} alt="github icon" />
                </a>
                    <a target='/' href="https://www.linkedin.com/feed/">
                    <img src={LinkedIn} alt="github icon" />
                    </a>
                    <a target='/' href="https://www.instagram.com/niyatee_sahoo_2000/">
                    <img src={Instagram} alt="github icon" />
                    </a>
                    {/* <a  className="twit" target='/' href="https://www.instagram.com/niyatee_sahoo_2000/">
                    <img src={twitter} alt="github icon" />
                    </a> */}
                    
                </div>
            </div>
            <div className="i-right">
            

                <img src={Vector1} alt="vector" />
                <img src={Vector2} alt="vector" />
                <motion.img
                   initial={{left:'-36%' }}
                   whileInView={{left:'-24%'}}
                   transition={transition}
                
                 src={glassesimoji} alt="vector" />
                <img src={niyu} alt="vector" className="mypic"/>
                <motion.div 
                     initial={{top:'-0.5%' , left:'74%' }}
                   whileInView={{left:'68%'}}
                   transition={transition}
                
                style={{top:'-0.5%',left:'68%'}}>
                <FloatingDiv img={crown} txt1='Web' txt2='Deveoper'/>
                </motion.div>
                <motion.div
                 initial={{left:'20rem' , top:'15rem' }}
                   whileInView={{left:'7%'}}
                   transition={transition}
                
                 style={{top:'15rem',left:'15rem'}}>
                <FloatingDiv img={thumbup} txt1='Web' txt2='Design'/>
                </motion.div>
                <div className="blur" style={{background:"rgba(238 150 155)"}}></div>
                <div className="blur" style={{background:'#C1F9FF',top:'11rem',width:'21rem',height:'11rem',left:'-10rem'}}></div>
            </div>
        </div>
    )
}
export default Intro;