import React from 'react'
import team1 from '../assets/teamImg1.png'
import team2 from '../assets/teamImg2.png'
import team3 from '../assets/teamImg3.png'
import team4 from '../assets/teamImg4.png'
import { IoMdShare } from 'react-icons/io'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const members = [
  {
    id:1,
    image:team1,
    name:"Jack Morrison",
    title:"CEO",
  },
  {
    id:2,
    image:team2,
    name:"Nathan Aston",
    title:"Chief Technical Officer",
  },
  {
    id:3,
    image:team3,
    name:"Sage Bray",
    title:"Marketing Head",
  },
  {
    id:4,
    image:team4,
    name:"Upton Blair",
    title:"Finance Manager",
  },
]

const TeamMembers = () => {
  return (
    <div className='lg:p-[70px] p-5 bg-[#EDF5F4]'>
        <h1 className='lg:text-[40px] text-2xl poppins-bold text-[#0B0C0C] text-center'>Our Expert Team Members</h1>
        <div className='lg:w-[50%] mx-auto'>
            <p className='text-[#677372] text-center poppins-regular text-xs mt-5 mb-10'>We have a great team including developers, designers, and Traders. The Team always working hard to give you the maximum profit.</p>
        </div>

        <div className='grid md:grid-cols-4 gap-4'>
          {
            members.map((team) => (
            <div className='flex lg:flex-col justify-center'>
              <div key={team.id} className='relative lg:w-full w-2/3  bg-[#FFFFFF] p-5 lg:p-[18px] rounded-[20px]'>
                <div>
                  <img src={team.image} alt="" />
                </div>

                <div>
                  <div className='mt-4'>
                    <h3 className='poppins-semibold text-[#0B0C0C] text-[20px]'>{team.name}</h3>
                  </div>

                  <div className='flex justify-between'>
                    <div className='mb-5 poppins-regular text-[poppins-regular] text-[10px]'>{team.title}</div>
                    <div className='flex  flex-col-reverse absolute bottom-9 right-6 gap-3'>
                      <div className='bg-[#EDF5F4] flex justify-center items-center rounded-full w-10 h-10'><IoMdShare className='w-4 h-4 text-[#006D5B]' /></div>
                      <div className='bg-[#EDF5F4] flex justify-center items-center rounded-full w-10 h-10'><FaFacebookF className='w-4 h-4 text-[#006D5B]' /></div>
                      <div className='bg-[#EDF5F4] flex justify-center items-center rounded-full w-10 h-10'><FaXTwitter className='w-4 h-4 text-[#006D5B]' /></div>
                      <div className='bg-[#EDF5F4] flex justify-center items-center rounded-full w-10 h-10'><FaInstagram className='w-4 h-4 text-[#006D5B]' /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
          }
        </div>

        {/* <div className='grid lg:grid-cols-4'>
          {
            members.map((team) => (
              <div key={team.id}  className='grid justify-center items-center border-2 border-blue-500 '>
                  <div className='w-[220px] h-[320px]'>
                    <div className='w-[220px] h-[320px]'>
                        <img src={team.image} className='border-2 border-orange-400' width="100%" alt="" />
                    </div>
                    <div>{team.name}</div>
                    <div className='flex'>
                    <div>{team.title}</div>
                      <div>
                        <ul>
                          <li><IoMdShare /></li>
                          <li><FaFacebookF /></li>
                          <li><FaXTwitter /></li>
                          <li><FaInstagram /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
            ))
          }
        </div> */}

    </div>
  )
}

export default TeamMembers