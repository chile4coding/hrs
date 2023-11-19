import React from 'react'
import { ImageComponent } from '../specialists';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { getSingleHospital } from '@/redux/hospitalSlice';



export default function Card({facility, hospitalId}) {
  const {  hospitals } = useSelector((state) => state.hospitals);

 
    const dispatch = useDispatch();
  const  { name, avatar,hospitalName} = facility
      const router = useRouter();

      function handleHospitalDetails(id) {


        const  hospitalMainId  =  hospitals.find(hos=>hos.facilities.map(fac=>fac._id === id))
        const {_id: hosId} =  hospitalMainId 

    
        
        dispatch(getSingleHospital(hosId));
        router.push("/hospitals/details");
      }

  return (
    <div className="mt-6  sm:mb-2 card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white ">
      <div className=" sm:max-h-[100px]">
        <ImageComponent imageUrl={avatar} maxHeight="140px" />
      </div>

      <div className=" p-6 sm:p-2   w-full ">
        <h2 className="text-[#3188FF] sm:text-[10px] sm:my-2">
          {hospitalName}
        </h2>
        <div className="flex justify-between items-center    sm:text-[8px] sm:gap-2">
          <h2 className=" font-semibold">{name}</h2>
          <button
            onClick={handleHospitalDetails.bind(this, hospitalId)}
            className="btn   btn-sm sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            view
          </button>
        </div>
      </div>
    </div>
  );
}
