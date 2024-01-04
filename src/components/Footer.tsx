import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-1/2 md:h-24 p-4 lg:p-20 xl:px-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
      <p>©ALL RIGHTS RESERVED BY ERDENE BATBAYAR</p>
    </div>
  )
}

export default Footer