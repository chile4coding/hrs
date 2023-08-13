import React from 'react'
import Image from "next/image";
import Link from "next/link";
  function Specialists() {
  return (
    <div className=" card w-full md:w-full lg:w-full  h-[83px]   px-4    bg-white   cursor-pointer   border-collapse border-0 hover:bg-white ">
      <div className="grid grid-cols-3 ">
        <div className="flex items-center col-span-2">
          <Image src={"/specialist.png"} width={80} height={80} />
          <div className="p-4">
            <h2 className="font[500] text-lg text-[#454545]">Chile Omereji</h2>
            <p className="text-[#454545]">Neuro Surgion</p>
          </div>
        </div>
        <button className="btn border-0 bg-[green] text-[#fff] self-center">
          Available
        </button>
      </div>
    </div>
  );

}

export default function Specialist(){
    return (
      <div className='bg-[#fff]'>
        <h2 className="text-[#002C69]  font-bold font-Mukta  capitalize text-lg pl-8 py-4">
         Specialists
        </h2>
        <Specialists />
        <Specialists />
        <Specialists />
        <Specialists />
      </div>
    );
}
