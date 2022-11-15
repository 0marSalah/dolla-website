import React from 'react'
import { Button } from '../button'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  Img
} from './InfoStyle'

const Info = ({
  topLine,
  headLine,
  lightBg,
  id,
  imgstart,
  lightText,
  darkText,
  description,
  alt,
  buttonLabel,
  primary,
  img,
  dark
}) => {
  return (
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgstart={imgstart}>
            <Column1>
              <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                <Button
                primary={primary ? 1 : 0} 
                dark={dark ? 1 : 0}
                to='home'
                duration={500}
                offset={-80}
                exact={true}
                spy={true}
                >
                  {buttonLabel}
                </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
              <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
  )
}

export default Info