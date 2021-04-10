import React from 'react'
import CardItems from './Carditems'

function Cards() {
    return (
        <div className='cards'>
            <h1>My Portfolio</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
