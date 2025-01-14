import React from 'react'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { LuMessageCircle } from 'react-icons/lu'
import img1 from '../assets/news1.png'
import img2 from '../assets/news2.png'
import img3 from '../assets/news3.png'
const news = [
    {id:1, image:img1, name:"Finance", description:"Exploring the Opportunity of Live Shopping with TikTok"},
    {id:2, image:img2, name:"Trade", description:"Exploring the Opportunity of Live Shopping with TikTok"},
    {id:3, image:img3, name:"Finance", description:"Exploring the Opportunity of Live Shopping with TikTok"}
]

const News = () => {
  return (
    <div className='lg:p-[70px] px-5 py-10'>
        <div>
            <h1 className='text-center poppins-bold lg:text-[40px] text-2xl text-[#0B0C0C]'>Our Latest News</h1>
            <div className='lg:w-[38%] w-1/2 mx-auto mt-5 mb-10'>
                <p className='text-center poppins-regular text-[#677372] text-xs leading-5 mt-4'>you will get each update about our system and the world market in this area. Keep checking our Latest News to be in touch.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                {
                    news.map((latest) => (
                        <div className='flex lg:flex-col justify-center'>
                            <div key={latest.id} className='relative lg:w-full w-2/3'>
                                <div>
                                    <img src={latest.image} alt="" />
                                </div>
                                <div className='flex justify-between items-center mt-5'>
                                    <p className='flex justify-between items-center gap-2 text-[#006D5B] poppins-semibold'>
                                        <span><IoCalendarClearOutline className='text-[18px]' /></span>
                                        <span className='text-[10px]'>Nov 5, 2024</span>
                                    </p>
                                    <p className='flex justify-between items-center gap-2 text-[#006D5B] poppins-semibold'>
                                        <span><LuMessageCircle className='text-[18px]' /></span>
                                        <span className='text-[10px]'>Comment: 12</span>
                                    </p>
                                </div>
                                <h3 className='text-[#0B0C0C] poppins-semibold text-[17px] mt-5'>{latest.description}</h3>
                                <button className='bg-[#006D5B] text-[#FFFFFF] poppins-semibold rounded-md text-[10px] py-1 px-[14px] absolute top-3 right-4'>{latest.name}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default News