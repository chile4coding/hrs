import React from 'react'
import {CiMedicalCross} from "react-icons/ci"
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {LiaUserNurseSolid} from "react-icons/lia"

import Image from 'next/image';
export default function Layout({children}) {

  
  return (
    <section className=" flex flex-col justify-center items-center h-[100vh] w-full   ">
      <div className="grid grid-cols-2  gap-20  px-8 sm:grid-cols-1 md:gap-10 md:grid-cols-1 ">
        <div className="max-w-[465px]  my-auto mx-auto  sm:hidden md:hidden normal-case">
          <div className=" w-[97px] h-[89px] mb-[30px]  sm:text-xs mx-auto">
            <Image src="/hrs.png" width="97" height="89"  alt='logo'/>
          </div>
          <h2 className="text-[#1E1E1E] font-bold text-[44px]   leading-snug">
            Reasons to Join the HRS Platform Now
          </h2>
          <div className="flex gap-3 bg-[#fff]  p-5 my-10   rounded-full drop-shadow-md">
            <CiMedicalCross className=" text-5xl text-[#3188FF]" />
            <p className=" text-[14px] text-[#8F8F8F] leading-6">
              You get access to locate and connect with specialists from
              different hospitals around you making consultation easier.
            </p>
          </div>
          <div className="flex gap-3 text-[14px] bg-[#fff] text-[#8F8F8F] p-5 my-2 rounded-full drop-shadow-md">
            <AiOutlineQuestionCircle className=" text-5xl text-[#3188FF]" />
            <p className="  text-[14px] text-[#8F8F8F] leading-6">
              You get access to locate and connect with specialists from
              different hospitals around you making consultation easier.
            </p>
          </div>
          <div className=" flex gap-3 items-center  text-[14px] bg-[#fff] text-[#8F8F8F] p-5 my-10 rounded-full drop-shadow-md">
            <LiaUserNurseSolid className=" text-5xl text-[#3188FF]" />
            <p className="text-[14px] text-[#8F8F8F] leading-6">
              You get access to locate and connect with specialists from
              different hospitals around you making consultation easier.
            </p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
