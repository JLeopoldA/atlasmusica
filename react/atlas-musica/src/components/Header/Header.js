import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="logo">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/venues" className="nav-link">Venues</Link>
                <Link to="/artists" className="nav-link">Artists</Link>
                <Link to="/submit" className="nav-link">Submit</Link>
            </nav>
        </header>
    )
}

export default Header;