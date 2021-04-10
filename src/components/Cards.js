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
                        src="images/inhuman_murder_mystery.png"
                        text="A new twist to the traditional murder mystery game. 
                        An exciting sim created every time you play just choose your character."
                        label='Game'
                        path='/portfolio'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
