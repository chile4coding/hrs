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
import {
  getAppointments,
  session,
  updateAppointment,
} from "@/services/request";
import toast from "react-hot-toast";
import { getappointments } from "@/redux/hospitalSlice";
import { useDispatch } from "react-redux";

export function AppointmentTable({
  appointment,
  nextPage,
  prevPage,
  tables,
  handlePageNumber,
  page,
  searchTable,
}) {
  const [searchicon, setSearchIcon] = useState(false);
  const [selectAppoint, setSelectAppoint] = useState("");
  const dispatch = useDispatch();

  function handleIcon(e) {
    if (e.target.value.length > 0) {
      setSearchIcon(true);
    } else {
      setSearchIcon(false);
    }

    searchTable(e.target.value);
  }

  function dataFormat(exactDate) {
    const timeArr = exactDate?.split(":");

    const [hour, minute] = timeArr;

    let amOrPm = hour >= 12 ? "PM" : "AM";

    return `${hour}:${minute} ${amOrPm}`;
  }

  async function handleAppointmentUpdate(e) {
    const value = e.target.value;
    const token = await session();
    if (value.length > 10) {
      const response = await updateAppointment(
        { status: "concluded", appointmentId: value },
        token?.token
      );
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);

        const appointment = await getAppointments(token?.token);
        dispatch(getappointments(appointment?.userAppointment));
      }
    }
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
        {/* <div className=" flex items-center gap-4   justify-end">
          <div class="relative inline-flex items-center w-full     max-w-xs ">
            <input
              type="text"
              placeholder="search for hospitals here"
              className="input  input-bordered border-collapse bg-transparent w-full  placeholder:px-8"
              onChange={handleIcon}
            />

            {!searchicon && (
              <div class="absolute left-0 pl-3 flex items-center pointer-events-none sm:hidden">
                <AiOutlineSearch className="text-2xl text-gray-400" />
              </div>
            )}
          </div>
          <div className="border px-4 py-2 flex items-center rounded-md">
            <HiOutlineAdjustmentsVertical className=" text-2xl" />
            <p>Filter</p>
          </div>
        </div> */}
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
                <tr className="border-0 hover:bg-[#EFF6FF]" key={appoint._id}>
                  <td>{i + 1}</td>
                  <td>FC{appoint._id.toString().slice(-4)}</td>
                  <td>{appoint.hospital}</td>
                  <td>{appoint.specialist}</td>
                  <td>{appoint.purpose}</td>
                  <td>{appoint.date}</td>
                  <td>{time}</td>
                  <td>
                    {appoint.status === "upcoming" ? (
                      <select
                        onChange={handleAppointmentUpdate}
                        className=" cursor-pointer py-2 outline-none border-0">
                        <option>{appoint.status}</option>
                        <option
                          className=" hover:cursor-pointer"
                          value={appoint._id}>
                          concluded
                        </option>
                      </select>
                    ) : (
                      <button
                        type="button"
                        className={`btn text-sm btn-sm w-full  font-normal capitalize ${
                          appoint.status === "concluded"
                            ? "bg-[green] text-[white]"
                            : appoint.status === "missed"
                            ? "bg-[red] text-[white]"
                            : " bg-[blue] text-white"
                        }`}>
                        {appoint.status}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-between items-center my-4  sm:grid grid-cols-3 ">
        <button
          className="btn  sm:order-2 font-normal  capitalize px-8 border border-[#8F8F8F] hover:bg-[#3188FF]  sm:w-full "
          onClick={prevPage}>
          <BsArrowLeft /> Previous
        </button>
        <div className=" col-span-full sm:order-1">
          {tables.map((num, i) => (
            <button
              key={i}
              className={`btn font-normal mx-2  border      border-[#8F8F8F] capitalize  hover:bg-[#3188FF] ${
                page === i ? "bg-[#3188FF]" : ""
              }`}
              onClick={handlePageNumber.bind(this, i)}>
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className="btn font-normal order-3
               border border-[#8F8F8F] px-8 capitalize hover:bg-[#3188FF] "
          onClick={nextPage}>
          next <BsArrowRight />
        </button>
      </div>
    </div>
  );
}

export default function Appointment({ recent }) {
  const { hospital, date, purpose, time, specialist } = recent;

  function dataFormat(exactDate) {
    const timeArr = exactDate?.split(":");

    const [hour, minute] = timeArr;

    let amOrPm = hour >= 12 ? "PM" : "AM";

    return `${hour}:${minute} ${amOrPm}`;
  }
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

              {recent.map((recentAppointment, i) => {
                const time = dataFormat(recentAppointment.time);
                return (
                  <tr className="border-0 hover:bg-[#EFF6FF]" key={i}>
                    <td>
                      <li className="marker:text-gray list-disc pl-5  text-slate-400 text-[12px]"></li>
                    </td>
                    <td>{recentAppointment.date}</td>
                    <td>{time}</td>
                    <td>{recentAppointment.specialist}</td>
                    <td>{recentAppointment.purpose}</td>
                  </tr>
                );
              })}
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
