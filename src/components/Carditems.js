import React from 'react';
import { Link } from 'react-router-dom';

function CardItems() {
    return (
        <>
         <li className="cards__item">
             <link className="cards__items__link">
                 <figure className="cards__item__pic-wrap">
                     <img src="/" alt="Travel Image" 
                     className="cards__item__img"/>
                 </figure>
                 <div className='cards__item__info'>
                    <h5 className='cards__item__text'></h5>
                 </div>
             </link>
         </li>
        </>
    )
}

export default CardItems
