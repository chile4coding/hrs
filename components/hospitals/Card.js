import React, { useEffect, useState } from "react";

import { ImageComponent } from "@/components/specialists";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Rating, Typography } from "@mui/material";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineDirections } from "react-icons/md";
import { useRouter } from "next/router";
import { getHospital, getSingleHospital } from "@/redux/hospitalSlice";
import { useDispatch, useSelector } from "react-redux";
import { LiaTimesSolid } from "react-icons/lia";
import { getHospitals, rateHospital, session } from "@/services/request";
import Loginspinner from "@/components/spinners/Loginspinner";
import toast from "react-hot-toast";
export function Modal({ handleHideModal, id }) {
  const [check, setCheck] = useState(false);
  const [specialist, setSpecialist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appointmentdetails, setAppointmentDetails] = useState({
    rate: "",
    name: "",
    message: "",
  });

  const router = useRouter();
  const { hospitals } = useSelector((state) => state.hospitals);

  const dispatch = useDispatch();
  useEffect(() => {
    async function hospitals() {
      const token = await session();
      if (token) {
        const hospital = await getHospitals(token?.token);
        dispatch(getHospital(hospital.hospitals));
      }
    }

    hospitals();
  }, []);

  function handleAppointmentVal(e) {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentdetails, [name]: value });
  }
  function handleCheck() {
    setCheck((prev) => !prev);
  }

  const checkValues = Boolean(
    appointmentdetails.rate &&
      appointmentdetails.name &&
      appointmentdetails.message
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!checkValues) {
      return;
    }

    setLoading(true);
    const token = await session();

    const response = await rateHospital(
      {
        hospitalId: id,
        rate: Number(appointmentdetails.rate),
      },
      token?.token
    );
    // const response = await bookAppointment(appointmentdetails, token?.token);
    const data = await response.json();
    const hospital = await getHospitals(token?.token);
    dispatch(getHospital(hospital.hospitals));

    if (response.ok) {
      if (hospital.hospitals) {
        setLoading(false);
        setAppointmentDetails({
          ...appointmentdetails,
          name: "",
          rate: "",
          message: "",
        });
        toast.success(data.message);
        handleHideModal();
      }
      return;
    }
    setLoading(false);
    toast.error(data.message);
  }

  return (
    <>
      <dialog id="my_modal_2" className="modal modal-open">
        <form
          onSubmit={handleSubmit}
          method="dialog"
          className=" modal-box bg-white   max-w-lg  sm:text-xs text-[#0F0F0F]">
          <div className=" flex justify-between items-center bg-[#3188FF] mt-0 pt-0   text-[24px]  font-semibold text-[#fff] px-[24px] h-[64px]">
            <h2 className=" ">Review hospital</h2>
            <button type="button" onClick={handleHideModal}>
              <LiaTimesSolid />
            </button>
          </div>

          <div className=" p-6 grid grid-cols-3  sm:grid-cols-1">
            <h2 className=" self-center text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Name
            </h2>
            <input
              type="text"
              onChange={handleAppointmentVal}
              name="name"
              className="input input-ghost w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5 text-[black]"
            />

            <h2 className=" self-start text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Message
            </h2>
            <textarea
              onChange={handleAppointmentVal}
              name="message"
              className="textarea   w-full max-w-md col-span-2 bg-transparent  border-1 border-[#BCBCBC]  mb-5"
              placeholder="Message..."
              rows={3}></textarea>
            <h2 className=" self-start text-[18px]  font-medium  mb-5 text-[#0F0F0F]">
              Rate
            </h2>
            <Rating
              sx={{
                fill: "green",
              }}
              className=" text-center"
              defaultValue={0}
              name="rate"
              onChange={handleAppointmentVal}
              precision={1}
            />
          </div>
          <div className="px-[24px]  flex justify-center normal-case mb-8 sm:grid-cols-1">
            <button
              className=" bg-[#3188FF] p-3 normal-case  btn justify-self-end border-0 text-[white] hover:text-[#3188FF] hover:bg-[white] hover:border-[#3188FF] hover:border"
              type="submit"
              disabled={!checkValues}>
              Submit {loading && <Loginspinner />}
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

function Favourite() {
  return (
    <>
      <Rating
        name="customized-10"
        max={1}
        defaultValue={0}
        className=" text-red-700"
        precision={1}
        icon={<MdOutlineFavorite fontSize="inherit" />}
        emptyIcon={<MdOutlineFavoriteBorder fontSize="inherit" />}
      />
    </>
  );
}

export default function Card({ hospital }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const router = useRouter();

  const { name, avatar, avgRate, address, _id, city } = hospital;
  function handleHospitalDetails(id) {
    dispatch(getSingleHospital(id));
    // dispatch(getSingleHospital(id))
    router.push("/hospitals/details");
  }
  function handleMapView(id) {
    dispatch(getSingleHospital(id));
    router.push("/hospitals/map");
  }

  const handleShowModal = () => {
    setShow(true);
  };
  const handleHideModal = () => {
    setShow(false);
  };

  return (
    <div className="mt-6 mb-10 sm:mb-2 card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white ">
      <div className=" sm:max-h-[100px]">
        <ImageComponent imageUrl={avatar} maxHeight="240px" />
      </div>

      <div className=" p-6 sm:p-2   w-full">
        <div className=" flex justify-between items-center">
          <h2>{city}</h2>
        </div>
        <div className=" flex justify-between mt-3">
          <h2>{name}</h2>
          <span className=" flex gap-1  items-center">
            {avgRate}
            <AiTwotoneStar className=" fill-yellow-500" />
          </span>
        </div>
        <p className=" text-[12px] leading-snug py-4 sm:pt-2 sm:text-[7px] text-justify">
          {address}
        </p>
        <div className=" flex  flex-wrap justify-between items-center">
          <button
            onClick={handleHospitalDetails.bind(this, _id)}
            className="btn   btn-sm sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            Details <BsArrowRight />
          </button>
          <button
            onClick={handleShowModal}
            className="btn   btn-sm sm:btn-xs normal-case  font-light  border-[#3188FF] text-[#3188FF] hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            Review
          </button>
          <div>
            <span
              className="  sm:gap-0 flex gap-2 items-center text-[#3188FF] hover:underline"
              onClick={handleMapView.bind(this, _id)}>
              <MdOutlineDirections />
              <span className=" sm:text-[9px] normal-case cursor-pointer">
                view in map
              </span>
            </span>
          </div>
        </div>

        {show && <Modal id={_id} handleHideModal={handleHideModal} />}
      </div>
    </div>
  );
}
