import React from "react";
import Layout from "@/components/Layout";
import Card from "@/components/hospitals/Card";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

export default function Hospitals() {
  return (
    <Layout>
      <div className=" grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
        <Card />
        <Card />
        <Card />
        
      </div>
      <div className=" flex justify-between items-center mb-4 ">
        <button className="btn  sm:btn-xs  font-normal capitalize px-8 border border-[#8F8F8F] hover:bg-[#3188FF]">
          <BsArrowLeft /> Previous
        </button>
       

        <butto n className="sm:btn-xs  btn font-normal   border border-[#8F8F8F] px-8 capitalize hover:bg-[#3188FF] ">
          next <BsArrowRight />
        </butto>
      </div>
    </Layout>
  );
}
