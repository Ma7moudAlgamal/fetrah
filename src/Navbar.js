import React from "react";
import './Navbar.css'

const NavBar = () => {
  return (
    <header>
        <a href="#" class="logo">FETRAH</a>
        <nav class="navigation">
            <a href=".main">Home</a>
            <a href="#secondary">About</a>
            <a href="#support">Support</a>
        </nav>
    </header>
  );
};

export default NavBar;
