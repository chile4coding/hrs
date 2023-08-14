import React from "react";
import Layout from "../components/Layout";
import Dashboardmenus from "@/components/dashboardmenus";
import Userchart from "@/components/userchart";

import Appointment from "@/components/appointment";

export default function home() {

  return (
    <Layout>
      <div className="mt-20 grid lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-4">
        <Dashboardmenus details="Visited Patients" />
        <Dashboardmenus details="Specialists" />
        <Dashboardmenus details="All Hospital" />
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-5  md:grid-cols-2   w-full   justify-center mx-auto ml-10 gap-4  mt-10">
        <div className=" card bg-[#fff] col-span-3 pt-8">
          <Userchart  />
        </div>
        <div className="col-span-2  w-full">
          <Appointment />
        </div>
      </div>
    </Layout>
  );
}
