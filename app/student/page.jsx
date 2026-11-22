import React from 'react'
import Image from 'next/image'
import { IoMdCopy } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
const page = () => {
    return (
       <>
       {/* school Name */}
            <div className='text-xl font-medium text-center bg-purple-700 text-white mb-2'>
                Rama Memorial Public School
            </div>
        {/* Student first details         */}
                    <div className='flex justify-between'>
                        <div className='flex-1 py-5'>
                            <ul className='w-full'>
                                {/* Student Name */}
                                    <li className='border-b-1 border-t border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Name     </pre>:</span>
                                        <span className='text-xl font-normal'>Priyal Devi</span>
                                    </li>
                                {/* Class */}
                                    <li className='border-b-1 border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Class    </pre>:</span>
                                        <span className='text-xl font-normal'>NC</span>
                                    </li>
                                {/* Roll Number */}
                                    <li className='border-b-1 border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Roll No. </pre>:</span>
                                        <span className='text-xl font-normal'>1</span>
                                    </li>
                                {/* DOB  */}
                                    <li className='border-b-1 border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>DOB      </pre>:</span>
                                        <span className='text-xl font-normal'>01/01/2011</span>
                                    </li>
                            </ul>
                        </div>
                        {/* image */}
                        <div className='p-5 flex items-center'>
                            <Image src={'/assets/asstudent.jpeg'} alt='picture' width={100} height={120} className='w-[100px] h-auto'></Image>
                        </div>
                        
                    </div>
                <hr />
                <div className='py-1'></div>
                {/* Parents, Mobile number, Address */}
                <ul className='w-full'>
                     {/* Father */}
                                    <li className='border-b-1 border-t border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Father    </pre>:</span>
                                        <span className='text-xl font-normal'>Ramesh Kumar</span>
                                    </li>
                     {/* Mother */}
                                    <li className='border-b-1  border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Mother    </pre>:</span>
                                        <span className='text-xl font-normal'>Meera Devi</span>
                                    </li>
                     {/* Village */}
                                    <li className='border-b-1  border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Village   </pre>:</span>
                                        <span className='text-xl font-normal'>Basauna</span>
                                    </li>
                     {/* Post */}
                                    <li className='border-b-1  border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Post      </pre>:</span>
                                        <span className='text-xl font-normal'>Ghurghutta bujurg</span>
                                    </li>
                    {/* Mobile Number */}
                                    <li className='border-b-1  border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>tel. No.  </pre>:</span>
                                        <span className='text-xl font-normal'>+91 8948188931 
                                            <button className='h-full inline-flex items-center text-3xl p-1 rounded-full active:-translate-y-1 border border-black border-solid'>
                                                <IoMdCopy />
                                            </button>
                                        </span>
                                    </li>                
                </ul>
                <div className='my-2'></div>
                <hr />
                <div className='my-2'></div>
                {/* fees details */}
                <ul  className='w-full'>
                                    <li className='border-b-1 border-t border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Total Fee   </pre>:</span>
                                        <span className='text-xl font-normal'><FaRupeeSign className='inline' />2000</span>
                                    </li>
                                    <li className='border-b-1 border-t border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>1st Payment </pre>:</span>
                                        <span className='text-xl font-normal'><FaRupeeSign className='inline' />500</span>
                                    </li>
                                    <li className='border-b-1 border-t border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>2nd Payment </pre>:</span>
                                        <span className='text-xl font-normal'><FaRupeeSign className='inline' />400</span>
                                    </li>
                                    <li className='border-b-1 border-t border-black border-dashed w-full px-2'>
                                        <span className='text-xl font-normal mr-2.5'><pre className='inline'>Remind Fees </pre>:</span>
                                        <span className='text-xl font-normal'><FaRupeeSign className='inline' />1100</span>
                                    </li>
                </ul>
       </>
    )
}

export default page
