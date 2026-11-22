"use client"

import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'

// get path from here 
// import '.'


const page = () => {
  return (
    <>
      <Navbar />
      <Link href={'/check/api'}>Supabase</Link>
    </>
       
  )
}

export default page
