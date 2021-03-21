import React, { Component } from 'react';
import Img1 from "../image/Yoda-Me-Astrology.png";
import { Cell, Grid, Card, CardTitle, CardActions } from 'react-mdl';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-body">  
            <Grid className= "portfolio-grid">
                <Cell col={3}>
                    <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                        <img src={Img1}/>
                        <CardTitle style={{color: 'black', height: '100px'}}>Yoda-Me-Astrology</CardTitle>
                    </Card>
                </Cell>
                </Grid>      
            </div>

        );
    };
}