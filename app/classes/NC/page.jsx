import React from 'react'
import ClassStudent from '@/app/components/ClassStudent'
import Link from 'next/link'
const page = () => {
// ek students fake deta roughfiles/studentfakedeta.js file me saved hai
  return (
    <div>
      <nav className='flex p-3 bg-purple-600 z-2 t-0 w-full'>
        <div className='text-white text-4xl font-semibold'>RMPS</div>
        <div className='text-white flex-1 text-center text-3xl font-semibold'>Class-NC</div>
      </nav>
      <div className="py-4"></div>
      <Link href={'/student'}>
          <ClassStudent sr = {1} roll_number = {43101613163} Name = "Priyanl devi" father = "Ramesh Kumar" mother  = "Meera Devi" phone_number = {2564852100} />
      </Link>
    </div>
  )
}

export default page
