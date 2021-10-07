import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${({ scroll }) => (scroll ? "#000" : "transparent")};
  font-size: 1rem;
  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease-in-out;

  @media (max-width: 960px) {
  }
`;
export const NavbarContainer = styled.div`
  width: 95%;
  max-width: 1100px;
  height: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;
export const NavLogo = styled(RouterLink)`
  color: #fff;
  font-size: 1.75rem;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 3px;
`;

export const Hamburger = styled.div`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  transform: translate(0%, 10%);

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  position: relative;
  transition: 0.3s all ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.3rem;
      background-color: #01bf71;
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(RouterLink)`
  border-radius: 50px;
  /* background-color: #01bf71; */
  background-color: ${({ primary }) => (primary ? `#01bf71` : `black`)};
  white-space: nowrap;
  padding: 10px 22px;
  /* color: #010606; */
  color: ${({ primary }) => (primary ? `#010606` : `#fff`)};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    /* background-color: #fff; */
    background-color: ${({ primary }) => (primary ? `#fff` : `#01bf71`)};
    color: #010606;
  }
`;
