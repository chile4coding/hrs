import React, {useState} from 'react'
import Layout from '@/components/Layout'
import Card from '@/components/hospitals/Card'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

function Filtervalues(){
    return (
      <div className="card bg-[rgba(255,255,255,0.9)] w-full text-center  rounded-md absolute  z-50">
        <h className="py-1 cursor-pointer hover:bg-[#3188FF] hover:text-white hover:rounded-md">
          Location
        </h>
      
        <h className="py-1 cursor-pointer hover:bg-[#3188FF] hover:text-white hover:rounded-md">
          Top Rated
        </h>
     
      </div>
    );
}

export default function Recommendation() {
    const [showFilterValue, setShowFilterValue] = useState(false)
    function handleFilterValue(){
        setShowFilterValue(prev=>!prev)
    }
    function handleRemoveFilterValue(){
        setShowFilterValue(prev=>false)
    }
 
  return (
    <Layout>
      <main>
        <h2 className=" text-[28px] font-bold  sm:text-lg">Recommendations</h2>

        <div className="max-w-[140px]  relative">
          <div
            onClick={handleFilterValue}
            className=" text-center justify-center border hover:bg-[#3188FF] hover:text-white  cursor-pointer px-4 py-2 flex items-center rounded-md  max-w-[140px]">
            <HiOutlineAdjustmentsHorizontal className=" text-sm" />
            <p>Filter</p>
          </div>
          {showFilterValue && <Filtervalues />}
        </div>

        <div
          onClick={handleRemoveFilterValue}
          div
          className=" grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
          <Card />
          <Card />
          <Card />
        </div>
        <div className=" flex justify-between items-start mb-4 ">
          <button className="btn  sm:btn-xs  font-normal capitalize px-8 border border-[#8F8F8F] hover:bg-[#3188FF]">
            <BsArrowLeft /> Previous
          </button>

          <button
            n
            className="sm:btn-xs  btn font-normal   border border-[#8F8F8F] px-8 capitalize hover:bg-[#3188FF] ">
            next <BsArrowRight />
          </button>
        </div>
      </main>
    </Layout>
  );
}
