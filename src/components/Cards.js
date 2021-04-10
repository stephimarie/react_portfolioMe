import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>My Portfolio</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
                        <CardItem 
                        src="../images/inhuman_murder_mystery.jpg"
                        text="A new twist to the traditional murder mystery game. 
                        An exciting sim created every time you play just choose your character."
                        label='Game'
                        path='/portfolio'
                        />
                           <CardItem 
                        src="../images/inhuman_murder_mystery.jpg"
                        text="A new Community that you will want to grow with. 
                        Learn a new language with friends from all over the world."
                        label='Languages'
                        path='/portfolio'
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="../images/Yoda_Me.png"
                        text="Master Yoda will give you a daily horoscope in his unique way only he can do."
                        label='Horoscope'
                        path='/portfolio'
                        />
                           <CardItem 
                        src="../images/PORTRAIT_COVER.jpeg"
                        text="A great way to keep you health and on track to reach your goals."
                        label='Workout tracker'
                        path='/portfolio'
                        />
                           <CardItem 
                        src="../images/password-wizard.png"
                        text="Let the wizard create your new password its a fun way to create a new password."
                        label='Password'
                        path='/portfolio'
                        />
                           <CardItem 
                        src="../images/inhuman_murder_mystery.jpg"
                        text="TBD"
                        label='TBD'
                        path='/portfolio'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
