import React from 'react'




export default function Dashboardmenus({details, icon, progress, data, visitors, value}) {
  return (
    <>
      <div className=" hover:bg-[#3188FF] hover:text-white card md:w-full  xl:w-full lg:w-full  h-full  sm:w-full bg-white   cursor-pointer  btn border-collapse border-0  ">
        <div className="card-body   w-full">
          <div className=" flex  item-center gap-2 ">
            <div className="bg-[#EFF6FF] border-0  text-[#3188FF]  rounded-full  flex justify-center items-center ">
              {icon}
            </div>
            <h2 className="  font-bold  text-[20px] font-Mukta capitalize  p-2 sm:text-base">
              {details}
            </h2>
          </div>
          <div className="flex  items-center my-4 gap-8">
            <h2 className=" font-bold text-2xl">{value}</h2>
            <div className="">
              <span className="indicator-item badge bg-[#EFF6FF] border-0 p-2 text-[#3188FF]">
                new
              </span>
            </div>
          </div>
          <p className=" text-left text-[12px] capitalize">{data}</p>

          <progress
            className="progress  progress-primary w-full h-[8px] mt-6"
            value={30}
            max="100"></progress>
          <p className=" text-left text-[12px] capitalize">{visitors}</p>
        </div>
      </div>
    </>
  );
}
