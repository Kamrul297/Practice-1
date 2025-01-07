import React from 'react'
import { FaStar } from 'react-icons/fa';
import { SiComma } from 'react-icons/si';

const users = [
    {
        id:"1",
        name:"David Doe",
        title:"User From England",
        icon:<FaStar/>,
        text:"Legit....and legit. Although the payment was processed manually, I have received my first payment within a very short time., I think nice for invest at this site."
    },
    {
        id:"2",
        name:"Melodie Ferguson",
        title:"User From India",
        icon:<FaStar/>,
        text:"I have invested with this platform and gotten my money in my account. This is legit and safe. Great doing business with them."
    },
    {
        id:"3",
        name:"Johne Alex",
        title:"User From England",
        icon:<FaStar/>,
        text:"Legit....and legit. Although the payment was processed manually, I have received my first payment within a very short time., I think nice for invest at this site."
    }
];

const UsersSay = () => {
  return (
    <div className='lg:p-[70px] p-5'>
        <h1 className='text-center poppins-bold lg:text-[40px] text-2xl text-[#0B0C0C]'>What Users Say About Us</h1>
        <p className='text-center poppins-regular text-[#677372] text-xs leading-5 mt-4'>We are doing really good at this market and here are the words we loved to get from a few of our users.</p>

        <div className='grid lg:grid-cols-3 justify-center items-center gap-3'>
            <>
                {
                    users.map((say) => (
                        <div key={say.id} className='w-[370px] h-[290px] bg-[#EDF5F4] rounded-xl px-5 py-10 space-y-5'>
                            <div className='flex text-[#FFB70A] text-[25px] gap-4'>
                                <span><FaStar/></span>
                                <span><FaStar/></span>
                                <span><FaStar/></span>
                                <span><FaStar/></span>
                                <span><FaStar/></span>
                            </div>
                            <div className='text-[#586261]'>{say.text}</div>
                            <div className=''>
                                <div>{}</div>
                                <div className=''>
                                    <div className='text-[#006D5B] text-[16px] poppins-medium'>{say.name}</div>
                                    <div className='text-[#677372] text-[10px]'>{say.title}</div>
                                </div>
                                <p className='flex text-[#FFFFFF] text-[40px] float-end'>
                                    <span><SiComma/></span>
                                    <span><SiComma/></span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </>
        </div>
    </div>
  )
}

export default UsersSay