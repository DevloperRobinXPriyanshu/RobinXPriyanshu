import React from 'react'
import './css/keyhighlightscard.css'
const Key_highlights_card = () => {
  return (
        <>
            <div className='relative  rounded-2xl border border-purple-500 flex flex-col'>
              <div className="absolute -top-20 left-0 w-full rounded-2xl flex justify-center">
                <div className='rounded-full border-4 border-purple-500 p-20 studyingboy'></div>
              </div>
              <div className='py-15 px-40 bg-purple-500 rounded-t-2xl'></div>
              <div className='flex relative px-40 py-15 rounded-b-2xl'>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                  Accchi Padhai Hoti hai
                </div>
              </div>
            </div>
        </>
)
}

export default Key_highlights_card
