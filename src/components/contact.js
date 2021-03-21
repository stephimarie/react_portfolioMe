import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import myImage from '../image/IMG_0877.jpg';
import Resume from '../image/Resume.pdf'


class About extends Component {
    render() {
    return (
        <div className="about-body" >
            <Grid className="about-grid">
                <Cell col={6}>
                    <img style={{height:'250px', width:'200px', paddingTop:'20px', borderRadius:'50%' }} src={myImage} />
                    <h2 style={{fontFamily:'Times'}}>Stephanie Marie</h2>
                    <p> My name is Stephanie Marie. I'm So Cal native, and have always been drawn to computers since I was 9 years old. I'm currently studying coding at UC Berkeley extension coding bootcamp. I can't wait to get out there and put my skills to the test.</p>
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