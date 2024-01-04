"use client"

import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
    {
        id:1,
        title: "always fresh & always crispy & always hot",
        Image: "/slide1.png",
    },
    {
        id:2,
        title: "We deliver your order wherever you are in ny",
        Image: "/slide2.png",
    },
    {
        id:3,
        title: "The Best Pizza to share with your family",
        Image: "/slide3.jpg",
    },
];




const Slider = () => {
    const [currentSlide , setCurrentSlide] = useState(0)
    // useEffect(() =>{
    //     const interval = setInterval(
    //         ()=>setCurrentSlide((prev)=> (prev ===data.length -1 ? 0: prev+1)),
    //         2000
    //         )
    //     return () => clearInterval(interval)

    // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
        {/* TEXT CONTAINER*/}
        <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold '>
            <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-red-500 text-white py-4 px-8 rounded-3xl md:pb-6 '>Order Now</button>
        </div>
        {/* TEXT CONTAINER*/}
        <div className='w-full flex-1 relative '>
            <Image 
                src={data[currentSlide].Image}
                alt=" " 
                fill
                className='object-cover'
                />
        </div>
    </div>
  )
}

export default Slider