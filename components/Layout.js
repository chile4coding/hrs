import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import Recommended from "./recommended";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { LiaCalendarPlusSolid } from "react-icons/lia";
import { LuCross } from "react-icons/lu";
import { LiaDollyFlatbedSolid } from "react-icons/lia";
import { LiaUserNurseSolid } from "react-icons/lia";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Specialist from "./specialists";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import ActiveLink from "./Activelink";

function Header() {
  const [searchicon, setSearchIcon] = useState(false);

  function handleIcon(e) {
    if (e.target.value.length > 0) {
      setSearchIcon(true);
    } else {
      setSearchIcon(false);
    }
  }

  return (
    <div
      className="navbar  bg-[#fff]   sticky top-0   opacity-90 pr-[40px] h-[80px]"
      style={{ zIndex: 100 }}>
      <div className="navbar-start bg-[#fff]">
        <label
          tabIndex={0}
          htmlFor="my-drawer-2"
          className=" drawer-button xl:hidden  btn-ghost hover:cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>

        <div class="relative inline-flex items-center w-full   md:max-w-lg">
          <input
            type="text"
            placeholder="search for hospitals here"
            className="input  input-bordered border-collapse bg-transparent w-full  "
            onChange={handleIcon}
          />

          {!searchicon && (
            <div class="absolute right-3 pl-3 flex items-center pointer-events-none sm:hidden">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 18h4M21 21l-5-5"
                />
              </svg> */}
              {/* <Image
                src={"/icons/search.svg"}
                width={20}
                height={20}
                className=" bg-transparent"
              /> */}
              <AiOutlineSearch className="text-2xl text-gray-400" />
            </div>
          )}
        </div>
      </div>
      {/* <div className="navbar-center"></div> */}
      <div className="navbar-end ">
        <div className="flex items-center text-lg gap-4 font-Mukta ">
          <div className=" flex items-center">
            <div className="indicator mx-2 cursor-pointer">
              <span className="indicator-item badge  border-0 text-[white] bg-[#CC1016] ">
                1
              </span>
              {/* <Image
                src={"/icons/notification.svg"}
                width={30}
                height={30}
                className=" bg-transparent"
              /> */}
              <IoMdNotificationsOutline className="text-2xl fill-[#3088FF]" />
            </div>
            <div className="indicator mx-4 cursor-pointer">
              <span className="indicator-item badge badge-secondary sm:text-xs border-0 text-[white] bg-[#CC1016]">
                80
              </span>
              <div className="grid  place-items-center">
                {/* <Image
                  src={"/icons/email.svg"}
                  width={30}
                  height={30}
                  className=" bg-transparent fill-[red]"
                /> */}
                <AiOutlineMail className="text-2xl fill-[#3088FF]" />
              </div>
            </div>
          </div>
          <div className="  rounded-full bg-[#E8F1FF] w-10 h-10 flex justify-center items-center  ">
            <h1 className=" uppercase ">Co</h1>
          </div>
          <div className=" p-0 m-0 sm:hidden">
            <h1 className="text-[#002C69] capitalize font-bold p-0 m-0 sm:text-xs">
              Chile Omereji
            </h1>
            <h1 className=" text-[#838383] p-0 m-0 sm:text-xs">patient</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-between h-[80px]  bg-[#fff] items-center px-8 mr-4 py-6 ">
      <h2 className="text-[#3188FF]">
        Copyright 2023 HRS. All Rights Reserved
      </h2>
      <div className="flex gap-8">
        <h2 className="text-[#000]">terms & conditions</h2>
        <h2 className="text-[#000]">Privacy Policy</h2>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className="  w-full  max-h-[100vh]  h-full">
      <div className="drawer xl:drawer-open  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col max-h-[100vh]   h-full overflow-y-scroll">
          <div className=" sticky top-0  " style={{ zIndex: 100 }}>
            {<Header />}
          </div>
          <div className="grid gird-cols-4  xl:grid-cols-4 ">
            <div className="  xl:col-span-3 mx-10 sm:mx-5  overflow-hidden ">
              {children}
            </div>

            <div className="grid lg:grid-cols-2  gap-5 md:grid-cols-2 my-6 mr-10 lg:ml-10 md:ml-10  sm:mx-5">
              <div>
                <div className="grid xl:grid-cols-2 my-4  sm:flex sm:items-center sm:justify-around">
                  <h2 className=" text-[#002C69]  font-bold font-Mukta  capitalize text-lg">
                    Recommendations
                  </h2>
                  <Link href=" " className=" justify-self-end ">
                    view all
                  </Link>
                </div>
                <Recommended />
                <Recommended />
                <Recommended />
              </div>

              <Specialist />
            </div>
          </div>
          <Footer />
        </div>
        <div className="drawer-side " sticky top-0 style={{ zIndex: 999 }}>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p  w-60  text-base-content   bg-[#fff]  max-h-[100vh] h-full ">
            <label
              tabIndex={0}
              htmlFor="my-drawer-2"
              className=" drawer-button lg:hidden btn-ghost hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>

            <div className=" flex  flex-col      capitalize justify-between h-full pl-4 w-full">
              <div className="flex  flex-col   gap-4  ">
                <div className=" w-[97px] h-[89px] my-[30px]  sm:text-xs">
                  <Image src="/hrs.png" width="97" height="89" />
                </div>
                <ActiveLink
                  href="/home"
                  className=" pl-2 pr-2 pb-2    rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF] flex  items-center gap-2">
                  <RxDashboard className="text-lg" />
                  <li className="capitalize  text-[18px] sm:text-sm ">
                    Dashboard
                  </li>
                </ActiveLink>
                <ActiveLink
                  href="/appointment"
                  className="p-2    rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF] flex  items-center gap-2 ">
                  <LiaCalendarPlusSolid className="text-lg" />
                  <li className="capitalize text-[18px] sm:text-sm ">
                    Appointments
                  </li>
                </ActiveLink>
                <ActiveLink
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF] flex  items-center gap-2">
                  <LuCross className="text-lg" />
                  <li className="capitalize text-[18px] sm:text-sm ">
                    Services
                  </li>
                </ActiveLink>
                <ActiveLink
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF] flex  items-center gap-2">
                  <LiaDollyFlatbedSolid className="text-lg" />
                  <li className="capitalize text-[18px] sm:text-sm">
                    Hospitals
                  </li>
                </ActiveLink>
                <ActiveLink
                  href="/specialists"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF] flex  items-center gap-2">
                  <LiaUserNurseSolid className="text-lg" />
                  <li className="capitalize text-[18px] sm:text-sm ">
                    Specialists
                  </li>
                </ActiveLink>
                <ActiveLink
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF] flex  items-center gap-2">
                  <IoSettingsOutline className="text-lg" />
                  <li className="capitalize text-[18px] sm:text-sm">
                    Settings
                  </li>
                </ActiveLink>
                <ActiveLink
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF] flex  items-center gap-2">
                  <AiOutlineQuestionCircle className="text-lg" />
                  <li className="capitalize text-[18px] sm:text-sm">
                    Help Centers
                  </li>
                </ActiveLink>
              </div>

              <div className="">
                <Link
                  href="/"
                  className="    ml-0  bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-[#3188FF] hover:text-[white]   rounded-md text-md   sm:w-40 w-full  flex  py-2 px-4 gap-2">
                  <CiLogout className="text-lg  " />
                  <li className="capitalize text-[18px] sm:text-sm ">Logout</li>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
