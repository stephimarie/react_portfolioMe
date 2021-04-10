import React, { Component } from 'react';
import CardItem from './CardItem';

import myImage from '../images/PORTRAIT_COVER.jpeg';
import Resume from '../images/resume.png'


function Contact() {
    return (
        <div className='cards'>
            <h1>Contact</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="../images/PORTRAIT_COVER.jpeg"
                        text="Hello there, beautiful people.
                          I am a full-stack developer, I have received my training through the UC Berkeley extension program. 
                          I've been trained in HTML, CSS, Javascript, and node. If you give yourself no other option but
                          to succeed then there will be no other possibility but success."
                        label='Stephanie Marie'
                        path='/'
                        />
                    </ul>
                </div>
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