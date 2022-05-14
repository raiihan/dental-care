import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'
        }}>
            <section
                class="footer p-10 ">
                <div>
                    <span class="footer-title">Services</span>
                    <Link to="/" class="link link-hover">Branding</Link>
                    <Link to="/" class="link link-hover">Design</Link>
                    <Link to="/" class="link link-hover">Marketing</Link>
                    <Link to="/" class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to="/" class="link link-hover">About us</Link>
                    <Link to="/" class="link link-hover">Contact</Link>
                    <Link to="/" class="link link-hover">Jobs</Link>
                    <Link to="/" class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to="/" class="link link-hover">Terms of use</Link>
                    <Link to="/" class="link link-hover">Privacy policy</Link>
                    <Link to="/" class="link link-hover">Cookie policy</Link>
                </div>
            </section>
            <p className='footer-center mb-6'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </footer>
    );
};

export default Footer;