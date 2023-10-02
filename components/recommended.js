import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageComponent } from "./specialists";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getSingleHospital } from "@/redux/hospitalSlice";
import { useRouter } from "next/router";

export default function Recommended({ hospital }) {
    const dispatch = useDispatch();
      const router = useRouter();
  const {name, avgRate, avatar, address, _id} = hospital

    function handleMapView(id) {
      dispatch(getSingleHospital(id));
      router.push("/hospitals/map");
    }


  return (
    <div className=" card w-full md:w-full lg:w-full  h-[83px]   p-4    bg-white   cursor-pointer   border-collapse border-0 hover:bg-white my-4">
      <div className=" grid grid-cols-3">
        <div className=" flex col-span-2 items-end gap-2">
          <ImageComponent imageUrl={avatar} maxHeight="51px" maxWidth="51px" />
          {/* <Image src={avatar} width={51} height={51} /> */}
          <div className=" flex  flex-col justify-between  h-10">
            <div className="flex items-center gap-4 ">
              <p className="p-0 m-0 text-sm  font-bold text-[#0F0F0F]">
                {name}
              </p>{" "}
              <p>{avgRate}</p>{" "}
              <div className="flex gap-1 text-[8  px] font-[300] text-[#838383]">
                <span>
                  <AiTwotoneStar className=" fill-yellow-500" />
                </span>
              </div>
            </div>
            <h2 className="text-[12px] font-[300] text-[#838383]">{address}</h2>
          </div>
        </div>

        <span
          onClick={handleMapView.bind(this, _id)}
          className=" self-end justify-self-end text-[#3188FF] capitalize hover:underline">
          view in map
        </span>
      </div>
    </div>
  );
}
