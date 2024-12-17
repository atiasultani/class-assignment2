import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <div className=' bg-blue-900 text-white w-screen h-20 my-2'>
        <div className='px-9 py-4'>
     <Image src="/logo.png" alt="logo" width={90} height={90}/>   
     </div>
      <nav className='flex justify-evenly align-middle -mt-28 px-10 ml-6
      '>
        <p>Tuition Free Education Program on Latest Technologies</p>
    <Link href="/">Home</Link>
    <Link href="/apply">Apply</Link>
    <Link href="/jobs">Jobs</Link>
    <Link href="/results">Results</Link>
    <Link href="/courses">Courses</Link>
      </nav>
    </div>
  )
}

export default Header
