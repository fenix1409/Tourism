import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Space = () => {
  return (
    <div className='py-[55px] pt-[150px]'>
        <div className="flex items-center justify-center gap-[386px]">
          <div className="w-[450px]">
            <span className="text-[28px] leading-[33px] text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</span>
            <h1 className="text-[150px] leading-[171px] text-[#D0D6F9]">SPACE</h1>
            <p className="text-[18px] leading-[32px] text-[#D0D6F9]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <Link className='hover:scale-[1.05] duration-200' href="/">
            <Image src={'/images/explore.png'} alt="space btn image" width={274} height={274}/>
          </Link>
        </div>
    </div>
  )
}

export default Space