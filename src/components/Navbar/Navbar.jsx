import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <>
        
        <div className="navbar">
            <h1 className='logo'>PD</h1>
            <div className="navbar-list">
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/location">Location</Link>
                <Link to ="/about">About</Link>
            </div>
             <Link to="/login">
            <button>login</button>
            </Link>
            
        </div>

</>
    ); 
}; 

export default Navbar; 