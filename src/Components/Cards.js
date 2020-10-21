import React from 'react';
import CardItem from './CardsItem';
import './Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1> Check these out!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        /> 
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        />     
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        /> 
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        />     
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src = "https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_1280.jpg" 
                        text="Thunder clouds are amazing"
                        label="Adventure"
                        path="/services"
                        />   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;