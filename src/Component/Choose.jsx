import React from 'react'
import { CiServer } from 'react-icons/ci';
import { GoShieldLock } from 'react-icons/go';
import { ImHome } from 'react-icons/im';
import { IoIosCash } from 'react-icons/io';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { PiLockBold } from 'react-icons/pi';
import { RiCustomerService2Fill, RiExternalLinkLine, RiUserLocationLine } from 'react-icons/ri';

const ChooseMenu = [
    {
        id:"1",
        icon:<ImHome />,
        name:"Legal Company",
        text:"Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe."
    },
    {
        id:"2",
        icon:<PiLockBold />,
        name:"High reliability",
        text:"We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks."
    },
    {
        id:"3",
        icon:<RiUserLocationLine />,
        name:"Anonymity",
        text:"Anonymity and using cryptocurrency as a payment instrument. In the era of electronic money this is one of the most convenient ways of cooperation."
    },
    {
        id:"4",
        icon:<IoIosCash />,
        name:"Quick Withdrawal",
        text:"Our all retreats are treated spontaneously once requested. There are high maximum limits. The minimum withdrawal amount is only $10 ."
    },
    {
        id:"5",
        icon:<RiExternalLinkLine />,
        name:"Referral Program",
        text:"Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe."
    },
    {
        id:"6",
        icon:<RiCustomerService2Fill />,
        name:"24/7 Support",
        text:"We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to elucidate any difficulty."
    },
    {
        id:"7",
        icon:<CiServer />,
        name:"Dedicated Server",
        text:"We are using a dedicated server for the website which allows us exclusive use of the resources of the entire server."
    },
    {
        id:"8",
        icon:<GoShieldLock />,
        name:"SSL Secured",
        text:"Comodo Essential-SSL Security encryption confirms that the presented content is genuine and legitimate."
    },
    {
        id:"9",
        icon:<IoShieldCheckmarkOutline />,
        name:"DDOS Protection",
        text:"We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation provider."
    },
];
const Choose = () => {
  return (
    <div className='lg:p-[70px] p-5 lg:mb-10'>

        {/* Text */}
        <h1 className='text-center poppins-bold text-[40px] text-[#0B0C0C]'>Why Choose <span className='text-[#02996C]'>Fimaex</span></h1>
        <p className='text-center poppins-regular text-[#677372] text-xs leading-5 mt-4 mb-10'>Financial Asset Management Exchange (Fimaex) is a dynamic investment and portfolio management company specializing in tailored financial solutions for individuals and institutions.</p>

        {/* Choose Menu */}
        <div className='grid lg:grid-cols-3 justify-center items-center gap-4'>
            {
                ChooseMenu.map((cm) => (
                <div key={cm.id} className='lg:w-[350px] w-[380px] h-[200px] rounded-[2px] border-2 border-red-950 p-5 '>
                    <div className='flex items-center gap-4'>
                        <span className='text-[#006D5B] text-[50px]'>{cm.icon}</span>
                        <span className='poppins-semibold'>{cm.name}</span>
                    </div>

                    <p className='poppins-regular text-[#677372] text-[10px] leading-5 mt-4'>{cm.text}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Choose