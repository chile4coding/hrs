import React from 'react'

export default function Dashboardmenus({details, icon}) {
  return (

    <div className="card md:w-full lg:w-full  h-[178px]   bg-white mx-10  cursor-pointer  btn border-collapse border-0 hover:bg-white">
      <div className="card-body items-center text-center">
        <h2 className="text-[#3188FF]  font-bold font-Mukta">{details}</h2>
      </div>
    </div>
  );
}
