import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';

function homeSection() {
    return (
        <div className='home-container'>
            <h1>Stephanie Marie</h1>
            <p>Full-Stack Developer</p>
            <h5>HTML/CSS | Bootstrap | JavaScript | React </h5>
                <div className="social-media">
                    <a href="https://github.com/stephimarie" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/stephanie-mccandless-76869139/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                </div>
        </div>
    )
}

export default homeSection
