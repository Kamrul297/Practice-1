import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Calculator = () => {
  return (
    <div className='flex justify-center items-center p-5 lg:p-[70px]  lg:mb-10'>
        <div className='p-[50px]'>
            <h1 className='lg:text-[40px] text-2xl poppins-bold text-[#0B0C0C] text-center'>Profit Calculator</h1>
            <div className='lg:w-[55%] mx-auto'>
            <p className='text-xs poppins-regular text-center mt-3 mb-10'>You must know the calculation before investing in any plan, so you never make mistakes. Check the calculation and you will get as our calculator says.</p>
            </div>
            
            <div className='bg-[#FAFAFA] border-[1px] p-[38px] border-[#006D5B] rounded-[12px]'>
                <div className='lg:flex gap-5'>
                    <div className='w-[350px] lg:w-[450px] lg:h-[88px]'>
                        <p className='poppins-regular text-[14px] mb-1'>Choose Plan</p>
                        <div className='flex justify-between items-center w-[350px] lg:w-[450px] lg:h-[50px] bg-[#FFFFFF] border-[1px] p-3 rounded-lg'>
                          <p className='poppins-regular text-[12px]'>Max Basic</p>
                          <span><FaChevronDown /></span>
                        </div>
                    </div>
                    <div className='w-[350px] lg:w-[450px] h-[88px]'>
                        <p className='poppins-regular text-[14px] mb-1'>Invest Amount ($3001.00 - $10000.00)</p>
                        <div className='flex justify-between items-center w-[350px] lg:w-[450px] h-[50px] border-[1px] p-3 bg-[#CED3D3] rounded-lg'>
                          <p className='poppins-regular text-[12px]'>3001.00</p>
                          <span><FaChevronDown /></span>
                        </div>
                    </div>
              </div>
              <div>
                  <p className='text-[#006D5B] text-[14px] poppins-semibold leading-5'>Return $6.00 USD Every Daily For 180 Daily. Total 1080.36 USD+Capital</p>
                  <p className='text-[#FF0000] text-[12px] poppins-regular'>Net Profit $1,080.36 USD</p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Calculator