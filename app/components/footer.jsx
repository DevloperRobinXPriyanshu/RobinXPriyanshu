import React from 'react'
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className='mt-10 flex flex-col sm:flex-row bg-purple-700 text-white'>
          <div className="flex-1 flex justify-around p-5">
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="flex justify-around  text-2xl p-5 sm:flex-col">
              <FaFacebook />
              <FaYoutube />
              <FaInstagram />
              <FaTwitter />
          </div>
      </div>
      <div className='bg-black flex'>
        <Image src={'/assets/logo2.png'} alt='logo' width={100} height={100}className='h-auto'></Image>
        <div className='text-white flex-1 flex flex-col justify-center items-center gap-4'>
            <p className='flex justify-center items-center gap-1'><MdOutlineCopyright className=' text-2xl'/>Copyright All rights reserved</p>
            <p className=''>@Priyanshu SAAS pvt. ltd.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
