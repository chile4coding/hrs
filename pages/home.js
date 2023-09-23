import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboardmenus from "../components/dashboardmenus";
import Userchart from "../components/userchart";
import { session , getUser, addedUserLocation} from "../services/request";
import Appointment from "../components/appointment";
import { ImAidKit } from "react-icons/im";
import { GiStethoscope } from "react-icons/gi";
import { RiHospitalFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { storeUser } from "../redux/hospitalSlice";
import Loginspinner from "../components/spinners/Loginspinner";

export default function Home() {
  const {user} = useSelector((state)=>state.hospitals.user)
  const dispatch  = useDispatch()
  useEffect( ()=>{
   
    const get = async () => {
  const  sessionData = await session()
  const data = await getUser(sessionData.token)
  dispatch(storeUser(data))
  addedUserLocation(sessionData.token);
}
get()

  }, [])

  if(!user){
    return (
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center text-[#3188FF]">
       <h2 className=" text-4xl   font-extrabold">HRS</h2>
        <Loginspinner />
      </div>
    );
  }
  return (
    <Layout >
      <div className="mt-20 grid xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-4">
        <Dashboardmenus
          details="Visited Patients"
          progress="70"
          data="Data obtained for the last 7days from 8406 visitors to 10,552 visitors"
          visitors="500 visitors  today"
          value="10,552"
          icon={<ImAidKit className="m-2" />}
        />
        <Dashboardmenus
          details="Specialists"
          progress="50"
          data="Data obtained for the last 7days from 8406 visitors to 10,552 visitors"
          visitors="500 visitors  today"
          value="10,552"
          icon={<GiStethoscope className="m-2 " />}
        />
        <Dashboardmenus
          details="All Hospital"
          progress="30"
          data="Data obtained for the last 7days from 8406 visitors to 10,552 visitors"
          visitors="500 visitors  today"
          value="10,552"
          icon={<RiHospitalFill className="m-2 " />}
        />
      </div>
      <div className="grid  xl:grid-cols-5 lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-1  w-full   justify-center   gap-4  mt-10   mr-5 ">
        <div className=" card bg-[#fff] xl:col-span-3 pt-8 h-full w-full  ">
          <Userchart />
        </div>
        <div className="xl:col-span-2   w-full ">
          <Appointment />
        </div>
      </div>
    </Layout>
  );
}
