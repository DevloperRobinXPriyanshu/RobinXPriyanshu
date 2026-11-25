 "use client"
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Imageslider from './components/imagesslider'
import  Messages_desk from './components/messages-desk'
import Key_highlights from './components/Key_highlights'
const page = () => {
  return (
    <div className='relative w-full h-[100vh] '>
     <Navbar />
     <Imageslider/>
     <Messages_desk/>
     <Key_highlights/>
    </div>
  )
}

export default page
