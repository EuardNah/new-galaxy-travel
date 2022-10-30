import React, {useState} from 'react';
import './NavBar.css'
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import {click} from "@testing-library/user-event/dist/click";

const NavBar = () => {

    const [isClick, setIsClick] = useState(false)
    const [isColor, setIsColor] = useState(false)

    const handleClick = () => setIsClick(!isClick)
    const changeColor = ()=> {
        if(window.scrollY >= 100){
            setIsColor(true)
        }else {
            setIsColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={isColor? 'header header-bg': 'header'} >
           <Link to='/'><h1>GALAXY TRAVEL</h1></Link>
            <ul className={isClick? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/training'>Training</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {isClick ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}} /> ) }

            </div>
        </div>
    );
};

export default NavBar;