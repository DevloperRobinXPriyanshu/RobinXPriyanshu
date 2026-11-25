import React from 'react'
import Messages_desk_card from './mesage-desk-card'
const Messages_desk = () => {
  return (
    <div className='text-black p-10 grid grid-cols-1 md:grid-cols-3 gap-16'>
    <Messages_desk_card/>
    <Messages_desk_card/>
    <Messages_desk_card/>
    </div>
  )
}

export default Messages_desk

