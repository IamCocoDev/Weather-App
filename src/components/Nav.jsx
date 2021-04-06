import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx'; 
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className = {"navBar"}>
      <div className = {"logoHenry"}>
        <img src={Logo} alt="Logo de Henry"/>
      </div>
      <SearchBar onSearch={onSearch}/>    
    </nav>
  );
};

export default Nav;
