import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaCalendarPlusSolid } from "react-icons/lia";
import { MdOutlineTimer } from "react-icons/md";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";
import { getSingleHospital } from "@/redux/hospitalSlice";
import { useDispatch } from "react-redux";
export const ImageComponent = ({ imageUrl, rounded, maxHeight }) => {
  return (
    <img
      src={imageUrl}
      alt="Image"
      className={`  rounded-t-lg   rounded-tr-lg   h-full   w-full  object-cover ${rounded}`}
      style={{ maxHeight: maxHeight }}
    />
  );
};

export const Ratings = ({ rate }) => {
  return (
    <Rating
      sx={{
        fill: "green",
      }}
      className=" text-center"
      defaultValue={rate}
      precision={1}
    />
  );
};

export function Specialistscompletecard({ specialist, name, rate, hospitalId }) {
  const dispatch = useDispatch();
  const { avatar, specialist: specialistDoc, _id, position } = specialist;
  const router = useRouter();

  function handleSpecialistHospital(id) {
    dispatch(getSingleHospital(id));
    router.push(`/hospitals/${name}`);
  }

  return (
    <>
      <div className=" md:w-full  xl:w-full lg:w-full  h-full  sm:w-full bg-white   cursor-pointer   border-collapse border-0 hover:bg-white  ">
        <div className="card py-6   w-full">
          <div className=" w-16 h-16 mx-auto">
            <ImageComponent imageUrl={avatar} />
          </div>
          <h1 className="  border-0 p-2 text-[#1E1E1E] capitalize  font-semibold text-center">
            {specialistDoc}
          </h1>
          <p className="  text-[12px] capitalize text-center  font-normal">
            {position}
          </p>
          <div className=" text-center mt-2">
            <Ratings rate={rate} />
          </div>
        </div>
        <div>
          <div className="flex  items-center justify-between px-2 py-2  border w-full gap-3 sm:text-xs ">
            <span>{name}</span>
            <p
              className="justify-self-center sm:text-[8px] hover:underline"
              onClick={handleSpecialistHospital.bind(this, hospitalId)}>
              view hospital
            </p>
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
