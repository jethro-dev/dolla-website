import React, { useState, useEffect, useContext } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./Navbar.styled";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../../App";

const Navbar = () => {
  const { click, setClick } = useContext(AppContext);
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <Nav scroll={scroll}>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <Hamburger onClick={() => setClick(!click)}>
            <FaBars />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <NavLink
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                to="about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                to="discover"
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                to="services"
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                to="signup"
              >
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink primary to="/signin">
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
