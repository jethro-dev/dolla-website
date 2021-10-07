import React, { useContext } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Sidebar.styled";
import { AppContext } from "../../App";

const Sidebar = () => {
  const { click, setClick } = useContext(AppContext);
  return (
    <SidebarContainer isOpen={click}>
      <Icon onClick={() => setClick(false)}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={() => setClick(false)}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={() => setClick(false)}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={() => setClick(false)}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={() => setClick(false)}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={() => setClick(false)}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
