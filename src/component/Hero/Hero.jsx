import React, { useState } from 'react'
import Video from '../../videos/videoOne.mp4'
import { Button } from '../button'
import { BtnWrapper } from '../Info/InfoStyle'
import { HeroBg, HeroContainer, ArrowForward, HeroContent, HeroP, HeroTitle, VideoBg } from './HeroStyle'

function Hero() {
  const [hover, setHover] = useState(false)

  return (
      <HeroContainer>
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroTitle>
          Virtual Banking Made Easy
          </HeroTitle>
          <HeroP>Sign up for a new account today and
            recieve $250 in credite towards your next payment.
          </HeroP>
        <BtnWrapper>
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            to='signin'
            primary={true}
            dark={false}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowForward />}
          </Button>
        </BtnWrapper>
        </HeroContent>
      </HeroContainer>
    )
}

export default Hero