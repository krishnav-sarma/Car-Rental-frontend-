import React from 'react'
import bg from '../assets/bg.jpg'

const Nav = () => {
  return (
    <div className='z-10000 '>
        <nav className='flex justify-between mx-[200px] bg-transparent  rounded-full'>
            <img className='w-[100px] h-[70px] ml-10 mt-2' src={bg} alt="" />
            <ul className='flex gap-[100px] bg-transparent my-8 mr-10 text-[25px] font-[Manrope] font-medium text-white'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Cars</li>
                <li className='cursor-pointer'>Contacts</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav