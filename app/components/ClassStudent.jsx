import React from 'react'
import Image from 'next/image'

const ClassStudent = ({sr, roll_number, Name, father, mother, phone_number}) => {
  return (
    <>
              <div className="flex justify-center flex-col p-2 gap-2">

                  <div className='bg-purple-300 w-full flex p-4 gap-2 rounded-2xl
                    border-1 border-purple-500 border-solid'>
                      <div>{sr}</div>  
                      <Image src={'/assets/asstudent.jpeg'} alt='Student Photo' width={100} height={120} className='h-[120px] w-auto'></Image> 
                      <div className="flex flex-col">
                          <div>{roll_number}</div>                        
                          <div>{Name}</div>           
                          <div>{father}</div>          
                          <div>{mother}</div>
                          <div>{`+91 ${phone_number}`}</div>          
                      </div> 
                  </div>


              </div>















    </>
    
  )
}

export default ClassStudent
