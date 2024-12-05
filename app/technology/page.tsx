import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Technology = () => {
    return (
        <div className='technology'>
            <Header />
            <div className="mt-[40px] pl-[165px]">
                <h1 className='text-[28px] leading-[33px] text-white mb-[40px]'><span className='text-[28px] leading-[33px] font-bold opacity-25 text-white'>03</span>SPACE LAUNCH 101</h1>
                <div className="flex items-center justify-between">
                    <div className="w-[470px]">
                        <strong className='text-[16px] leading-[19px] mb-[11px] text-[#D0D6F9]'>THE TERMINOLOGY…</strong>
                        <h2 className='text-[56px] leading-[64px] mb-[17px] text-white'>LAUNCH VEHICLE</h2>
                        <p className='text-[18px] leading-[32px] text-[#D0D6F9]'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                    <Image className='!w-[470px] !h-[480px]' src={'/images/rocket.png'} alt='img' width={515} height={527}/>
                </div>
            </div>
        </div>
    )
}

export default Technology