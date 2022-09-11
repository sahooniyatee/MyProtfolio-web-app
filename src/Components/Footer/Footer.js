import React from "react";
import wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin  from '@iconscout/react-unicons/icons/uil-linkedin';

import "./Footer.css";
import { Link } from "react-scroll";
const Footer = () => {
    return(
        <>
        
        <div className="footer">
            <img src={wave} alt="footer" style={{width:'100%'}} />
            <div className="f-content">
                <span>gudisahoo014@gmail.com</span>
                <div className="f-icons">
                    <Insta color="white" size="3rem" />
                    <Facebook color="white" size="3rem" />
                    <Github color="white" size="3rem" />
                    <Linkedin color="white" size="3rem" /><br/>
                    {/* <p>Thank you for Visiting </p> */}
                    

                </div>
             <p className="thanku">Thank you for Visiting 😄</p>

               <Link spy={true} to='top' smooth={true}> <div className="top">👆</div>
               </Link> 

            </div>
             {/* <h1 className="thanku">Thank you for Visiting </h1> */}
        </div>
        </>
    );
};
export default Footer;