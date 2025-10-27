import React, { useState } from "react"
import logo from './images/Logo.png';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo"><img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`navbar ${menuOpen ? "open" : ""}`} >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Reservation</a>
                </li>
            </ul>
        </nav>

    )
}