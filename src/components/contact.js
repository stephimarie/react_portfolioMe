import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import myImage from '../images/PORTRAIT_COVER.jpeg';
import Resume from '../images/resume.png'


class About extends Component {
    render() {
    return (
        <div className="about-body" >
            <Grid className="about-grid">
                <Cell col={6}>
                    <img style={{height:'250px', width:'200px', paddingTop:'20px', borderRadius:'50%' }} img src={myImage} alt="Resume" />
                    <h2 style={{fontFamily:'Times'}}>Stephanie Marie</h2>
                    <p> Well, Hello there, beautiful people. My name is Stephanie Marie. I am a Southern California native. 
            I am a full-stack developer, I have received my training through the UC Berkeley extension program. 
            I've been trained in HTML, CSS, Javascript, and node thus far. If you give yourself no other option but
             to succeed then there will be no other possibility but success. Carry yourself forward with this mindset 
             and you will achieve anything you set your mind to. All is mental change your thoughts and you will change your life. 
             Gratitude doesn't arise because you are happy, you become truly happy when you are grateful. No matter how much you accomplish 
             in life, without the touch of gratitude true contentment is not possible. I have always been drawn to computers since I was 9 years old.</p>
                </Cell>

                <Cell col={6}>
                    <h3>Contact Me:</h3>
                    <p><strong>Location:</strong> Los Angeles, CA </p>
                    <p><strong>Phone:</strong> (310)623-2363</p> 
                    <p><strong>Email:</strong> info.mccandless@gmail.com</p>
                    <hr/>

                    <h4><strong>Resume:</strong></h4>
                    <p>More about me:</p>
                    <a href={Resume} class="btn btn-primary btn-lg active" download="download">Download Resume Here</a>

                </Cell>
                 
            </Grid>
        </div>
    );
    };
};

export default About;