import React from 'react'
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube 
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  LinksWrap,
  LinksContainer,
  LinkItems,
  Title,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  Logo,
  WebsiteRight,
  SocialIcons,
  SocialIcon
} from "./FooterStyle"
import {animateScroll as scroll} from 'react-scroll'

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <LinksContainer>
            <LinksWrap>
              <LinkItems>
                <Title>About Us</Title>
                  <FooterLink to={"/signin"} >How It Works</FooterLink>
                  <FooterLink to={"/signin"} >Testmonials</FooterLink>
                  <FooterLink to={"/signin"} >Careers</FooterLink>
                  <FooterLink to={"/signin"} >Investors</FooterLink>
                  <FooterLink to={"/signin"} >Terms of Services</FooterLink>
              </LinkItems>
              <LinkItems>
                <Title>Videos</Title>
                <FooterLink to={"/signin"} >Submit Videos</FooterLink>
                <FooterLink to={"/signin"} >Ambassadors</FooterLink>
                <FooterLink to={"/signin"} >Careers</FooterLink>
                <FooterLink to={"/signin"} >Agncy</FooterLink>
                <FooterLink to={"/signin"} >Influencers</FooterLink>
              </LinkItems>
            </LinksWrap>
            <LinksWrap>
              <LinkItems>
                <Title>Contact Us</Title>
                <FooterLink to={"/signin"} >Contact</FooterLink>
                <FooterLink to={"/signin"} >Support</FooterLink>
                <FooterLink to={"/signin"} >Destination</FooterLink>
                <FooterLink to={"/signin"} >Sponsorships</FooterLink>
              </LinkItems>
              <LinkItems>
                <Title>Social Media</Title>
                <FooterLink to={"/signin"} >Instgram</FooterLink>
                <FooterLink to={"/signin"} >Facebook</FooterLink>
                <FooterLink to={"/signin"} >Youtube</FooterLink>
                <FooterLink to={"/signin"} >Twitter</FooterLink>              </LinkItems>
            </LinksWrap>
          </LinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                <Logo to={'/'} onClick={scroll.scrollToTop()}>dolla</Logo>
              <WebsiteRight>dolla © {new Date().getFullYear()}
                All rights reserved.</WebsiteRight>
                <SocialIcons>
                  <SocialIcon href='/' target="_blank" aria-label="Facebook" >
                    <FaFacebook />
                  </SocialIcon>
                <SocialIcon href='/' target="_blank" aria-label="Instgram" >
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon href='/' target="_blank" aria-label="Youyube" >
                  <FaYoutube />
                </SocialIcon>
                <SocialIcon href='/' target="_blank" aria-label="Twitter" >
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href='/' target="_blank" aria-label="LinkedIn" >
                  <FaLinkedin />
                </SocialIcon>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer