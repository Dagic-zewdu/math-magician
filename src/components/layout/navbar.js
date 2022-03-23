import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, LinkContainer, LogoContainer } from './navbar.style';

function Navbar() {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        Math Magician
      </LogoContainer>
      <LinkContainer>
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/calculator">Calculator |</NavLink>
        <NavLink to="/quote">Quote </NavLink>
      </LinkContainer>
    </HeaderContainer>
  );
}

export default Navbar;
