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
import TeamMembers from './Component/TeamMembers'
import Payment from './Component/Payment'
import Today from './Component/Today'
import News from './Component/News'
import Footer from './Component/Footer'

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
      <TeamMembers />
      <Payment />
      <Today />
      <News />
      <Footer />
    </div>
  )
}

export default App