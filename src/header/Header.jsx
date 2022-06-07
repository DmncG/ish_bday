import React from 'react';
import './header.css';

function Header (props) {
  const { copy } = props;
  return (
    <div className="header__div">
      <h1 className="header__h1">
        { copy }
      </h1>
    </div>
  )
}

export default Header;