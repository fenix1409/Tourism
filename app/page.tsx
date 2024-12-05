import { Logo } from "@/public/images/Icons";
import Space from "./space/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space pl-[55px] pt-[40px]">
      <div className="flex items-center justify-between">
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
      <Space />
    </div>
  );
}
