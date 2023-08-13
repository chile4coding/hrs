import React from "react";
import Layout from "../components/Layout";
import Dashboardmenus from "@/components/dashboardmenus";
import Userchart from "@/components/userchart";
import { userData1 } from "@/components/userchart";
// import { useState } from "react";
import Appointment from "@/components/appointment";
// import { data } from "autoprefixer";
export default function home() {
  // const [userData, setUserData] = useState({
  //   labels: userData1.map((data) => data.month),
  //   datasets: [
  //     {
  //       label: "Appointments",
  //       data: userData1.map((data) => data.appointment),
  //       borderColor: "#0000ff",
  //       backgroundColor: "#0000ff",
  //     },
  //     {
  //       label: "Recomendations",
  //       data: userData1.map((data) => data.Recommend),
  //       borderColor: "#008000",
  //       backgroundColor: "#008000",
  //     },
  //   ],
  // });
  return (
    <Layout>
      <div className="mt-20 grid lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-4">
        <Dashboardmenus details="Visited Patients" />
        <Dashboardmenus details="Specialists" />
        <Dashboardmenus details="All Hospital" />
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-5  md:grid-cols-2   w-full   justify-center mx-auto ml-10 gap-4  mt-10">
        <div className=" card bg-[#fff] col-span-3 pt-8">
          {/* <Userchart charData={userData} /> */}
        </div>
        <div className="col-span-2  w-full">
          <Appointment />
        </div>
      </div>
    </Layout>
  );
}
