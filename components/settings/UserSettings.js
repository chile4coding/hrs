import React, { useEffect, useState } from "react";
import { ImageComponent } from "../specialists";
import { BiMessageEdit, BiSolidMessageEdit } from "react-icons/bi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUser, session } from "@/services/request";
import { storeUser } from "@/redux/hospitalSlice";

export default function UserSettings() {
  const { user: currentUser } = useSelector((state) => state.hospitals);
  const [mainUser, setMainUser] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    async function getU() {
      const sessionData = await session();
      const data = await getUser(sessionData?.token);
      dispatch(storeUser(data));
    }

    getU();
    if (currentUser?.user) {
      const { user } = currentUser;
      const {
        avatar,
        email,
        phone,
        fullName,
        status,
        gender,
        displayName,
        _id,
      } = user;
      const [firstname, lastname] = fullName?.split(" ");

      setMainUser({
        avatar,
        email,
        phone,
        firstname,
        gender,
        displayName,
        status,
        _id,
        lastname,
      });
    }
  }, []);
  const router = useRouter();

  function handleProfileNavigation() {
    router.push("/settings/profile");
  }

  if (mainUser) {
    return (
      <div className="mt-6  sm:mb-2 card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white ">
        <div className=" p-6 sm:p-2   w-full ">
          <div className=" flex justify-between">
            <h2 className="text-[black] sm:text-[10px] sm:my-2 lg:text-[24px] font-medium">
              Settings
            </h2>

            <button
              onClick={handleProfileNavigation}
              className="btn   btn-sm sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
              Edit Profile
            </button>
          </div>
          <div className=" bg-[#effbff] p-3">
            <div className="  flex items-center gap-3">
              <div className="  relative">
                <img
                  src={
                    mainUser?.avatar
                      ? mainUser?.avatar
                      : mainUser?.gender?.toLowerCase() === "male"
                      ? "/male.png"
                      : "/female.jpg"
                  }
                  className="    rounded-full   object-cover h-[66px] w-[66px]"
                />
              </div>
              <div>
                <h2 className="text-[#3188FF] lg:font-semibold lg:text-[24px] xl:text-[24px]">
                  {mainUser?.fullName}
                </h2>
                <h2>Patient</h2>
              </div>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-1 my-3">
              <div className=" grid grid-cols-2">
                <h2 className=" font-bold py-2">First Name</h2>
                <h2 className=" py-2">{mainUser?.firstname}</h2>
                <h2 className=" font-bold py-2">User ID</h2>
                <h2 className=" py-2 break-all flex flex-wrap ">
                  {mainUser?._id}
                </h2>
                <h2 className=" font-bold py-2">Email Address</h2>
                <h2 className=" py-2 normal-case  break-all flex flex-wrap ">
                  {mainUser?.email}
                </h2>
                <h2 className=" font-bold py-2">Gender</h2>
                <h2 className=" py-2 normal-case  break-all flex flex-wrap ">
                  {mainUser?.gender}
                </h2>
              </div>
              <div className=" grid grid-cols-2">
                <h2 className="font-bold py-2">Last Name</h2>
                <h2 className="py-2">{mainUser?.lastname}</h2>
                <h2 className="font-bold py-2">Username</h2>
                <h2 className="py-2">{mainUser?.displayName}</h2>
                <h2 className="font-bold py-2">Phone</h2>
                <h2 className="py-2">{mainUser?.phone}</h2>
                <h2 className="font-bold py-2">Marital Status</h2>
                <h2 className="py-2">{mainUser?.status}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
