import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div lang='mb-20'>
        <div className='grid lg:grid-cols-3 justify-center bg-[#00473B] text-[#FFFFFF] px-5 py-10 lg:p-[70px] gap-28'>
            {/* Text */}
            <div>
              <div>
                <img src="" alt="" />
              </div>

              <p>This is a Revolutionary Money Making Platform! Invest for Future in Stable Platform and Make Fast Money. Not only we guarantee the fastest and the most</p>
            </div>

            {/* Subscribe */}
            <div>
              <p>Subscribe Our Newsletter</p>
              <div className='flex justify-between items-center bg-[#FFFFFF] w-[330px] h-[40px]'>
                <span>E-Mail Address</span>
                <span><BsFillSendFill /></span>
              </div>
            </div>

            {/* Social Link */}
            <div>
              <p>Social</p>
              <div className='flex items-center'>
                <span><FaFacebookF /></span>
                <span><FaXTwitter /></span>
                <span><FaInstagram /></span>
                <span><FaLinkedinIn /></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer