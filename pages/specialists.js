import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Specialistcard } from "../components/specialists";
import { Specialistscompletecard , Rating} from "../components/specialists";
import { getHospitals, session, pagination } from "@/services/request";
import { useDispatch, useSelector } from "react-redux";
import { getHospital } from "@/redux/hospitalSlice";
export default function Specialists() {
  const [hospitalArr, setHospitalArr] = useState();
  const [page, setPage] = useState(0);
   const { hospitals } = useSelector((state) => state.hospitals);
  const dispatch = useDispatch();
  useEffect(() => {
    async function hospitals() {
      const token = await session();
      if (token) {
        const hospital = await getHospitals(token?.token);
        dispatch(getHospital(hospital.hospitals));

        const page = pagination(hospital.hospitals);
        setHospitalArr(page);
      }
    }

    hospitals();
  }, []);

  return (
    <Layout>
      <h2 className=" text-[28px] font-bold  sm:text-lg">Specialists</h2>
      <div className=" grid grid-cols-3 gap-4 sm:grid-cols-1">
   
      </div>
      <div className=" grid grid-cols-3 gap-4 mb-10 my-5 md:grid-cols-2 sm:grid-cols-2">
       {
        hospitals.map((specialist)=>{
     return specialist.specialists.map((each)=>{
    

     return <Specialistscompletecard name={specialist.name} specialist={each} rate={1} id={each._id} key={each._id} hospitalId={specialist._id}/>;
     })
        })
       }
       
       
      </div>
    </Layout>
  );j
}
