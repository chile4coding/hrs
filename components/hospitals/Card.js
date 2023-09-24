import React from "react";
import { ImageComponent } from "@/components/specialists";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Rating, Typography } from "@mui/material";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import {MdOutlineDirections} from "react-icons/md"
import { useRouter } from "next/router";



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

export default function Card() {
  const router  = useRouter()

  function handleHospitalDetails(){
    router.push("/hospitals/details")
  }
  function handleMapView(){
    router.push("/hospitals/map")

  }
  return (
    <div className="mt-6 mb-10 sm:mb-2 card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white ">
      <div className=" sm:max-h-[100px]">
        <ImageComponent imageUrl="/hospital.jpg" maxHeight="240px" />
      </div>

      <div className=" p-6 sm:p-2   w-full">
        <div className=" flex justify-between items-center">
          <h2>Abuja</h2>
          <Favourite />
        </div>
        <div className=" flex justify-between mt-3">
          <h2>National Hospital </h2>
          <span className=" flex gap-1  items-center">
            4.5 <AiTwotoneStar className=" fill-yellow-500" />
          </span>
        </div>
        <p className=" text-[12px] leading-snug py-4 sm:pt-2 sm:text-[7px] text-justify">
          We are originally designed to cater for the needs of women and
          children in Nigeria.
        </p>
        <div className=" flex  justify-between items-center">
          <button
            onClick={handleHospitalDetails}
            className="btn   btn-sm sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            Details <BsArrowRight />
          </button>
          <div>
            <span
              className="  sm:gap-0 flex gap-2 items-center text-[#3188FF] hover:underline"
              onClick={handleMapView}>
              <MdOutlineDirections />
              <span className=" sm:text-[9px] normal-case cursor-pointer">
                view in map
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
