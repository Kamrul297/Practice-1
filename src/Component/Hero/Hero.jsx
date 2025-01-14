import React from 'react'
import heroImg from '../../assets/snape-1.png'

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 justify-between items-center lg:p-[70px] p-5 bg-[#EBF6F5] gap-4'>
      {/* Hero Content */}
      <div className='grid grid-cols-1 '>
          <div>
          <h1 className='lg:text-[40px] text-2xl poppins-bold text-[#0B0C0C] lg:text-start text-center'>Invest for Future in <br /> Stable Platform and <br /> Make Fast Money</h1>
          <div className='lg:w-[90%] lg:ml-0 mx-auto mt-3 mb-10'>
            <p className='text-xs poppins-regular text-[#677372]'>Invest in an Industry Leader, Professional, and Reliable Company. We provide you with the most necessary features that will make your experience better. Not only we guarantee the fastest and the most exciting returns on your investments, but we also guarantee the security of your investment.</p>
          </div>
          <div className='flex justify-center lg:justify-start'><button className='btn'><a href="/" className='btn-a'>Get Started</a></button></div>
          </div>
      </div>

      {/* Hero Image */}
      <div>
        <img src={heroImg} width="570px" height="470px" alt="" />
      </div>
    </div>
  )
}

export default Hero