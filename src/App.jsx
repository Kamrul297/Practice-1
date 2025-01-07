import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About'
import BusinessDeals from './Component/BusinessDeals'
import Calculator from './Component/Calculator'
import Works from './Component/Works'
import FAQ from './Component/FAQ'
import TopInvestors from './Component/topInvestors'
import Choose from './Component/Choose'
import UsersSay from './Component/UsersSay'

const App = () => {
  return (
    <div className=' overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <BusinessDeals />
      <Calculator />
      <Works />
      <FAQ />
      <TopInvestors />
      <Choose />
      <UsersSay />
    </div>
  )
}

export default App