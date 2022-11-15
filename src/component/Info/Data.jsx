import img1 from '../../images/svg-1.svg'
import img2 from '../../images/svg-2.svg'
import img4 from '../../images/svg-4.svg'

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headLine: 'Unlimited Transaction with zero fees',
  description: "Get acces to our exclusive app that allows you to sand unlimited transaction without charged any fees.",
  buttonLabel: "Get started",
  imgstart: false,
  img: img1,
  alt: 'image one',
  primary: true,
  darkText: false,
  dark: false
}

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "UNLIMITED ACCESS",
  headLine: 'Login to your account at any time',
  description: "We have you covered no matter where you are located, All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgstart: true,
  img: img4,
  alt: 'image two',
  primary: false,
  darkText: true,
  dark: false
}

export const homeObjThree = {
  id: "signup",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "JOIN OUR TEAM",
  headLine: 'Creating an account is extremely easy',
  description: `Get every thing set up and ready in order 10 minuts
  , All you need to do is add your information and you're ready to go.`,
  buttonLabel: "Start Now",
  imgstart: false,
  img: img2,
  alt: 'image three',
  primary: true,
  darkText: false,
  dark: false
}