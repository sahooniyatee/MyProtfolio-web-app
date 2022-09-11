import React from "react";
import Toogle from "../Toogle/Toogle";
import './Navbar.css';
import {Link} from 'react-scroll';
import {GoThreeBars} from 'react-icons/go';
const Navbar = () => {
    return (
        <>
           <div className="n-wrapper" id='top'>
               <div className="n-left">
                   <div className="n-name">NRS</div>
                   <Toogle/>
                   <div className="n-right">
                       <div className="n-list">
                           <ul>
                                <Link spy={true} to='Navbar' smooth={true} activeclass="activeclass"><li>Home</li></Link>
                                <Link spy={true} to='Services' smooth={true} activeclass="activeclass"><li>Services</li></Link>
                                <Link spy={true} to='Experience' smooth={true} activeclass="activeclass"><li>Experience</li></Link>
                                <Link spy={true} to='Protfolio' smooth={true} activeclass="activeclass"> <li>Protfolio</li></Link>
                                <Link spy={true} to='Testimonial' smooth={true} activeclass="activeclass"> <li>Testimonial</li></Link>
                              
                           </ul>
                       </div>
                    <Link spy={true} to='Contact' smooth={true} activeclass="activeclass"> <button className="button">Contact</button></Link>
                    {/* <button className="nav">
                        <GoThreeBars/>
                    </button> */}
                   </div>
               </div>
           </div>
        </>

    );
};
export default Navbar;