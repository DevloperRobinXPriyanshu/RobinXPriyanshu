 "use client"
import React, { useContext } from 'react'
import Imageslider from './components/imagesslider'
import  Messages_desk from './components/messages-desk'
import Key_highlights from './components/Key_highlights'
import Footer from './components/footer'
const page = () => {
  return (
    <div className='relative w-full h-[100vh] '>
     <Imageslider/>
     <Messages_desk/>
     <Key_highlights/>
     <Footer />
    </div>
  )
}

export default page
