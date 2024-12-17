import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='flex flex-row w-screen h-auto'>

      <div className=' py-16 flex justify-center flex-col ml-20 space-y-5'>
      <p className='text-blue-950 text-5xl font-extrabold'>Governor Sindh</p>
<p className='text-blue-900 text-4xl'>Kamran Khan Tessori</p>
<p className='text-cyan-500 text-3xl font-extrabold'>Certified Cloud<br/>
Applied Generative AI <br/>
Engineer (GenEng)</p>
<p className='text-blue-800 text-2xl font-extrabold'>Earn up to $5,000 / month</p>

<p className='text-blue-800 text-2xl font-extrabold'>Now admissions are open in Hyderabad</p>

<div>
  <button className='bg-blue-950 text-white py-3 px-8 hover:mt-7 rounded-xl mt-10'>APPLY NOW</button>
</div>


<div className='flex justify-center flex-col text-blue-700  ml-80'>
<p className='font-extrabold text-2xl ml-5 -mt-20'>562,143</p>
<p className='text-nowrap'>Accepted Applications</p>
</div>

      </div>      
      
      <Image src="/hero-dp.png" alt="hero-dp" width={750} height={650}  className='ml-48'/> 

    </div>
  )
}

export default page
