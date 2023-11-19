import React from 'react'
import Layout from '@/components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ImageComponent } from '@/components/specialists';
import { getSingleHospital } from '@/redux/hospitalSlice';

 function Card({ facility, hospitalId }) {
   const dispatch = useDispatch();
   // const  { name, avatar,hospitalName} = facility
   const router = useRouter();

   function handleHospitalDetails(id) {
     dispatch(getSingleHospital(id));
     router.push("/hospitals/details");
   }

   console.log(facility);

   return (
     <div className="mt-6  sm:mb-2 card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white ">
       <div className=" sm:max-h-[100px]">
         <ImageComponent imageUrl={facility.avatar} maxHeight="140px" />
       </div>

       <div className=" p-6 sm:p-2   w-full ">
         <h2 className="text-[#3188FF] sm:text-[10px] sm:my-2">
           {facility.name}
         </h2>
         <div className="flex justify-between items-center    sm:text-[8px] sm:gap-2">
           <h2 className=" font-semibold">{facility.hospitalName}</h2>
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

export default function Facilities() {
    const { singleHospital } = useSelector((state) => state.hospitals);

   
  return (
    <Layout>
      <h2 className=" text-[28px] font-bold  sm:text-lg">
        {singleHospital.name}/ Facilities
      </h2>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
        {singleHospital.facilities.map((fac) => (
          <Card key={fac._id} facility={fac} hospitalId={singleHospital._id} />
        ))}
      </div>
    </Layout>
  );
}
