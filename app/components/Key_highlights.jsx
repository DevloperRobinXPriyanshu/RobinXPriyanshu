import React from 'react'
import Key_highlights_card from './Key_highlights_card'
const Key_highlights = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-24 items-center justify-around mt-24'>
      <Key_highlights_card/>
      <Key_highlights_card/>
      <Key_highlights_card/>
      <Key_highlights_card/>
      <Key_highlights_card/>
    </div>
  )
}

export default Key_highlights

