import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/hospitals/Card";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { getHospitals, session, pagination } from "@/services/request";
import { useDispatch, useSelector } from "react-redux";
import { getHospital } from "@/redux/hospitalSlice";
import { PageLoad } from "../home";
import Loginspinner from "@/components/spinners/Loginspinner";

export default function Hospitals() {
  const [hospitalArr , setHospitalArr] =useState()
  const [page, setPage] = useState(0)
  // const { hospitals } = useSelector((state) => state.hospitals.hospitals);

  function nextPage(){
    if(page < hospitalArr.length - 1){
      setPage(prevpage=> prevpage + 1)
    }

  }
 
  function prevPage(){
    if (page > 0) {
      setPage((prevpage) => prevpage - 1);
    }
  }
  

  const dispatch = useDispatch();
  useEffect(() => {
    async function hospitals() {
      const token = await session();
      if (token) {
        const hospital = await getHospitals(token?.token);
        dispatch(getHospital(hospital.hospitals));
        
        const page  = pagination(hospital.hospitals);
        setHospitalArr(page)
      }
    }

    hospitals();
  }, []);

  return (
    <Layout>
      <h2 className=" text-[28px] font-bold  sm:text-lg">Hospitals</h2>

      {hospitalArr ? (
        <main>
          <div className=" grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2 ">
            {hospitalArr[page].map((hos) => (
              <Card hospital={hos} key={hos._id}/>
            ))}
          </div>
          <div className=" flex justify-between items-center mb-4 ">
            <button
              className="btn  sm:btn-xs  font-normal capitalize px-8 border border-[#8F8F8F] hover:bg-[#3188FF]"
              onClick={prevPage}>
              <BsArrowLeft /> Previous
            </button>

            <button
              className="sm:btn-xs  btn font-normal   border border-[#8F8F8F] px-8 capitalize hover:bg-[#3188FF] "
              onClick={nextPage}>
              next <BsArrowRight />
            </button>
          </div>
        </main>
      ) : (
        <div className=" h-[80vh] flex  justify-center items-center">
          <Loginspinner />
        </div>
      )}
    </Layout>
  );
}
