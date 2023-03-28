import React from 'react';
import './Header.css'
import logo from '../../images/download (2).jpg'
const Header = () => {
    return (
        <div>
            <nav className='header-container'>
                <img src={logo} alt="" />
                <div className='nav-item'>
                    <a href="/Home">Home</a>
                    <a href="/About Us">About Us</a>
                    <a href="/Services">Services</a>
                    <a href="/Contract Us">Contract Us</a>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;