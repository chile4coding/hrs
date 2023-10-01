import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/facilities/Card";
import { getHospitals, session, pagination } from "@/services/request";
import { useDispatch, useSelector } from "react-redux";
import { getHospital } from "@/redux/hospitalSlice";

export default function Facilities() {
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
      }
    }

    hospitals();
  }, []);

  return (
    <Layout>
      <h2 className=" text-[28px] font-bold  sm:text-lg">Facilities</h2>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
        {hospitals.map((facility) => {
          return facility.facilities.map((each) => {
    
            return (
              <Card facility={each} key={each._id} hospitalId={facility._id} />
            );
          });
        })}

     
      </div>
    </Layout>
  );
}
