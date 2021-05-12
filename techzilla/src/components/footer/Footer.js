import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(){
    return (
        <div className='footer-container'>
            <section className='footer-start'>
{/*                 <p className='footer-title'>
                    techZilla eshop
                </p> */}
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>COMPANY INFORMATION</h2>
                        <Link to='/'>About techZilla</Link>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Hours of Operation</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>CUSTOMER SERVICE</h2>
                        <Link to='/FAQ'>Frequently Asked Questions</Link>
                        <Link to='/OrderStatus'>Check Order Status</Link>
                        <Link to='/TermsOfService'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>SOCIAL MEDIA</h2>
                        <Link to='/'><i className='fab fa-twitter'/> Twitter</Link>
                        <Link to='/'><i className='fab fa-youtube'/> Youtube</Link>
                        <Link to='/'><i className='fab fa-facebook'/> Facebook</Link>
                        <Link to='/'><i className='fab fa-instagram'/> Instagram</Link>
                    </div>
                </div>
            </div>
            <section className='website-copyright'>
                <small>&#169;2021 techZilla LLC. All rights reserved</small>
            </section>
        </div>
    );
}

export default Footer;