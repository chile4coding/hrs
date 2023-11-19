import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboardmenus from "../components/dashboardmenus";
import Userchart from "../components/userchart";
import {
  session,
  getUser,
  addedUserLocation,
  autoUpdateAppointment,
  getAppointments,
  getUserApointmentDashboard,
  getRecommmendations,
  getHospitals,
   getRecommmendationsByRating,
getRecommmendationsByLocation
} from "../services/request";
import Appointment from "../components/appointment";
import { ImAidKit } from "react-icons/im";
import { GiStethoscope } from "react-icons/gi";
import { RiHospitalFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  getappointments,
  storeUser,
  getRecommendation,
  setRecomm,
  setFacilities,
  getHospital,
  getRecommendationByRating,
  getRecommendationByLoc,
} from "../redux/hospitalSlice";
import Loginspinner from "../components/spinners/Loginspinner";
import { useRouter } from "next/router";

export function PageLoad() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center text-[#3188FF]">
      <h2 className=" text-4xl   font-extrabold">HRS</h2>
      <Loginspinner />
    </div>
  );
}

export default function Home() {
  const [specialisst, setSpecialist] = useState(0);
  const [chart, setChart] = useState([])
  const {
    user: users,
    hospitals,
    appointments,
    // recentAppoints,
  } = useSelector((state) => state.hospitals);
  const { user } = users;

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      const sessionData = await session();

      const data = await getUser(sessionData?.token);
      
     const userchartDashBoard = await getUserApointmentDashboard(sessionData?.token)
     setChart(userchartDashBoard) 
      

     dispatch(storeUser(data));
      addedUserLocation(sessionData?.token);
      const appointment = await getAppointments(sessionData?.token);
       dispatch(getappointments(appointment.userAppointment));
        const recommendation = await getRecommmendations(sessionData.token);
        dispatch(getRecommendation(recommendation.locationRecommendation));
        const rec = recommendation.locationRecommendation.slice(0, 4);

       dispatch( setRecomm(rec));
  const hospital = await getHospitals(sessionData?.token);
  const facility = hospital.hospitals.flatMap((obj) => obj.facilities);

const ratinRec = await getRecommmendationsByRating(sessionData?.token);
const locRec = await getRecommmendationsByLocation(sessionData?.token);

dispatch(getRecommendationByRating(ratinRec.ratingRecommendation));
dispatch(getRecommendationByLoc(locRec.locationRecommendation));

dispatch(setFacilities(facility));
dispatch(getHospital(hospital.hospitals));
      dispatch(getappointments(appointment?.userAppointment));
      await autoUpdateAppointment(sessionData?.token);
      const spec = hospitals
        .map((hos) => hos?.specialists)
        .flatMap((spec) => spec);
      setSpecialist(spec.length);
    };
    get();
  }, []);

  if (!user) {
    return <PageLoad />;
  }

 

 
  return (
    <Layout>
      <div className="mt-20 grid xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-4">
        <Dashboardmenus
          details="Total appointments"
          progress={appointments?.length}
          data="Data obtained for the last 7days "
          visitors=""
          value={appointments?.length}
          icon={<ImAidKit className="m-2" />}
          appointment={appointments?.length}
        />
        <Dashboardmenus
          details="Specialists"
          progress="50"
          data="Data obtained for the last 7days "
          value={specialisst}
          icon={<GiStethoscope className="m-2 " />}
          specialists={specialisst}
        />
        <Dashboardmenus
          details="All Hospital"
          progress="30"
          data="Data obtained for the last 7days "
          visitors=""
          value={hospitals.length}
          icon={<RiHospitalFill className="m-2 " />}
          hospitals={hospitals.length}
        />
      </div>
      <div className="grid  xl:grid-cols-5 lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-1  w-full   justify-center   gap-4  mt-10   mr-5 ">
        {chart.length === 0 && (
          <div className={`  card bg-[#fff] xl:col-span-3 pt-8 h-full w-full  text-center`}>
            {" "}
            <p>
              <Loginspinner />
            </p>
          </div>
        )}

        {chart.length > 0 && (
          <div
            className={` card bg-[#fff] xl:col-span-3 pt-8 h-full w-full ${
              chart.length > 0
                ? ""
                : " flex justify-center items-center text-[blue]"
            } `}>
            {chart.length > 0 ? <Userchart chart={chart} /> : <Loginspinner />}
          </div>
        )}

        <div className="xl:col-span-2   w-full ">
          {appointments.length > 0 ? (
            <Appointment recent={appointments.slice(0, 3)} />
          ) : (
            <div className="card bg-[#fff]  h-[250px]   w-full  flex  justify-center items-center ">
              <h2 className="text-sm">No Appointment Booked</h2>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
