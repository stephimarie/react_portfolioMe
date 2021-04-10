import React from 'react'
import './Footer.css'

        // <a href="https://github.com/stephimarie/Yoda_me_astrology" rel="noreferrer" target="_blank">Repo link</a>



function Footer() {
    return (
      <div className='footer-container'>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <small class='website-rights'>Stephanie Marie © 2021</small>
            <div class='social-icons'>
              {/* <Link
                class='social-icon-link Linkedin'
                to= 'https://www.linkedin.com/in/stephanie-mccandless-76869139/'
                target='_blank'
                aria-label='Linkedin'
              >
                <i class="fab fa-linkedin"></i>
              </Link>
              <Link
                class='social-icon-link github'
                to='https://github.com/stephimarie'
                target='_blank'
                aria-label='GitHub'
              >
                <i class="fab fa-github"></i>
              </Link> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;
  