import React from 'react'
import bugatti from '../assets/bugatti.png'


const Cars = () => {
  return (
    <div className="bg-[#00060a] max-w-screen  flex flex-col items-center justify-center">
      <h1 className="text-white font-[Cormorant] text-[96px] mt-15">
        Cars
      </h1>

      <div className="grid grid-cols-2 gap-10 mt-10">
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        <div className=" w-120 h-88">
          <img className='w-100 mt-2.5 ml-10' src={bugatti} alt="" />
          <button className="bg-[#2f383f] hover:bg-[#384249] text-white px-6 py-3 rounded-full transition cursor-pointer mt-5.5">
          Book Now
        </button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Cars
