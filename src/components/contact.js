import React, { Component } from 'react';
import CardItem from './CardItem';
import '../App.css';
import { Button } from './Button';
import './Contact.css';
import myImage from '../images/PORTRAIT_COVER.jpeg';
import Resume from '../images/resume.png'


function Contact() {
    return (
        <div className='contact-container'>
            <h1>Stephanie Marie</h1>
            <p>Full-Stack Developer</p>
            <p>Hello there, beautiful people.
                I am a full-stack developer, I have received my training through the UC Berkeley extension program. 
                If you give yourself no other option but
                to succeed then there will be no other possibility but success.</p>
            <h5>HTML/CSS | Bootstrap | JavaScript | React </h5>
            {/* may have to change name */}
                <div className="social-media">
                    <a href="https://github.com/stephimarie" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/stephanie-mccandless-76869139/" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin" aria-hidden="true" />
                    </a>
                </div>
        </div>
    )
}

export default Contact

 
// class About extends Component {
//     render() {
//     return (
//         <div className="about-body" >
//             <Grid className="about-grid">
//                 <Cell col={6}>
//                     <img style={{height:'250px', width:'200px', paddingTop:'20px', borderRadius:'50%' }} img src={myImage} alt="Resume" />
//                     <h2 style={{fontFamily:'Times'}}>Stephanie Marie</h2>
//                     <p> Hello there, beautiful people.
//             I am a full-stack developer, I have received my training through the UC Berkeley extension program. 
//             I've been trained in HTML, CSS, Javascript, and node. If you give yourself no other option but
//              to succeed then there will be no other possibility but success.   </p>
//                 </Cell>

//                 <Cell col={6}>
//                     <h3>Contact</h3>
//                     <p><strong>Location:</strong> Los Angeles, CA </p>
//                     <p><strong>Phone:</strong> (310) 623-2363</p> 
//                     <p><strong>Email:</strong> info.mccandless@gmail.com</p>
//                     <hr/>

//                     <h4><strong>Resume</strong></h4>
//                     <a href={Resume} class="btn btn-primary btn-lg active" download="download">Download Resume Here</a>

//                 </Cell>
                 
//             </Grid>
//         </div>
//     );
//     };
// };

// export default About;