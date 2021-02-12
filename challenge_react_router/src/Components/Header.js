import React from 'react';
import {NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="HeaderArea">
            <nav >
                <NavLink className="HeaderItem" to="/" end> Produtos </NavLink>
                <NavLink className="HeaderItem" to="/about"> Contato </NavLink>
            </nav>
        </header>
    );
};

export default Header;
