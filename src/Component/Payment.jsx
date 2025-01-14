import React from 'react'
import pay1 from '../assets/pay1.png'
import pay2 from '../assets/pay2.png'
import pay3 from '../assets/pay3.png'
import pay4 from '../assets/pay4.png'
import pay5 from '../assets/pay5.png'
import pay6 from '../assets/pay6.png'
import pay7 from '../assets/pay7.png'
import pay8 from '../assets/pay8.png'
import pay9 from '../assets/pay9.png'


const Payment = () => {
  return (
    <div className='lg:p-[70px] px-5 py-10'>
        <div>
            <h1 className='text-center poppins-bold lg:text-[40px] text-2xl text-[#0B0C0C]'>Payment We Accept</h1>
            <div className='w-[40%] mx-auto mb-10'>
                <p className='text-center poppins-regular text-[#677372] text-xs leading-5 mt-4'>We accept all major cryptocurrencies and fiat payment methods to make your investment process easier with our platform.</p>
            </div>

            <div className='flex flex-wrap justify-between items-center gap-3'>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay1} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay2} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay3} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay4} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay5} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay6} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay7} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay8} alt="" />
                </div>
                <div className='w-[110px] h-[110px] bg-[#EDF5F4] flex justify-center items-center'>
                    <img width="65px" height="65px" src={pay9} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment