import React from "react";

import { ImageComponent } from "@/components/specialists";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Rating, Typography } from "@mui/material";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import {MdOutlineDirections} from "react-icons/md"
import { useRouter } from "next/router"
import { getSingleHospital } from "@/redux/hospitalSlice";
import { useDispatch } from "react-redux";




function Favourite() {
  return (
    <>
      <Rating
        name="customized-10"
        max={1}
        defaultValue={0}
        className=" text-red-700"
        precision={1}
        icon={<MdOutlineFavorite fontSize="inherit" />}
        emptyIcon={<MdOutlineFavoriteBorder fontSize="inherit" />}
      />
    </>
  );
}

export default function Card({hospital}) {
  const dispatch  =  useDispatch()
  
  
  const router  = useRouter()

  const { name, avatar, avgRate, address, _id} = hospital;
  function handleHospitalDetails(id){

    dispatch(getSingleHospital(id))
    // dispatch(getSingleHospital(id))
    router.push("/hospitals/details")
  }
  function handleMapView(id){

 dispatch(getSingleHospital(id));
    router.push("/hospitals/map")

  }

  return (
    <div className="mt-6 mb-10 sm:mb-2 card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white ">
      <div className=" sm:max-h-[100px]">
        <ImageComponent imageUrl={avatar} maxHeight="240px" />
      </div>

      <div className=" p-6 sm:p-2   w-full">
        <div className=" flex justify-between items-center">
          <h2>Abuja</h2>
        </div>
        <div className=" flex justify-between mt-3">
          <h2>{name}</h2>
          <span className=" flex gap-1  items-center">
            {avgRate}
            <AiTwotoneStar className=" fill-yellow-500" />
          </span>
        </div>
        <p className=" text-[12px] leading-snug py-4 sm:pt-2 sm:text-[7px] text-justify">
          {address}
        </p>
        <div className=" flex  justify-between items-center">
          <button
            onClick={handleHospitalDetails.bind(this, _id)}
            className="btn   btn-sm sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            Details <BsArrowRight />
          </button>
          <div>
            <span
              className="  sm:gap-0 flex gap-2 items-center text-[#3188FF] hover:underline"
              onClick={handleMapView.bind(this, _id)}>
              <MdOutlineDirections />
              <span className=" sm:text-[9px] normal-case cursor-pointer" >
                view in map
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
