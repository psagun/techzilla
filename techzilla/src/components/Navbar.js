import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Cartlength from "./Cartlength";
import Logo from "./assets/images/logo.JPG";

//context API allows you to pass in properties \

function Navbar(props) {
	const [click, setclick] = useState(false);

	const handleClick = () => {
		setclick(!click);
	};
	const closeMobileMenu = () => setclick(false);

	console.log("props in navbar.js: ", props);

	return (
		<div className="navbar">
			{props.isSignedIn ? (
				<div className="navbar-container container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<img src={Logo} alt="" width="22" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<Cartlength />
						<li className="nav-item">
							<Link to="/Account" className="nav-links" onClick={closeMobileMenu}>
								Account
							</Link>
						</li>
					</ul>
				</div>
			) : (
				<div className="navbar-container container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<img src={Logo} alt="" width="22" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<Cartlength />
						<li className="nav-item">
							<Link to="/login" className="nav-links" onClick={closeMobileMenu}>
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
								SignUp
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default Navbar;
