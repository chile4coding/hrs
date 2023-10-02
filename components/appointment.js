import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { Modal } from "../pages/appointment";
import { LiaCalendarPlusSolid } from "react-icons/lia";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import ActiveLink from "./Activelink";

export function AppointmentTable({ appointment, nextPage, prevPage }) {

  
  const [searchicon, setSearchIcon] = useState(false);

  function handleIcon(e) {
    if (e.target.value.length > 0) {
      setSearchIcon(true);
    } else {
      setSearchIcon(false);
    }
  }

  function dataFormat(exactDate) {
    const timeArr = exactDate.split(":");

    const [hour, minute] = timeArr;

    let amOrPm = hour >= 12 ? "PM" : "AM";

    return `${hour}:${minute} ${amOrPm}`;
  }

  return (
    <div className="card bg-[white]  px-5 py-8">
      <div className=" grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-8">
        <div className="flex items-center gap-3  flex-wrap">
          <div className="border p-1 bg-[#EAF2FE] rounded-md">
            <LiaCalendarPlusSolid className="text-2xl bg-[blue] text-[white] rounded-md" />
          </div>
          <h2 className=" font-bold text-xl text-[#1E1E1E]">
            All Appointments
          </h2>
        </div>
        <div className=" flex items-center gap-4   justify-end">
          <div class="relative inline-flex items-center w-full     max-w-xs ">
            <input
              type="text"
              placeholder="search for hospitals here"
              className="input  input-bordered border-collapse bg-transparent w-full  placeholder:px-8"
              onChange={handleIcon}
            />

            {!searchicon && (
              <div class="absolute left-0 pl-3 flex items-center pointer-events-none sm:hidden">
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
          <div className="border px-4 py-2 flex items-center rounded-md">
            <HiOutlineAdjustmentsVertical className=" text-2xl" />
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div className=" overflow-x-auto sm:overflow-x-auto">
        <table className="table border-0   ">
          {/* head */}
          <thead>
            <tr className="border-0 capitalize text-[#000] text-[16px]   font-semibold">
              <th>No</th>
              <th>ID Card</th>
              <th>Hospital</th>
              <th>Specialist</th>
              <th>Purpose</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-[12px]">
            {/* row 1 */}

            {appointment.map((appoint, i) => {
              const time = dataFormat(appoint.time);

              return (
                <tr className="border-0 hover:bg-[#EFF6FF]">
                  <td>{i + 1}</td>
                  <td>FC{appoint._id.toString().slice(-4)}</td>
                  <td>{appoint.hospital}</td>
                  <td>{appoint.specialist}</td>
                  <td>{appoint.purpose}</td>
                  <td>{appoint.date}</td>
                  <td>{time}</td>
                  <td>
                    <button
                      type="button"
                      className="btn text-sm btn-sm w-full  font-normal capitalize">
                      {appoint.status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-between items-center my-4 ">
        <button className="btn   font-normal capitalize px-8 border border-[#8F8F8F] hover:bg-[#3188FF]" onClick={prevPage}>
          <BsArrowLeft /> Previous
        </button>
        <div>
          <button className="btn font-normal mx-2  border border-[#8F8F8F] capitalize  hover:bg-[#3188FF] ">
            1
          </button>
          <button className="btn font-normal mx-2  border border-[#8F8F8F] capitalize hover:bg-[#3188FF]">
            2
          </button>
          <button className="btn font-normal mx-2  border border-[#8F8F8F] capitalize  hover:bg-[#3188FF]">
            3
          </button>
          <button className="btn font-normal mx-2  border border-[#8F8F8F] capitalize  hover:bg-[#3188FF]">
            4
          </button>
          <button className="btn font-normal mx-2  border border-[#8F8F8F] capitalize  hover:bg-[#3188FF]">
            5
          </button>
          <button className="btn font-normal mx-2  border border-[#8F8F8F] capitalize  hover:bg-[#3188FF]">
            6
          </button>
        </div>

        <button className="btn font-normal   border border-[#8F8F8F] px-8 capitalize hover:bg-[#3188FF] " onClick={nextPage}>
          next <BsArrowRight />
        </button>
      </div>
    </div>
  );
}

export default function Appointment() {
  return (
    <>
      <Modal />
      <div className="card w-full md:w-full xl:w-full lg:w-full  h-full    bg-white      border-collapse border-0 hover:bg-white mb-4 mr-8 sm:mr-0">
        <div className="grid grid-cols-3 px-8">
          <h2 className="  text-[#002C69]  font-bold font-Mukta   text-lg capitalize my-8  col-span-2">
            Scheduled Appointments
          </h2>
          <BsFillPlusSquareFill
            className="  self-center  justify-self-end text-lg fill-[blue] cursor-pointer"
            onClick={() => window.my_modal_2.showModal()}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table border-0   ">
            {/* head */}
            <thead>
              <tr className="border-0 capitalize text-[#000] text-[12px]">
                <th></th>
                <th>Date</th>
                <th>Time</th>
                <th>Specialist</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {/* row 1 */}
              <tr className="border-0 hover:bg-[#EFF6FF]">
                <td>
                  <li className="marker:text-gray list-disc pl-5  text-slate-400 text-[12px]"></li>
                </td>
                <td>22/08/2023</td>
                <td>1:30pm</td>
                <td>Dr. chile Omereji</td>
                <td>Routine</td>
              </tr>

              <tr className="border-0 hover:bg-[#EFF6FF]">
                <td>
                  <li className="marker:text-gray list-disc pl-5  text-slate-400 text-[12px]"></li>
                </td>
                <td>22/08/2023</td>
                <td>1:30pm</td>
                <td>Dr. chile Omereji</td>
                <td>Routine</td>
              </tr>
              <tr className="border-0 hover:bg-[#EFF6FF]">
                <td>
                  <li className="marker:text-gray list-disc pl-5  text-slate-400 text-[12px]"></li>
                </td>
                <td>22/08/2023</td>
                <td>1:30pm</td>
                <td>Dr. chile Omereji</td>
                <td>Routine</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end p-4 items-center gap-2 ">
            <span className="flex justify-end p-4 items-center gap-2 cursor-pointer">
              <ActiveLink href="/appointment" className="capitalize ">
                view all
              </ActiveLink>
              <HiArrowLongRight className="text-2xl " />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
