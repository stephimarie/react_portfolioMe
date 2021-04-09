import React, { useState } from 'react';
import { link }  from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <link to="/" className="navbar-logo">
                         SM <i class="fab fa-stripe-s"></i>
                    </link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                </div>
            </nav>        
       </>
    )
}

export default Navbar
