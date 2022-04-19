import React from 'react';
import '../stylesheet/Header.css'
function Header({ text }) {
  return (
    <h1 className='header'>{text}</h1>
  );
}

export default Header;