import React from 'react'
import aboutImg from '../assets/image.png'

const About = () => {
  return (
          <div className='p-5 lg:p-[70px]'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
                  {/* About Img */}
              <div className='lg:w-[510px] lg:h-[420px]'><img src={aboutImg} alt="" /></div>

              {/* About Content */}
              <div className='md:w-1/2'>
                  <h1 className='text-center md:text-start poppins-bold lg:text-[40px] text-2xl text-[#0B0C0C]'>About Fimaex</h1>
                  <p className='poppins-regular text-[#677372] text-xs leading-5 mt-4'>Financial Asset Management Exchange (Fimaex) is a dynamic investment and portfolio management company specializing in tailored financial solutions for individuals and institutions.</p>
                  <p className='poppins-regular text-[#677372] text-xs leading-5 mt-4'>Our mission is to empower clients with strategic asset management services that maximize growth and mitigate risks across diverse markets. At Fimaex, we prioritize innovation, transparency, and client success in every investment strategy we craft.</p>
                  <div className='flex lg:justify-start justify-center'><button className='btn'><a href="" className='btn-a'>Learn More</a></button></div>
              </div>
            </div>
        </div>  
     )
  }

export default About