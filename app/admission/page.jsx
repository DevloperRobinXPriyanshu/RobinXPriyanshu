import React from 'react'

const page = () => {
  return (
    <div>
      {/* header */}
      <div className='bg-purple-700 text-white p-3 relative sticky top-0 left-0'>
        <span className='text-2xl font-semibold'>RMPS</span>
        <span className='text-xl absolute top-0 left-0 h-full w-full text-center flex items-center justify-center '>Add Student</span>
      </div>
      <form action="" className='mt-3'>

        {/* Choosing the image         */}
        <label className="mx-auto w-28 h-36 border-2 border-dashed border-gray-400 rounded flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:border-blue-600 transition overflow-hidden">
          <span className="text-xs text-gray-500 text-center px-2">
            Passport Size Photo
          </span>
          <input type="file" className="hidden" />
        </label>

        {/* student Name */}
        <div className='mt-5 '>
          <label className='pl-3 pt-2 text-xl '>1. Write the name of student.</label>
          <div className='flex justify-around mt-2 '>
            <input type="text" placeholder='First Name' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
            <input type="text" placeholder='Last Name' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
          </div>
        </div>

        {/* Father's Name */}
        <div className='mt-5 '>
          <label className='pl-3 pt-2 text-xl '>2. Write the Father's name of student.</label>
          <div className='flex justify-around mt-2 '>
            <input type="text" placeholder='First Name' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
            <input type="text" placeholder='Last Name' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
          </div>
        </div>
        {/* Mother's Name */}
        <div className='mt-5 '>
          <label className='pl-3 pt-2 text-xl '>3. Write the Mother's name of student.</label>
          <div className='flex justify-around mt-2 '>
            <input type="text" placeholder='First Name' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
            <input type="text" placeholder='Last Name' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
          </div>
        </div>

        {/* CLASS */}
        <div className='mt-5 pl-3 '>
          <label className='pt-2 text-xl '>4. Enter the Class & Roll No. of</label>
          <label className='pt-2 text-xl '><pre> students</pre></label>
          <div className='flex justify-around mt-2 '>
            <input type="number" placeholder='Class' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
            <input type="number" placeholder='Roll Number' className='border border-purple-700 rounded-2xl text-center border-solid w-[45%] p-2' />
          </div>
        </div>


        {/* DOB */}
        <div className='mt-5 '>
          <label className='pl-3 pt-2 text-xl '>5. Enter the DOB of student.</label>
          <div className='flex justify-around mt-2 '>
            <input type="date" placeholder='Date Of Birth' className='border border-purple-700 rounded-2xl text-center border-solid w-[90%] p-2' />
          </div>
        </div>


        {/* Village */}
        <div className='my-5 '>
          <label className='pl-3 pt-2 text-xl '>6.Write the village name.</label>
          <div className='flex justify-around mt-2 '>
            <input type="Text" placeholder='Village..' className='border border-purple-700 rounded-2xl text-center border-solid w-[90%] p-2' />
          </div>
        </div>

        {/* Post */}
        <div className='my-5 '>
          <label className='pl-3 pt-2 text-xl '>7.Write the Post name.</label>
          <div className='flex justify-around mt-2 '>
            <input type="Text" placeholder='Post..' className='border border-purple-700 rounded-2xl text-center border-solid w-[90%] p-2' />
          </div>
        </div>

        {/* Mobile Number */}
        <div className='my-5 '>
          <label className='pl-3 pt-2 text-xl '>8. Write the Contact No.</label>
          <div className='flex justify-around mt-2 '>
            <input type="Text" placeholder='Contact No.' className='border border-purple-700 rounded-2xl text-center border-solid w-[90%] p-2' />
          </div>
        </div>

        {/* Total Fees */}
        <div className='my-5 '>
          <label className='pl-3 pt-2 text-xl '>9.Enter the Total Fees.</label>
          <div className='flex justify-around mt-2 '>
            <input type="Text" placeholder='Total Fees..' className='border border-purple-700 rounded-2xl text-center border-solid w-[90%] p-2' />
          </div>
        </div>

        {/* Remind Fees */}
        <div className='my-5 '>
          <label className='pl-3 pt-2 text-xl '>10.Enter the Remind Fees.</label>
          <div className='flex justify-around mt-2 '>
            <input type="Text" placeholder='Remind Fees..' className='border border-purple-700 rounded-2xl text-center border-solid w-[90%] p-2' />
          </div>
        </div>

      </form>
    </div>
  )
}

export default page
