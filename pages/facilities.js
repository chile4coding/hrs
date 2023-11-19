import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/facilities/Card";
import { getHospitals, session, pagination } from "@/services/request";
import { useDispatch, useSelector } from "react-redux";
import { getHospital } from "@/redux/hospitalSlice";
import toast from "react-hot-toast";

export default function Facilities() {
  const [page, setPage] = useState(0);
  const { hospitals, singleHospital, searchFacility, facilities } = useSelector(
    (state) => state.hospitals
  );
 
  const [hospitalFac, setHospitalFac] =  useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    async function hospitals() {
      
      const token = await session();
      if (token) {
        // const hospital = await getHospitals(token?.token);
        // const facility  =  hospital.hospitals.flatMap((obj)=>obj.facilities)

        if(searchFacility.length === 0 ){
          setHospitalFac(facilities);
       
        }else{
          
        }
        if(searchFacility.length > 0){
      
          setHospitalFac(searchFacility);
        }
        
        
     
      }
    }

    hospitals();
  }, [searchFacility]);



  return (
    <Layout>
      <h2 className=" text-[28px] font-bold  sm:text-lg">Facilities</h2>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
        {
          hospitalFac.length > 0 &&
          hospitalFac.map((each) => {
            return (
              <Card facility={each} key={each._id} hospitalId={each._id} />
            );
          
        })}
      </div>
    </Layout>
  );
}
