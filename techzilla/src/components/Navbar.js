import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css';

//context API allows you to pass in properties \


function Navbar() {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }
    const closeMobileMenu = () => setclick(false);
    return (

        <div className="navbar">
            <div className="navbar-container container">
                <Link
                    to='/'
                    className="navbar-logo"
                    onClick={closeMobileMenu}>
                    techZilla
            </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* Shopping cart */}
                    <li className="nav-cart">
                        <span>0</span>
                        <Link
                            to='/cart'
                            className="nav-links"
                            onClick={closeMobileMenu}>

                            Cart
                        </Link>
                    </li>
                    {/* Shopping cart */}
                    <li className="nav-item">

                        <Link
                            to='/login'
                            className="nav-links"
                            onClick={closeMobileMenu}>

                            Login
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to='/signup'
                            className="nav-links"
                            onClick={closeMobileMenu}>

                            SignUp
                       </Link>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default Navbar
