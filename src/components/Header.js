import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from './Nav';

const Logo = styled(Link).attrs({
  className: 'f2 fw8 no-underline white',
})``;

const StyledHeader = styled.header.attrs({
  className: 'bg-purple',
})`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 59.99em) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar pa3 tc-m">
      <Logo className="pl3" to="/">
        FEM Workshop
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
