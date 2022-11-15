import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
  font-family: 'cairo', sans-serif;
  position: fixed;
  display: grid;
  align-items: center;
  z-index: 999;
  background-color: #0d0d0d;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isopen}) => (isopen ? "100%" : "0")};
  top: ${({isopen}) => (isopen ? "0" : "-100%")};
`
export const CloseIcon = styled(FaTimes)`
  color: #f1f1f1;
  cursor: pointer;
`
export const Icon = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.2rem;
  font-size: 20px ;
  cursor: pointer;
  padding: 12.5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
`
/* ----------------------------- */
export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const SidebarMenue = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0%);
`
export const SidebarLink = styled(LinkS)`
  text-decoration: none;
  padding: 10px 22px;
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
    opacity: 0.8;
  }
`
export const SidebarBtn = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, 10px);
`
export const SidebtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`