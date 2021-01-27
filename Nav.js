import React from 'react';
//import './App.css';
import {Link} from 'react-router-dom';
function Nav() {
    const navStyle = {
        color:'white'
    };
    return (
        <nav>
            <h2>Futsalll</h2>
            <ul className="navs">
            <Link style = {navStyle} to ='/players'>
                <li>Players</li>
                </Link>
                <Link style = {navStyle} to ='/pointstable'>
                <li>Pointstable</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;