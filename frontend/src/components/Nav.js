import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="nav-bar">
            <ul className="nav-links">
                <Link to='/home'>
                    <li className="nav-style">New Movie</li>
                </Link>
                <Link to='/movies'>
                    <li className="nav-style">List of Movies</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;