import React from 'react'
import logo from '../../assets/image-logo.png'
import profile from '../../assets/user-profile-02.png'
import lanImg from '../../assets/image2.png'
import { FaBars, FaChevronDown } from 'react-icons/fa';
import ResponsiveMenu from '../ResponsiveMenu';
import { FaXmark } from 'react-icons/fa6';

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#1",
    },
    {
      id: 2,
      name: "About",
      link: "/#2services",
    },
    {
      id: 3,
      name: "Plan",
      link: "/3#",
    },
    {
      id: 3,
      name: "Blog",
      link: "/4#",
    },
    {
      id: 3,
      name: "Contact",
      link: "/5#",
    },
  ];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => {
        setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='flex justify-between items-center lg:px-16 px-4'>
        <div className="container mx-auto flex justify-between items-center">
            <div>
              <a href="">
                <img src={logo} width="140px" height="30px" alt="" />
              </a>
            </div>

              {/* Menu */}
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-[60px] text-[14px] poppins-medium'>
                  {
                    Menu.map((data) => (
                      <li key={data.id}>
                        <a href={data.link}>
                            {data.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
            </div>
            {/* Multiple Language & Profile */}
            <div className='hidden lg:block'>
              <div className='flex justify-center items-center gap-4'>
                {/* language */}
                <div className='flex justify-center items-center gap-1'>
                  <div><img src={lanImg} width="40px" height="40px" alt="" /></div>
                  <div className='text-[14px] poppins-regular'>English</div>
                  <div><FaChevronDown /></div>
                </div>
                {/* Profile */}
                <div className='bg-[#006D5B] flex justify-center items-center rounded-md'>
                  <a href="" className='p-3 text-[#FFFFFF]'>
                    <img src={profile} width="24px" height="24px" alt="" />
                  </a>
                </div>
              </div>
            </div>
        </div>
        {/* sidebar */}
        <div className='md:hidden' >
          <button className='flex items-center' onClick={toggleNavbar}>
            { isOpen ? <FaXmark className='w-6 h-6' /> : <FaBars className='w-6 h-6' /> }
          </button>
        </div>
    </div>
    {/* mobile sidebar */}
    <ResponsiveMenu isOpen={isOpen} />
    </>
  )
}

export default Navbar