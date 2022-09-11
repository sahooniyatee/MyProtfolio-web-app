import React from "react";
import './Card.css';
const Card = ({emoji,heading,details}) => {
    return(
        <div className="card">
            <img src={emoji} alt="emoji" />
            <span>{heading}</span>
            
            <span>{details}</span>
            <a target='/' href="https://www.figma.com/file/ax5xD7P1qTQuCXXLQj6neS/REFLECTION-e-Magazine?node-id=0%3A1" style={{textDecoration:'none'}}>
            <button className="c-button">MY WORK</button></a>
        </div>
    )
}
export default Card;