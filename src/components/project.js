import React, { Component } from 'react';
import Img1 from "../images/Yoda_Me.png";
import Img2 from "../images/password-wizard.png";
import Img3 from "../images/inhuman_murder_mystery.png";
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
                <Cell col={3}>
                    <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                        <img src={Img2} />
                        <CardTitle style={{color: 'black', height: '100px'}}>Password_Wizard</CardTitle>
                        <CardActions border>
                            <a href="https://github.com/stephimarie/Password_Wizard" rel="noreferrer" target="_blank">Repo link</a>
                            <br />
                            <br />
                            <a href="https://stephimarie.github.io/Password_Wizard/" rel="noreferrer" target="_blank">Live Link</a>
                        </CardActions>

                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                        <img src={Img3} />
                        <CardTitle style={{color: 'black', height: '100px'}}>Inhuman_Murder_Mystery</CardTitle>
                        <CardActions border>
                            <a href="https://github.com/stephimarie/inhumans" rel="noreferrer" target="_blank">Repo link</a>
                            <br />
                            <br />
                            <a href="https://inhumans-murder-mystery.herokuapp.com/" rel="noreferrer" target="_blank">Live link</a>

                        </CardActions>
                    </Card>

                </Cell>
                </Grid>  
                    
            </div>

        );
    };
}

export default Portfolio;
