import React from 'react'
import aboutImg from '../assets/image.png'

const About = () => {
  return (
    <div className='flex justify-center items-center m-[70px]'>
        <div className='flex justify-between items-center gap-20'>
            {/* About Content */}
            <div className='w-[530px]'>
                <h1 className='poppins-bold text-[40px] text-[#0B0C0C]'>About Fimaex</h1>
                <p className='poppins-regular text-[#677372] text-xs leading-5 mt-4'>Financial Asset Management Exchange (Fimaex) is a dynamic investment and portfolio management company specializing in tailored financial solutions for individuals and institutions.</p>
                <p className='poppins-regular text-[#677372] text-xs leading-5 mt-4'>Our mission is to empower clients with strategic asset management services that maximize growth and mitigate risks across diverse markets. At Fimaex, we prioritize innovation, transparency, and client success in every investment strategy we craft.</p>
                <button className='btn'><a href="" className='btn-a'>Learn More</a></button>
            </div>

            {/* About Img */}
            <div><img src={aboutImg} width='510px' height='420px' alt="" /></div>
        </div>
    </div>
  )
}

export default About