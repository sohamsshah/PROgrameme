import React from 'react';
import Button from '../Components/Button';
import './HeroSection.css'

function HeroSection(){
    return (
        <div className="hero-container">
        <video src="https://github.com/briancodex/react-website-v1/blob/master/public/videos/video-1.mp4" autoPlay loop muted></video>
        <h1> ADVENTURE AWAITS </h1>
        <p> What are you waiting for? </p>
        <div className="hero-btns"> 
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
        Get STARTED
        </Button>
        <Button className="btns" buttonSize="btn--large">
        ASK QUOTE
        </Button>
        </div>

        </div>
    )
}

export default HeroSection;