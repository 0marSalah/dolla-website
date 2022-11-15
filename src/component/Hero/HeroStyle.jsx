// import { Link as LinkS} from "react-scroll";
import styled from "styled-components";
import { BsBoxArrowInRight, BsArrowRightShort } from 'react-icons/bs'

export const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 860px;
  margin-top: -80px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%);
    z-index: 2;
  }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width:100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #232a34;
` 
// Contetnt -----------------------------
export const HeroContent = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 600px;
  flex-direction: column;
  height: 225px;
  margin-top: -325px;
  @media screen and (max-width: 768px) {
    margin-top: -400px;
  }
`
export const HeroTitle = styled.h2`
  color: #fff;
  text-align: center;
  padding: 0 0.5rem;
  font-size: 48px;
  font-weight: bold;
`
export const HeroP = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding: 0 10px;
  margin-top: -20px;
`
export const ArrowForward = styled(BsBoxArrowInRight)`
  margin-left: 8px;
  font-size: 18px;
`
export const ArrowRight = styled(BsArrowRightShort)`
  margin-left: 8px;
  font-size: 20px;
`