import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <section className='footerMain containerFull'>
            <div className="containerMain">
                <div style={{ display: 'flex' }} className="footerTop">
                    <section style={{ width: '60%' }} className="footerTopSection">
                        <Link href="/">
                            <img style={{width: '30%'}} src={logo} alt="" className="footerTopLogo" />
                        </Link>
                    </section>
                    <section style={{ width: '20%' }} className="footerTopSection">
                        <li><Link href="/about">About online food</Link></li>
                        <li><Link href="/blog">Red our blog</Link></li>
                        <li><Link href="/signup">Signup to deliver</Link></li>
                        <li><Link href="/addYou">Add your restaurant</Link></li>
                    </section>
                    <section style={{ width: '20%' }} className="footerTopSection">
                        <li><Link href="/help">Get help</Link></li>
                        <li><Link href="/faq">Read FAQ</Link></li>
                        <li><Link href="/allCities">View all cities</Link></li>
                        <li><Link href="/nerMe">Restaurant ner me</Link></li>
                    </section>
                </div>
                <footer style={{ display: 'flex'}} className="footer">
                    <span className="footerMainText">
                        <p> Copyright &copy; 2020 online food</p>
                    </span>
                    <span className="footerMainLink">
                        <Link href="/privacy">Privacy Policy</Link>
                    </span>
                    <span className="footerMainLink">
                        <Link href="/trams">Trams of use</Link>
                    </span>
                    <span className="footerMainLink">
                        <Link href="/food">Pricing</Link>
                    </span>
                </footer>
            </div>
        </section>
    );
};

export default Footer;