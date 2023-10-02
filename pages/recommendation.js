import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/hospitals/Card";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  getHospital,
  getRecommendationByLoc,
  getRecommendationByRating,
} from "@/redux/hospitalSlice";
import {
  getHospitals,
  session,
  getRecommmendationsByRating,
  getRecommmendationsByLocation,
} from "@/services/request";
import Loginspinner from "@/components/spinners/Loginspinner";

function Filtervalues({ handleFilterByRating, handleFilterByLoc }) {
  return (
    <div className="card bg-[rgba(255,255,255,0.9)] w-full text-center  rounded-md absolute  z-50">
      <h
        className="py-1 cursor-pointer hover:bg-[#3188FF] hover:text-white hover:rounded-md"
        onClick={handleFilterByLoc}>
        Location
      </h>

      <h
        className="py-1 cursor-pointer hover:bg-[#3188FF] hover:text-white hover:rounded-md"
        onClick={handleFilterByRating}>
        Top Rated
      </h>
    </div>
  );
}

export default function Recommendation() {
  const [hospitalArr, setHospitalArr] = useState();
  const [showFilterValue, setShowFilterValue] = useState(false);

  const { recomendationRating, recommendationLocation } = useSelector(
    (state) => state.hospitals
  );



  const dispatch = useDispatch();
  useEffect(() => {
    async function hospitals() {
      const token = await session();

      if (token) {
        const hospital = await getHospitals(token?.token);
        dispatch(getHospital(hospital.hospitals));
        const ratinRec = await getRecommmendationsByRating(token?.token);
        const locRec = await getRecommmendationsByLocation(token?.token);

        dispatch(getRecommendationByRating(ratinRec.ratingRecommendation));
        dispatch(getRecommendationByLoc(locRec.locationRecommendation));

        setHospitalArr(hospital.hospitals);
      }
    }

    hospitals();
  }, []);
  function handleFilterValue() {
    setShowFilterValue((prev) => !prev);
  }
  function handleRemoveFilterValue() {
    setShowFilterValue((prev) => false);
  }

  function handleFilterByLoc(){
    setHospitalArr(recommendationLocation);

  }

  function handleFilterByRating(){
setHospitalArr(recomendationRating);
  }


    return (
      <Layout>
        <main>
          <h2 className=" text-[28px] font-bold  sm:text-lg">
            Recommendations
          </h2>

          <div className="max-w-[140px]  relative">
            <div
              onClick={handleFilterValue}
              className=" text-center justify-center border hover:bg-[#3188FF] hover:text-white  cursor-pointer px-4 py-2 flex items-center rounded-md  max-w-[140px]">
              <HiOutlineAdjustmentsHorizontal className=" text-sm" />
              <p>Filter</p>
            </div>
            {showFilterValue && (
              <Filtervalues
                handleFilterByLoc={handleFilterByLoc}
                handleFilterByRating={handleFilterByRating}
              />
            )}
          </div>
          {hospitalArr ? (
            <main>
              <div
                onClick={handleRemoveFilterValue}
                className=" grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
                {hospitalArr.map((hos) => (
                  <Card hospital={hos} key={hos._id} />
                ))}
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
          ) : (
            <div className=" h-[80vh] flex  justify-center items-center">
              <Loginspinner />
            </div>
          )}
        </main>
      </Layout>
    );
  }

