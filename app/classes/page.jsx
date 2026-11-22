import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <nav className='flex p-3 bg-purple-600 fixed z-2 t-0 w-full'>
              <div className='text-white text-4xl font-semibold'>RMPS</div>
              <div className='text-white flex-1 text-center text-3xl font-semibold'>Classes</div>
        </nav>



      <div className="grid mt-10 grid-cols-1 sm:grid-cols-4 gap-x-5 gap-y-5 p-10">
        {/* Class NC */}
        <Link href={'/classes/NC'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class NC
          </div>
        </Link>
        {/* Class KG */}
        <Link href={'/classes/KG'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class KG
          </div>
        </Link>
        {/* Class 1 */}
        <Link href={'/classes/1'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 1
          </div>
        </Link>
        {/* Class 2 */}
        <Link href={'/classes/2'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 2
          </div>
        </Link>
        {/* Class 3 */}
        <Link href={'/classes/3'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 3
          </div>
        </Link>
        {/* Class 4 */}
        <Link href={'/classes/4'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 4
          </div>
        </Link>
        {/* Class 5 */}
        <Link href={'/classes/5'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 5
          </div>
        </Link>
        {/* Class 6 */}
        <Link href={'/classes/6'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 6
          </div>
        </Link>
        {/* Class 7 */}
        <Link href={'/classes/7'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 7
          </div>
        </Link>
        {/* Class 8 */}
        <Link href={'/classes/8'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 8
          </div>
        </Link>
        {/* Class 9 */}
        <Link href={'/classes/9'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 9
          </div>
        </Link>
        {/* Class 10 */}
        <Link href={'/classes/10'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 10
          </div>
        </Link>
        {/* Class 11 */}
        <Link href={'/classes/11'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 11
          </div>
        </Link>
        {/* Class 12 */}
        <Link href={'/classes/12'}>
          <div className='bg-purple-700 text-center py-20 rounded-2xl text-3xl text-white cursor-pointer hover:bg-purple-500'>
            Class 12
          </div>
        </Link>


      </div>
    </div>
  )
}

export default page
