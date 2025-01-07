import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Deals = [
    {
      id: 1,
      name: "Max Basic",
      dollar: "$3,001 - $10,000",
      text1:"Return 0.20%",
      text2:"Every Daily",
      text3:"For 180 Daily",
      text4:"Total 36% +",
    },
    {
      id: 2,
      name: "Max",
      dollar: "$3,001 - $10,000",
      text1:"Return 0.20%",
      text2:"Every Daily",
      text3:"For 180 Daily",
      text4:"Total 36% +",
    },
    {
      id: 3,
      name: "Child Pro",
      dollar: "$100 - $3,000",
      text1:"Return 0.20%",
      text2:"Every Daily",
      text3:"For 180 Daily",
      text4:"Total 36% +",
    },    
  ];



const BusinessDeals = () => {
  return (
    <div className='bg-[#FAFAFA] lg:p-[70px] p-5'>
        {/* Heading */}
        <h1 className='text-[#0B0C0C] text-center poppins-bold text-[40px]'>Business Deals</h1>
        <p className='text-[#677372] text-center poppins-regular text-xs mt-5 mb-10'>Financial Asset Management Exchange (Fimaex) is a dynamic investment and portfolio management company specializing in tailored financial solutions for individuals and institutions.
        </p>

        {/* Investing Card*/}
        <div>
          <div className='grid lg:grid-cols-3 justify-center'>
            {
              Deals.map((data) => (
                <div key={data.id} className='bg-[#FFFFFF] lg:w-[330px] w-[380px] h-[420px] rounded-[4px] p-6'>
                  <div className='mb-6'>
                    <h3 className='text-[18px] poppins-semibold lg:text-start text-center'>{data.name}</h3>
                    <h1 className='text-[30px] poppins-semibold lg:text-start text-center'>{data.dollar}</h1>
                  </div>

                  <div>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex items-center lg:justify-start justify-center text-[14px] text-[#586261] gap-2'><p className='flex items-center lg:justify-start justify-center'><IoMdCheckmarkCircleOutline className='text-[#006D5B] text-[20px]' /> {data.text1}</p></li>
                      <li className='flex items-center lg:justify-start justify-center text-[14px] text-[#586261] gap-2'><p className='flex items-center lg:justify-start justify-center'><IoMdCheckmarkCircleOutline className='text-[#006D5B] text-[20px]' /> {data.text1}</p></li>
                      <li className='flex items-center lg:justify-start justify-center text-[14px] text-[#586261] gap-2'><p className='flex items-center lg:justify-start justify-center'><IoMdCheckmarkCircleOutline className='text-[#006D5B] text-[20px]' /> {data.text1}</p></li>
                      <li className='flex items-center lg:justify-start justify-center text-[14px] text-[#586261] gap-2'><p className='flex items-center lg:justify-end justify-center'><IoMdCheckmarkCircleOutline className='text-[#006D5B] text-[20px]' /> {data.text1}</p> <span className='text-[10px] bg-[#ccfbf1] text-[#006D5B] py-[2px] px-[10px] rounded-full'>Capital</span></li>
                    </ul>
                  </div>
                  <div className='flex justify-center mt-7'><button className='btn'><a href="" className='btn-a'>Invest Now</a></button></div>
                </div>
              ))
            }
          </div>

          
        </div>

    </div>
  )
}

export default BusinessDeals