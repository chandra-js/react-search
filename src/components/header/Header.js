import React from 'react';
import './Header.css'
import logo from '../../logo.svg';
import InputBox from '../inputBox/InputBox';

const Header = () =>{


    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='search-container'>
                <InputBox />
            </div>
            
        </div>
    )

}

export default Header;