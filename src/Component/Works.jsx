import React from 'react';
import { FiUser } from 'react-icons/fi';
import { LuClipboardList } from 'react-icons/lu';
import { TbWallet } from 'react-icons/tb';

const steps = [
  {
    id: 1,
    icon: <FiUser />,
    label: 'Account',
  },
  {
    id: 2,
    icon: <LuClipboardList />,
    label: 'Plan',
  },
  {
    id: 3,
    icon: <TbWallet />,
    label: 'Profit',
  },
];

const Works = () => {
  return (
    <div className='lg:p-[70px] p-5'>
      <h1 className='text-[40px] poppins-bold text-[#0B0C0C] text-center'>
        How Fimaex Works
      </h1>
      <p className='text-xs poppins-regular text-center mt-3 mb-10 md:w-[60%] mx-auto
      '>
        Our mission is to empower clients with strategic asset management
        services that maximize growth and mitigate risks across diverse
        markets.
      </p>

      <div className='flex justify-between items-center border-red-600 border-2 mb-16'>
        {steps.map((step) => (
          <div
            key={step.id}
            className='flex w-[200px] h-[200px] items-center justify-center'
          >
            <div className='w-[100px] h-[100px] rounded-full bg-[#EBF6F5] border-[1px] border-[#006D5B] flex flex-col items-center justify-center'>
              <div className='w-[40px] h-[40px] rounded-full bg-white border-[1px] border-[#006D5B] flex items-center justify-center text-center poppins-regular text-[25px] text-[#006D5B]'>
                {step.label}
              </div>
              <span className='text-[#006D5B] text-xl mt-2'>{step.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
