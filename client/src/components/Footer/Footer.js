import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        GET 10% OFF. EVERYTIME. SUBSCRIBE NOW.
        </p>
        <p className='footer-subscription-text'>
        STBookShop.lk is a website for an extensive collection of books, stationery and magazines.
        Not only a “one-stop shop” for book lovers but also an interactive and innovative destination designed to make
         fun and exciting to discover and shop for new books and gifts online.book lovers but also an interactive and
          innovative destination designed to make it fun and exciting to discover and shop for new books and gifts online.

        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Type your email address'
            />
           <button className="sub">SUBSCRIBE</button>
          </form>
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            STBookShop.lk
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'> STBookShop.lk © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;