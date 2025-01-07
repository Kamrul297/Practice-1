import React from 'react'

const Investors = [
    { id:"1", name:"Alen Gomez", title:"Alen Gomez", no:"1st", content:"Investment - $5,200.00 USD",},
    {id:"2", name:"Maria Cool", title:"admins", no:"2nd", content:"Investment - $5,100.00 USD",},
    {id:"3", name:"Alen Gomez", title:"Alen Gomez", no:"3rd", content:"Investment - $5,000.00 USD",}
];

const TopInvestors = () => {
  return (
    <div>
        <h1 className='text-[40px] poppins-bold text-[#0B0C0C] text-center'>Our Top Investors</h1>
        <p className='text-xs poppins-regular text-center mt-3 mb-10'>Here are the investor leaders who have made the maximum investment with our <br /> system.</p>

        <div className='flex justify-between items-center border-2 border-red-950 mb-20 gap-2'>
            {
                Investors.map((top) => (
                    <div key={top.id}>
                        <div className='w-[300px] h-[200px] border-2 border-black flex flex-col-reverse items-center'>
                        <div>{top.content}</div>
                            <div className='flex'>
                                <div>
                                    <p>{top.name}</p>
                                    <p>{top.title}</p>
                                </div>
                                <div>{top.no}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopInvestors