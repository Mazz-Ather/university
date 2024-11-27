import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-4 font-semibold text-lg'>
      <Link href={'/'}>home</Link>
      <Link href={'/about'}>about</Link>
    </div>
  )
}

export default Navbar
