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
              <Link to='/'>Linkedin</Link>
              <Link to='/'>Github</Link>
            </div>
          </div>
        </div>

        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                Just S
                <i class="fab fa-stripe-s"></i>
              </Link>
            </div>
            <small class='website-rights'>Stephanie Marie © 2021</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link Linkedin'
                to='/'
                target='_blank'
                aria-label='Linkedin'
              >
                <i class="fab fa-linkedin"></i>
              </Link>
              <Link
                class='social-icon-link github'
                to='/'
                target='_blank'
                aria-label='GitHub'
              >
                <i class="fab fa-github"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;
  