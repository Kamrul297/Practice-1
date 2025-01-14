import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import { SiComma } from 'react-icons/si';
import img11 from '../assets/image11.png';
import img22 from '../assets/image22.png';
import img33 from '../assets/image33.png';
const users = [
    {
        id:"1",
        name:"David Doe",
        title:"User From England",
        img:img11,
        icon:<FaStar/>,
        text:"Legit....and legit. Although the payment was processed manually, I have received my first payment within a very short time., I think nice for invest at this site."
    },
    {
        id:"2",
        name:"Melodie Ferguson",
        title:"User From India",
        img:img22,
        icon:<FaStar/>,
        text:"I have invested with this platform and gotten my money in my account. This is legit and safe. Great doing business with them."
    },
    {
        id:"3",
        name:"Johne Alex",
        title:"User From England",
        img:img33,
        icon:<FaStar/>,
        text:"Legit....and legit. Although the payment was processed manually, I have received my first payment within a very short time., I think nice for invest at this site."
    }
];

const UsersSay = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div className='lg:p-[70px] p-5'>
        <h1 className='text-center poppins-bold lg:text-[40px] text-2xl text-[#0B0C0C]'>What Users Say About Us</h1>
        <div className='w-[49%] mx-auto'>
            <p className='text-center poppins-regular text-[#677372] text-xs leading-5 mt-4'>We are doing really good at this market and here are the words we loved to get from a few of our users.</p>
        </div>

        
          <div  className='mt-10 gap-10'>
            <Slider {...settings}>
            {
                    users.map((say) => (
                        <div className='flex w-full justify-center'>
                            <div key={say.id} className='w-[360px] h-[290px] bg-[#EDF5F4] rounded-xl px-5 py-10 space-y-5'>
                              <div className='flex text-[#FFB70A] text-[25px] gap-4'>
                                  <span><FaStar/></span>
                                  <span><FaStar/></span>
                                  <span><FaStar/></span>
                                  <span><FaStar/></span>
                                  <span><FaStar/></span>
                              </div>
                              <div className='text-[#586261] w-full h-[100px]'>{say.text}</div>
                              <div className='flex justify-between items-center'>
                                  <div className='flex justify-between items-center gap-3'>
                                      <div><img src={say.img} width="50px" height="50px" alt="" /></div>
                                      <div className=''>
                                          <div className='text-[#006D5B] text-[16px] poppins-medium'>{say.name}</div>
                                          <div className='text-[#677372] text-[10px]'>{say.title}</div>
                                      </div>
                                  </div>
                                  <p className='flex text-[#FFFFFF] text-[40px]'>
                                      <span><SiComma/></span>
                                      <span><SiComma/></span>
                                  </p>
                              </div>
                          </div>
                        </div>
                    ))
                }
            </Slider>
          </div>
    </div>
  )
}

export default UsersSay