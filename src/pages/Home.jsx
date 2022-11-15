import React, { useState } from 'react'
import Footer from '../component/Footer/Footer';
import Hero from '../component/Hero/Hero';
import { homeObjOne, homeObjTwo, homeObjThree } from '../component/Info/Data';
import Info from '../component/Info/info';
import Services from '../component/Services/Services';
import Sidebar from "../component/Sidebar/Sidebar";
import NavBar from "../component/NavBar/Navbar";

function Home() {
  const [isopen, setIsopen] = useState(false)

  const toggle = () => setIsopen(!isopen)
  
  return (
    <>
      <Sidebar toggle={toggle} isopen={isopen} />
      <NavBar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home