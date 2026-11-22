"use client"

import React, { useState } from 'react'

const page = () => {
        const [count, setCount] = useState(0)
  return (
    <div>
       <div className='py-28 w-full text-center'>The count is {count}</div>
       <button className='border border-black border-solid p-5 cursor-pointer rounded-2xl active:-translate-y-1'
                onClick={()=>setCount(count + 1)}
       >click me</button>
    </div>
  )
}

export default page
