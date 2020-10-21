import React from 'react';
import Button from '../Components/Button';
import './HeroSection.css'

function HeroSection(){
    return (
        <div className="hero-container">
        <video src="https://github.com/briancodex/react-website-v1/blob/master/public/videos/video-1.mp4" autoPlay loop muted></video>
        <h1> UTILITY MANAGER </h1>
        
        <div className="hero-btns"> 
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
        JOIN
        </Button>
        <Button className="btns" buttonSize="btn--large">
        CREATE
        </Button>
        </div>
        <p> Get your utilities right away! </p>

        </div>
    )
}

export default HeroSection;