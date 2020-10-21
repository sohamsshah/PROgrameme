import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    return (
        <div>
            <nav className = "navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                TRVL 
                <i class="fa fa-bar-chart"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav menu'}> 
                <li className="nav-item"> 

                </li></ul>
                 
            </div>

            </nav>
        </div>
    )
}
export default Navbar;