import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Recommended() {
  return (
    <div className="  w-full md:w-full lg:w-full  h-[83px]   bg-white mx-10  cursor-pointer  btn border-collapse border-0 hover:bg-white my-2 ">
      <div className=" grid grid-cols-3">
        <div className=" flex col-span-2 items-end gap-2">
          <Image src={"/fmc.png"} width={51} height={51} />
          <div className=" flex  flex-col justify-between  h-10">
            <div className="flex items-center gap-4 ">
              <p className="p-0 m-0 text-sm  font-bold text-[#0F0F0F]">FMC</p>{" "}
              <p>4.5</p>{" "}
              <div className="flex gap-1 text-[12px] font-[300] text-[#838383]">
                <span>4.5</span>
                <span>4.5</span>
                <span>4.5</span>
              </div>
            </div>
            <h2 className="text-[12px] font-[300] text-[#838383]">
              General Hospital Service
            </h2>
          </div>
        </div>
        <Link href="" className=" self-end text-[#3188FF] capitalize">
          view in map
        </Link>
      </div>
    </div>
  );
}
