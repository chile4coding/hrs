import Layout from "/components/Layout";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { LiaCalendarPlusSolid } from "react-icons/lia";
import {LiaTimesSolid} from "react-icons/lia"
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { AppointmentTable } from "../components/appointment";


export function Modal() {
  const [check, setCheck] = useState(false)

  function handleCheck(){
    setCheck(prev=>!prev)
  }
  return (
    <>
      <dialog id="my_modal_2" className="modal modal-right">
        <form
          method="dialog"
          className=" modal-box bg-white   max-w-lg  sm:text-xs text-[#0F0F0F]">
          <div className=" flex justify-between items-center bg-[#3188FF] mt-0 pt-0   text-[24px]  font-semibold text-[#fff] px-[24px] h-[64px]">
            <h2 className=" ">New Appointment</h2>
            <button>
              <LiaTimesSolid />
            </button>
          </div>

          <div className=" p-6 grid grid-cols-3  sm:grid-cols-1">
            <h2 className=" self-center text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Hospital Name
            </h2>
            <select className="select  w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5">
              <option disabled selected>
                Pick your favorite language
              </option>
              <option>Java</option>
              <option>Go</option>
            </select>
            <h2 className=" self-center text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Specialist
            </h2>
            <select className="select  w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5">
              <option disabled selected>
                Pick your favorite language
              </option>
              <option>Java</option>
              <option>Go</option>
            </select>
            <h2 className=" self-center text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Hospital ID
            </h2>
            <input
              type="text"
              className="input input-ghost w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5 text-[black]"
            />
            <h2 className=" self-center text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Date
            </h2>
            <input
              type="date"
              className="input input-ghost w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5 text-[black]"
            />
            <h2 className=" self-center text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Time
            </h2>
            <input
              type="time"
              className="input input-ghost w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5"
            />
            <h2 className=" self-start text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Purpose of Visit
            </h2>
            <textarea
              className="textarea   w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5"
              placeholder="Message..."
              rows={3}></textarea>
          </div>
          <div className="px-[24px] grid grid-cols-2 mb-8 sm:grid-cols-1">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="toggle"
                checked={check}
                onClick={handleCheck}
              />
              <p className="text-[#0F0F0F]">Add to Reminder</p>
            </div>
            <button
              className=" bg-[#3188FF] p-3  btn justify-self-end border-0 text-[white] hover:text-[#3188FF] hover:bg-[white] hover:border-[#3188FF] hover:border"
              type="button">
              Book Appointment
            </button>
          </div>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

function Noappointment({ handleShowModal }) {
  return (
    <div className="  px-6 flex justify-center items-center w-full  h-[67vh] bg-[white] rounded-lg">
      <div className=" flex   flex-col  items-center">
        <div className="  rounded-lg py-4 bg-[#3188FF] w-[100px] h-[100px] flex justify-center items-center">
          <LiaCalendarPlusSolid className=" text-8xl text-[white]" />
        </div>

        <p className="py-4 text-[#676767] text-[16px] text-center">
          You currently have not appointment and appointment history.
        </p>
        <p className="pb-4 text-[#676767] text-[16px] text-center">

          {" "}
          Start by setting an appointment below
        </p>
     
        <button
          className=" btn hover:text-[white] hover:bg-[#3188FF] hover:border-0 capitalize border border-[#3188FF] text-[#3188FF] bg-[white]"
          onClick={handleShowModal}>
          Set Appointment
        </button>
      </div>
    </div>
  );
}

export default function Appointment() {
  const handleShowModal = () => {
    window.my_modal_2.showModal();
  };
  return (
    <Layout className=" grid justify-center items-center  ">
      <div className="flex flex-col ">
        <div className="flex justify-between  my-10 items-center flex-wrap sm:text-xs">
          <div>
            <h2 className=" text-[28px] font-bold sm:text-sm">Appointments</h2>
            <p className=" text-[16px] text-[#676767]  my-3">
              Latest appointments for the last 7days
            </p>
          </div>
          <div>
            <div
              className=" flex bg-[#3188FF] p-3  btn justify-self-end border-0 text-[white] hover:text-[#3188FF] hover:bg-[white] hover:border-[#3188FF] hover:border"
              onClick={handleShowModal}>
              <BsFillPlusSquareFill />
              <p className="sm:text-sm">Appointment</p>
            </div>
          </div>
        </div>
        {/* 

        Make sure to render this when there is no appoint found 
        <Noappointment handleShowModal={handleShowModal} /> */}

        <div className=" ">

        <AppointmentTable />

        </div>
      </div>

      <Modal handleShowModal={handleShowModal} />
    </Layout>
  );
}
