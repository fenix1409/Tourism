import { Logo } from '@/public/images/Icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Destination = () => {
    return (
        <div className='destination'>
            <div className="flex items-center justify-between pl-[55px] pt-[40px]">
                <button><Logo /></button>
                <span className='w-[473px] border-[1px] border-white opacity-10'></span>
                <ul className='header relative flex items-center gap-[48px] pl-[123px] pr-[165px] py-[38px]'>
                    <li className='text-[16px] leading-[19px]'>
                        <Link className="text-white hover:border-b-[3px] hover:border-white pb-[34px]" href={'/'}>00 HOME</Link>
                    </li>
                    <li className='text-[16px] leading-[19px] '>
                        <Link className="text-white hover:border-b-[3px] hover:border-white pb-[34px]" href={'/destination'}>01 DESTINATION</Link>
                    </li>
                    <li className='text-[16px] leading-[19px]'>
                        <Link className="text-white hover:border-b-[3px] hover:border-white pb-[34px]" href={'/crew'}>02 CREW</Link>
                    </li>
                    <li className='text-[16px] leading-[19px]'>
                        <Link className="text-white hover:border-b-[3px] hover:border-white pb-[34px]" href={'/technology'}>03 TECHNOLOGY</Link>
                    </li>
                </ul>
            </div>
            <div className='px-[164px] pt-[50px]'>
                <h1 className='text-[28px] leading-[33px] text-white mb-[40px]'><span className='text-[28px] leading-[33px] font-bold opacity-25 text-white'>01</span> Pick your destination</h1>
                <div className="flex items-center justify-between">
                    <Image src={'/images/moon.png'} alt='moon img' width={445} height={445} />
                    <div className="w-[445px] text-start">
                        <ul className='flex items-center gap-[48px] mb-[37px]'>
                            <li className='text-[16px] leading-[19px]'>
                                <Link className="text-white hover:border-b-[3px] hover:border-white pb-[12px]" href={'/'}>MOON</Link>
                            </li>
                            <li className='text-[16px] leading-[19px] '>
                                <Link className="text-white hover:border-b-[3px] hover:border-white pb-[12px]" href={'/'}>MARS</Link>
                            </li>
                            <li className='text-[16px] leading-[19px]'>
                                <Link className="text-white hover:border-b-[3px] hover:border-white pb-[12px]" href={'/'}>EUROPE</Link>
                            </li>
                            <li className='text-[16px] leading-[19px]'>
                                <Link className="text-white hover:border-b-[3px] hover:border-white pb-[12px]" href={'/'}>TITAN</Link>
                            </li>
                        </ul>
                        <h2 className='text-[100px] leading-[114px] text-white mb-[14px]'>MOON</h2>
                        <p className='text-[18px] leading-[32px] text-[#D0D6F9] pb-[54px]'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <span className='w-[444px] border-[1px] border-[#383B4B] block'></span>
                        <div className="flex items-center gap-[79px] mt-[28px]">
                            <div className="flex flex-col">
                                <p className='text-[14px] leading-[16px] text-[#D0D6F9]'>AVG. DISTANCE</p>
                                <strong className='text-[28px] leading-[32px] text-white'>384,400 km</strong>
                            </div>
                            <div className="flex flex-col">
                                <p className='text-[14px] leading-[16px] text-[#D0D6F9]'>Est. travel time</p>
                                <strong className='text-[28px] leading-[32px] text-white'>3 DAYS</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination