import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location])
    return (
        
        <div className="navbar" id={expandNavbar ? "open" : "closed"}>
            <div className="toggleButton">
                <button onClick={() => { setExpandNavbar((prev) => !prev)}}>
                    <ReorderIcon />
                    </button>
            </div>
            <div className="links">
                <Link to="/">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div >
    )
}

export default Navbar;