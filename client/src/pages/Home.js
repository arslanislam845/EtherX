import React from 'react'
import Hero from '../Components/Hero';
import Explore from '../Components/Explore';
import Guide from '../Components/Guide';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';
import {Testimonials}  from '../Components/Testimonials';
import GetStarted from '../Components/GetStarted';
import FAQ from '../Components/FAQ';
import "../App.css"
const Home = () => {
  return (
    <div>
     
      <Hero />
      <Guide/>
      <Explore/>
      <Carousel/>
      <GetStarted/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home