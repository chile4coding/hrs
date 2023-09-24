import React from "react";
import { ImageComponent } from "../specialists";
import { Modal } from "@/pages/appointment";


export default function Details() {

      const handleShowModal = () => {
        window.my_modal_2.showModal();
      };
   
  return (
    <div className=" mt-6 mb-10 pb-6 sm:mb-2   card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white">
      <div className=" grid grid-cols-2 gap-4 sm:grid-cols-1  md:grid-cols-1 sm:gap-0">
        <div className=" ">
          <ImageComponent imageUrl="/hospital.jpg" maxHeight="384px" />

          <p className=" sm:text-lg my-4 sm:my-2 font-bold text-[28px] text-[#3188FF]">
            Save Life Mission Hospital
          </p>
        </div>

        <div>
          <p className=" sm:text-xs text-[16px] font-normal leading-snug  text-justify">
            SaveALife Mission Hospital is an ISO-Certified group of hospitals
            with over 500 bed strength, fully equipped for multi-specialty
            procedures including: IVF/ICSI Fertility Treatment, Laparoscopy,
            Knee/Hip Replacement, Laser Cataract and Prostate surgeries, Liver
            transplant etc..
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
              08104274522
            </h2>
          </div>
          <div className=" flex gap-6 items-center my-4">
            <h2 className=" text-[20px]  font-semibold sm:text-sm">
              Hospital Rating:
            </h2>
            <h2 className=" text-[#8F8F8F] text-[18px] sm:text-sm">
              08104274522
            </h2>
          </div>
          <div className=" flex gap-6 items-center my-4">
            <h2 className=" text-[20px]  font-semibold sm:text-sm">Website:</h2>
            <h2 className=" text-[#8F8F8F] text-[18px] sm:text-sm">
              savealifehospital.com
            </h2>
          </div>

          <div className=" flex gap-6 items-center my-4">
            <h2 className=" text-[20px]  font-semibold sm:text-sm">Address</h2>
            <h2 className=" text-[#8F8F8F] text-[18px] sm:text-sm">
              38 Uyo Street, Off Stadium Rd, Rumuomasi, Port Harcourt, Rivers
              State, Nigeria.{" "}
              <span className=" hover:underline text-[#3188FF] cursor-pointer">
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
            <button className="sm:btn-sm sm:text-xs btn  hover:text-[white] hover:bg-[#3188FF] hover:border-0 capitalize border border-[#3188FF] text-[#3188FF] bg-[white]">
              Check Facilites
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}
