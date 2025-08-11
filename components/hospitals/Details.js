import React, { useEffect } from "react";
import { ImageComponent } from "../specialists";
import { Modal } from "@/pages/appointment";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getHospitals, session } from "@/services/request";
import { getHospital } from "@/redux/hospitalSlice";

export default function Details() {
  const { singleHospital } = useSelector((state) => state.hospitals);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleShowModal = () => {
    window.my_modal_2.showModal();
  };

  function handleHospitalFaclity(hos) {
    router.push(`/hospitalfacilities/${hos}`);
  }
  function handleMapView() {
    router.push("/hospitals/map");
  }

  function countWords(inputString) {
    // Remove leading and trailing white spaces and then split the string by spaces
    const words = inputString.trim().split(/\s+/);
    return words.slice(0, 60).join(" ");
  }

  return (
    <div className=" mt-6 mb-10 pb-6 sm:mb-2   card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white">
      <div className=" grid grid-cols-2 gap-4 sm:grid-cols-1  md:grid-cols-1 sm:gap-10">
        <div className=" border">
          <ImageComponent imageUrl={singleHospital?.avatar} maxHeight="384px" />

          <p className="  pl-5 sm:text-lg my-4 sm:my-2 font-bold text-[28px] text-[#3188FF]">
            {singleHospital.name}
          </p>
        </div>

        <div className="p-5">
          <p className=" pt-3  sm:text-xs text-[16px] font-normal leading-snug  text-justify">
            {countWords(singleHospital?.desc)}...
          </p>
          <div className=" flex gap-6 items-center my-4 ">
            <h2 className=" text-[20px]  font-semibold sm:text-sm ">
              Location
            </h2>
            <h2 className=" text-[#8F8F8F] text-[18px] sm:text-sm">
              Port Harcourt
            </h2>
          </div>
          <div className=" flex gap-6 items-center my-4">
            <h2 className=" text-[20px]  font-semibold sm:text-sm">Contact</h2>
            <h2 className=" text-[#8F8F8F] text-[18px] sm:text-sm">
              {singleHospital.phone}
            </h2>
          </div>
          <div className=" flex gap-6 items-center my-4">
            <h2 className=" text-[20px]  font-semibold sm:text-sm">
              Hospital Rating:
            </h2>
            <h2 className=" text-[#8F8F8F] text-[18px] sm:text-sm">
              {singleHospital.avgRate}
            </h2>
          </div>
          <div className=" flex gap-6 items-center my-4">
            <h2 className=" text-[20px]  font-semibold sm:text-sm">Website:</h2>
            <a
              href={singleHospital?.website}
              className=" text-[#8F8F8F] text-[13px] italic underline sm:text-sm">
              {singleHospital?.website}
            </a>
          </div>

          <div className=" flex gap-6 items-center my-4">
            <h2 className=" text-[20px]  font-semibold sm:text-sm">Address</h2>
            <h2 className=" text-[#8F8F8F] text-[18px] sm:text-sm">
              {singleHospital.address}
              <span
                className=" hover:underline text-[#3188FF] cursor-pointer"
                onClick={handleMapView}>
                {" "}
                view in map
              </span>
            </h2>
          </div>
          <div className=" flex gap-6 normal-case">
            <button
              onClick={handleShowModal}
              className=" sm:btn-sm btn sm:text-xs  hover:text-[white] hover:bg-[#3188FF] hover:border-0 capitalize border border-[#3188FF] text-[#3188FF] bg-[white]">
              Book Appointment
            </button>
            <button
              onClick={handleHospitalFaclity.bind(this, singleHospital.name)}
              className="sm:btn-sm sm:text-xs btn  hover:text-[white] hover:bg-[#3188FF] hover:border-0 capitalize border border-[#3188FF] text-[#3188FF] bg-[white]">
              Check Facilites
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}
