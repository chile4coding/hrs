import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaCalendarPlusSolid } from "react-icons/lia";
import {MdOutlineTimer} from "react-icons/md"

export const ImageComponent = ({ imageUrl, rounded }) => {
  return <img src={imageUrl} alt="Image"  className={`h-full w-full  object-cover ${rounded}`}/>;
};

export const Rating=({rate})=>{
  return (
    <div className="rating rating-sm text-center">
      <input
        type="radio"
        name={`rating-${rate}`}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={`rating-${rate}`}
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name={`rating-${rate}`}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={`rating-${rate}`}
        className="mask mask-star-2 bg-orange-400"
      />
 
      <input
        type="radio"
        name={`rating-${rate}`}
        className="mask mask-star-2 bg-orange-400"
      />
 
  
 
    </div>
  );
}
const rate = [1, 2, 3, 4]
export function Specialistscompletecard({rate}) {
  return (
    <>
      <div className=" md:w-full  xl:w-full lg:w-full  h-full  sm:w-full bg-white   cursor-pointer   border-collapse border-0 hover:bg-white  ">
        <div className="card-body   w-full">
          <div className=" w-16 h-16 mx-auto">
            <ImageComponent imageUrl="https://infoguidenigeria.com/wp-content/uploads/2022/11/Marketing-Coordinator-Job-Description-780x470.jpg" />
          </div>
          <h1 className="  border-0 p-2 text-[#1E1E1E] capitalize  font-semibold text-center">
            Dr Chile Omereji
          </h1>
          <p className="  text-[12px] capitalize text-center  font-normal">
            Neurologist
          </p>
          <div className=" text-center mt-2">
            <Rating rate={rate} />
          </div>
        </div>
        <div>
        <div className="flex  items-center justify-center py-2  border w-full gap-3">
          <MdOutlineTimer className=" justify-self-center  text-lg" />{" "}
          <p className="justify-self-center">9:00 AM to 16:00 PM Today</p>
        </div>

        </div>

      </div>
    </>
  );
}

export function Specialistcard() {
  return (
    <div className="card md:w-full  xl:w-full lg:w-full  h-full  sm:w-full bg-white   cursor-pointer   border-collapse border-0 hover:bg-white ">
      <div className="card-body   w-full">
        <div className=" flex  justify-center  items-center gap-2  ">
          <div className="  rounded-lg py-4 bg-[#3188FF] w-[48px] h-[48px] flex justify-center items-center">
            <LiaCalendarPlusSolid className=" text-8xl text-[white]" />
          </div>

          <div>
            <h2 className="text-[##102D55]  text-left font-bold  text-[20px] font-Mukta capitalize  p-2 sm:text-base">
              1
            </h2>
            <span className="  border-0 p-2 text-[#1E1E1E] capitalize  font-semibold">
              Applications
            </span>
            <p className="  text-[12px] capitalize text-center  font-normal">
              today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Specialists() {
  return (
    <div className=" card w-full md:w-full lg:w-full  h-[83px]  px-4    bg-white   cursor-pointer   border-collapse border-0 hover:bg-white ">
      <div className="grid grid-cols-4 ">
        <div className="flex items-center col-span-3 ">
          <Image
            src={"/specialist.png"}
            width={80}
            height={50}
            className=" p-0"
          />
          <div className=" ">
            <h2 className="font[500]  text-[#454545] text-[12px]">
              Chile Omereji
            </h2>
            <p className="text-[#454545] text-[12px]">Neuro Surgion</p>
          </div>
        </div>
        <button className=" rounded-md btn-xs border-0 bg-[green] text-[#fff] self-center text-[12px]">
          Available
        </button>
      </div>
    </div>
  );
}

export default function Specialist() {
  return (
    <div className="bg-[#fff] mb-8   card">
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
