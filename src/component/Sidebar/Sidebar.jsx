import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebtnLink, SidebarMenue, SidebarBtn} from './SidebarStyle'

function sidebar({isopen, toggle}) {
  return (
    <SidebarContainer isopen={isopen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle}>
          <FaTimes />
        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenue>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenue>
        <SidebarBtn>
          <SidebtnLink to="/signin">Sign In</SidebtnLink>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default sidebar