import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Home extends Component {
    render() {
    return (
        <div style={{width:'100%', margin:'auto', height: '100%'}}>
            <Grid className="home-grid" style={{height:'100%'}}>
                <div className="banner">
                    <h1 style={{fontFamily:'Almarai',wordSpacing:'10px'}}><strong>My Portfolio</strong></h1>
                    <h2 style={{fontFamily:'Monoton', wordSpacing:'10px'}}>Stephanie Marie</h2>
                     <h3><strong>I'm a Full-Stack Developer </strong> </h3>
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


            </Grid>
        </div>
    );
    };
};

export default Home;