import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className='navbar-container'>
            <div claddName = "logo">
                {/* image of the logo */}
                <img src = " " alt = "Sarlahi Tourism logo"></img>
                </div>
            <ul className='nav-links'>
              <li> <Link to ="/">Home</Link></li>  
                <li>
                <Link to ="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
