import React from 'react'
import Hero from '../Components/Hero';
import Explore from '../Components/Explore';
import Guide from '../Components/Guide';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';
import Navbar from '../Components/Navbar';
import {Testimonials}  from '../Components/Testimonials';
import GetStarted from '../Components/GetStarted';
import "../App.css"
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Guide/>
      <Explore/>
      <Carousel/>
      <GetStarted/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home