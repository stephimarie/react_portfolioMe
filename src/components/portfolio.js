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
                        <CardActions border>
                            <a href="https://github.com/stephimarie/Yoda_me_astrology" rel="noreferrer" target="_blank">Repo link</a>
                            <br />
                            <br />
                            <a href="https://stephimarie.github.io/Yoda_me_astrology/" rel="noreferrer" target="_blank">Live link</a>
                        </CardActions>
                    </Card>
                </Cell>
                </Grid>      
            </div>

        );
    };
}