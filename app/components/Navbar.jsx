"use client"
// import for page.jsx
      import React from 'react'

// import for navbar 
      import Image from 'next/image'
      import { CiMenuKebab } from "react-icons/ci";
      import { useState } from 'react'
      import './css/sidebar.css'

      const page = () => {
        const [showsidebar, setShowsidebar] = useState(false)
        function alerti() {
          alert("hello yah mera khet hai")
        }
        return (
        <>
          <div className='relative w-full flex items-center justify-between'>
  {/* px-5 */}
            <Image src={'/assets/logo.png'} alt='logo' width={100} height={100}className='h-auto'></Image>
            <p className="flex-1 text-4xl font-bold font-['Poppins'] hidden md:block">Rama Memorial Public School</p>
            <CiMenuKebab className='text-2xl mr-5 cursor-pointer'onClick={() => {showsidebar?setShowsidebar(false):setShowsidebar(true)}} /> 
            {/* sidebar */}
            <div style={{display:showsidebar?'block':'none'}}className='z-10 absolute w-full h-[100vh] bg-[rgba(0,0,0,0.3)] top-0'>
                <aside  className=' w-full h-full relative z-30'
                  onClick={() => {showsidebar?setShowsidebar(false):setShowsidebar(true)}}>
                    <ul className='sidebar h-full absolute right-0 top-0 bg-white text-2xl  pt-5'>
                        <li onClick={() => {event.stopPropagation(); alerti()}} className='border-y py-5 text-xl li-click px-16 cursor-pointer'>About</li>
                        <li onClick={() => {event.stopPropagation(); alerti()}} className='border-b py-5 text-xl li-click px-16 cursor-pointer'>Register/Apply</li>
                        <li onClick={() => {event.stopPropagation(); alerti()}} className='border-b py-5 text-xl li-click px-16 cursor-pointer'>Admisssion</li>
                        <li onClick={() => {event.stopPropagation(); alerti()}} className='border-b py-5 text-xl li-click px-16 cursor-pointer'>Fees</li>
                        <li onClick={() => {event.stopPropagation(); alerti()}} className='border-b py-5 text-xl li-click px-16 cursor-pointer'>Calender</li>
                    </ul>
                </aside>
              </div>
          </div> 
          <p className="flex-1 mb-2 text-2xl text-center font-semibold font-['Poppins'] text-purple-600">Rama Memorial Public School</p>
        </>
        )
      }

      export default page
