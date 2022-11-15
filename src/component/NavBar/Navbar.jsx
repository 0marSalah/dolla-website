import React, { useEffect, useState } from 'react'
import { 
  Nav, NavbarContainer, NavbtnLink,Navbtn ,NavLinks, MobileIcon, 
  NavItem, NavLogo, NavMenue } from './NavBarStyle'
import { FaBars } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

function NavBar({ toggle}) {
  const [scrollNav, setScrollNav] = useState(false)
  const changenav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changenav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to={"/"} onClick={toggleHome}>
          dolla
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenue>
          <NavItem>
            <NavLinks to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={350}
            exact='true'
            activeClass='active'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover"
              spy={true}
              smooth={true}
              offset={-50}
              duration={350}
              exact={'true'}>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={350}
              exact={'true'}>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup"
              spy={true}
              smooth={true}
              offset={0}
              duration={350}
              exact={'true'}>Sign Up</NavLinks>
          </NavItem>
        </NavMenue>
        <Navbtn>
          <NavbtnLink to="/signin">Sign In</NavbtnLink>
        </Navbtn>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar