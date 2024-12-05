import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Crew = () => {
    return (
        <div className='crew'>
            <Header />
            <div className="mt-[40px] px-[165px]">
                <h1 className='text-[28px] leading-[33px] text-white mb-[40px]'><span className='text-[28px] leading-[33px] font-bold opacity-25 text-white'>02</span> Meet your Crew</h1>
                <div className="flex items-center justify-between">
                    <div className="w-[488px]">
                        <strong className='text-[32px] leading-[36px] mb-[15px] opacity-50 text-white'>Commander</strong>
                        <h2 className='text-[56px] leading-[64px] mb-[27px] text-white'>Douglas Hurley</h2>
                        <p className='text-[18px] leading-[32px] text-[#D0D6F9]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    </div>
                    <Image className='!h-[480px] !w-[400px]' src={'/images/person.png'} alt='image' width={400} height={450}/>
                </div>
            </div>
        </div>
    )
}

export default Crew