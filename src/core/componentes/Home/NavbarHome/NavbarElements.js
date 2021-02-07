import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #0D0C1D;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 20px;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 15px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #333;

  p {
    transform: translate(-50%, 200%);
    font-weight: bold;
  }
`;

export const Bars = styled(HiMenu)`
  color: #0D0C1D;
  font-size: 2.5rem;
  transform: translate(-50%, 0%);
`;
