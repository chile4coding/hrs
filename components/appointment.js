import React from 'react'
import {BsFillPlusSquareFill} from "react-icons/bs"
import {HiArrowLongRight} from "react-icons/hi2"

export default function Appointment() {
  return (
    <div className="card w-full md:w-full lg:w-full     bg-white      border-collapse border-0 hover:bg-white mb-4">
      <div className="grid grid-cols-3 px-8">
        <h2 className="text-[#002C69]  font-bold font-Mukta  capitalize text-lg my-8  col-span-2">
          Scheduled Appointments
        </h2>
        <BsFillPlusSquareFill className="  self-center  justify-self-end text-lg fill-[blue] cursor-pointer" />
      </div>
      <div className="overflow-x-auto">
        <table className="table border-0   ">
          {/* head */}
          <thead>
            <tr className="border-0 capitalize text-[#000]">
              <th></th>
              <th>Date</th>
              <th>Time</th>
              <th>Specialist</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody className="text-[12px]">
            {/* row 1 */}
            <tr className="border-0 hover:bg-[#838383]">
              <td>
                <li className="marker:text-gray list-disc pl-5 space-y-3 text-slate-400 text-[20px]"></li>
              </td>
              <td>22/08/2023</td>
              <td>1:30pm</td>
              <td>Dr. chile Omereji</td>
              <td>Routine</td>
            </tr>
            <tr className="border-0 hover:bg-[#838383]">
              <td>
                <li className="marker:text-gray list-disc pl-5 space-y-3 text-slate-400 text-[20px]"></li>
              </td>
              <td>22/08/2023</td>
              <td>1:30pm</td>
              <td>Dr. chile Omereji</td>
              <td>Routine</td>
            </tr>
            <tr className="border-0 hover:bg-[#838383]">
              <td>
                <li className="marker:text-gray list-disc pl-5 space-y-3 text-slate-400 text-[20px]"></li>
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
            <span className="capitalize ">view all</span>
            <HiArrowLongRight className="text-2xl " />
          </span>
        </div>
      </div>
    </div>
  );
}
