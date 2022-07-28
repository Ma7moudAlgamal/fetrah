import React from "react";
import './Navbar.css'

const NavBar = () => {
  return (
    <header>
        <a href="#" class="logo">FETRAH</a>
        <nav class="navigation">
            <a href="index.html">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  );
};

export default NavBar;
