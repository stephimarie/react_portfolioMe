import React from 'react'
import './Footer.css'

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Follow me and feel free to reach out.
          </p>
        </section>

        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Me</h2>
              <Link to='/about'>About Me</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Me</h2>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>linkedin</Link>
              <Link to='/'>Github</Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Footer;
  