import React from "react";
import { useState } from "react";
import Link from "next/link";
// {/* <div className="drawer lg:drawer-open">
//   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content flex flex-col items-center justify-center">
//     {/* Page content here */}
//     <label
//       htmlFor="my-drawer-2"
//       className="btn btn-primary drawer-button lg:hidden">
//       Open drawer
//     </label>
//   </div>
//   <div className="drawer-side">
//     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//       {/* Sidebar content here */}
//       <li>
//         <a>Sidebar Item 1</a>
//       </li>
//       <li>
//         <a>Sidebar Item 2</a>
//       </li>
//     </ul>
//   </div>
// </div>; */}

function Header() {
  const [searchicon, setSearchIcon] = useState(false)

  function handleIcon(e){
    if(e.target.value.length > 0){
      setSearchIcon(true)

    }else{
      setSearchIcon(false)
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
          className=" drawer-button lg:hidden btn-ghost hover:cursor-pointer ">
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

        <div class="relative inline-flex items-center w-full max-w-sm">
          <input
            type="text"
            placeholder="search for hospitals here"
            className="input  input-bordered border-collapse bg-transparent w-full "
            onChange={handleIcon}
          />

          {!searchicon && (
            <div class="absolute right-8 pl-3 flex items-center pointer-events-none">
              <svg
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
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end mr-4">
        <div className="flex items-center text-lg gap-4 font-Mukta ">
          <div className="  rounded-full bg-[#E8F1FF] w-10 h-10 flex justify-center items-center  ">
            <h1 className=" uppercase ">Co</h1>
          </div>
          <div className=" p-0 m-0">
            <h1 className="text-[#002C69] capitalize font-bold p-0 m-0">
              Chile Omereji
            </h1>
            <h1 className=" text-[#838383] p-0 m-0">patient</h1>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Layout({ children }) {
  return (
    <div className="  w-full  h-[100vh] ">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {<Header />}
          {children}
        </div>
        <div className="drawer-side" style={{ zIndex: 999 }}>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p  w-60 h-[100vh] text-base-content sticky top-0  bg-[#fff] ">
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

            <div className=" flex  flex-col      capitalize justify-between h-full pl-4">
              <div className="flex  flex-col   gap-4  ">
                <div className=" w-[97px] h-[89px] my-[41px] bg-[#3188FF]  ">hi</div>
                <Link
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]">
                  <li className="capitalize  text-[18px]">Dashboard</li>
                </Link>
                <Link
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]">
                  <li className="capitalize text-[18px]">Appointments</li>
                </Link>
                <Link
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]">
                  <li className="capitalize text-[18px]">Services</li>
                </Link>
                <Link
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]">
                  <li className="capitalize text-[18px]">Hospitals</li>
                </Link>
                <Link
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]">
                  <li className="capitalize text-[18px]">Specialists</li>
                </Link>
                <Link
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]">
                  <li className="capitalize text-[18px]">Settings</li>
                </Link>
                <Link
                  href="/"
                  className="p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]">
                  <li className="capitalize text-[18px]">Help Centers</li>
                </Link>
              </div>

              <Link
                href="/"
                className="p-2  btn  rounded-md text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-[#3188FF] hover:text-[white]  ">
                <li className="capitalize text-[18px]">Logout</li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
