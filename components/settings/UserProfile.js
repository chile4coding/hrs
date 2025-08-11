import {
  session,
  updateUserCOmplete,
  updateUserDetails,
  uploadProfilePics,
  uploadProfilePicture,
  uploadToCloudinary,
  getUser,
} from "@/services/request";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSolidMessageEdit, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Loginspinner from "../spinners/Loginspinner";
import { storeUser } from "@/redux/hospitalSlice";

export default function UserProfile() {
  const [userToken, setUserTken] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    imgFile: "",
    avatar: "",
    imageInput: "",
    gender: "male",
    email: "",
    lastName: "",
    firstName: "",
    status: "",
    phone: false,
    loading: false,
    userName: "",
    loading: false,
    loadingProfile: false,
    finalLoad: false,
    checkvalueMessage: false,
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.hospitals);

  useEffect(() => {
    async function getSeession() {
      const token = await session();

      if (token?.token) {
        setUserTken(token.token);
      }
    }

    const { user } = currentUser;
    const { avatar, email, phone, fullName, status, gender, displayName } =
      user;
    const [firstname, lastname] = fullName.split(" ");

    setUserDetails({
      ...userDetails,
      firstName: firstname,
      lastName: lastname,
      userName: displayName,
      status: status || "",
      gender: gender || "",
      email: email,
      avatar,
      phone,
    });

    getSeession();
  }, []);

  function handleImageFile(e) {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUserDetails({
        ...userDetails,
        imgFile: imageURL,
        imageInput: file,
        avatar: imageURL,
      });
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  }
  function handleProfileNavigation() {
    router.push("/settings/profile");
  }

  async function handleInmageUpload() {
    const sessionData = await session();
    setUserDetails({ ...userDetails, loading: true });

    const formData = new FormData();
    formData.append("upload_preset", "stewart");
    formData.append("file", userDetails.imageInput);

    if (userDetails.imageInput) {
      const result = await uploadToCloudinary(formData);
      if (result?.url) {
        const upload = await uploadProfilePics(userToken, result.url);
        const data = await upload.json();
        if (upload.status === 200) {
          const data = await getUser(sessionData?.token);
          setUserDetails({ ...userDetails, loading: false });
          dispatch(storeUser(data));
          toast.success(
            <div className=" normal-case">Profile picture updated</div>
          );
        } else {
          toast.error("Error uploading your profile picture, try again!");
        }
      }
    }

    setUserDetails({ ...userDetails, loading: false });
  }
  async function handlePersonalDetaislUpadete() {
    const sessionData = await session();

    const checkUser = Boolean(userDetails.gender && userDetails.status);

    if (!checkUser) {
      toast.error("Please fill all filed correctly");

      return;
    }

    setUserDetails({ ...userDetails, loadingProfile: true });

    const result = await updateUserDetails(userToken, {
      firstname: userDetails.firstName,
      lastname: userDetails.lastName,
      gender: userDetails.gender,
      status: userDetails.status,
      displayName: userDetails.userName,
    });
    if (result.status === 200) {
      const data = await getUser(sessionData?.token);

      dispatch(storeUser(data));
      toast.success("details updated successfully");
    } else {
      toast.error("An error occurred, please try again");
    }

    setUserDetails({ ...userDetails, loadingProfile: false });
  }

  async function handleContactDetailsUpdate() {
    const sessionData = await session();

    const checkUser = Boolean(userDetails.phone && userDetails.email);

    if (!checkUser) {
      toast.error("Please fill all filed correctly");

      return;
    }

    setUserDetails({ ...userDetails, finalLoad: true });

    const result = await updateUserCOmplete(userToken, {
      phone: userDetails.phone,
      email: userDetails.email,
    });
    if (result.status === 200) {
      const data = await getUser(sessionData?.token);
      dispatch(storeUser(data));
      toast.success("details updated successfully");
    } else {
      toast.error("An error occurred, please try again");
    }

    setUserDetails({ ...userDetails, finalLoad: false });
  }

  return (
    <div className="mt-6  sm:mb-2 card md:w-full  xl:w-full lg:w-full   sm:w-full bg-white      border-collapse border-0 hover:bg-white ">
      <div className=" p-6 sm:p-2   w-full ">
        <div className="  flex flex-col items-center gap-3 justify-center">
          <div className="relative">
            <label className="   cursor-pointer" htmlFor="user_img">
              <img
                htmlFor="user_img"
                src={
                  userDetails.avatar
                    ? userDetails.avatar
                    : userDetails.gender === "male"
                    ? "/male.png"
                    : "/female.jpg"
                }
                className=" rounded-full   object-cover h-[66px] w-[66px]"
              />
              {/* <BiSolidMessageEdit className=" text-[16px] font-bold" /> */}
            </label>
            <input
              type="file"
              className="hidden"
              id="user_img"
              onChange={handleImageFile}
              accept="image/*"
            />
          </div>
          <h2>Patient</h2>

          <button
            onClick={handleInmageUpload}
            className="btn btn-sm    sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            Upload {userDetails.loading && <Loginspinner />}
          </button>
        </div>
        <h2 className="text-[#3188FF]  lg:text-[20px] font-normal">
          Personal Details
        </h2>
        <div className="my-4 sm:my-2 ">
          <p className=" font-bold text-[16px]  sm:text-sm  py-4 sm:py-2">
            First Name
          </p>

          <div
            class={`relative inline-flex items-center w-full   md:max-w-lg border border-gray-300 border-1  rounded-lg ${
              userDetails.fullnameError ? "my-input" : ""
            }`}
            style={{
              border: userDetails.fullnameError ? "1px solid red" : "",
            }}>
            <input
              type="text"
              placeholder={`${
                userDetails.fullnameError
                  ? "Name must be first name and surname"
                  : "First Name"
              }`}
              required
              name="firstName"
              onChange={handleInputChange}
              value={userDetails.firstName}
              className="text-[16px] p-4 bg-transparent w-full outline-0 outline-none sm:text-xs sm:p-3   "
            />

            <div class=" flex items-center pointer-events-none ">
              <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2  sm:grid-col-1 gap-6 ">
          <div className="my-4 sm:my-2 ">
            <p className=" font-bold text-[16px]  sm:text-sm  py-4 sm:py-2">
              Last Name
            </p>

            <div
              class={`relative inline-flex items-center w-full   md:max-w-lg    border border-gray-300 border-1border-gray-400 border-1  rounded-lg ${
                userDetails.fullnameError ? "my-input" : ""
              }`}
              style={{
                border: userDetails.fullnameError ? "1px solid red" : "",
              }}>
              <input
                type="text"
                placeholder={`${
                  userDetails.fullnameError
                    ? "Name must be first name and surname"
                    : "Enter your last name"
                }`}
                required
                name="lastName"
                onChange={handleInputChange}
                value={userDetails.lastName}
                className="text-[16px] p-4 bg-transparent w-full outline-0 outline-none     sm:text-xs sm:p-3   "
              />

              <div class=" flex items-center pointer-events-none ">
                <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
              </div>
            </div>
          </div>
          <div className="my-4 sm:my-2 ">
            <p className=" font-bold text-[16px]  sm:text-sm  py-4 sm:py-2">
              User Name
            </p>

            <div
              class={`relative inline-flex items-center w-full   md:max-w-lg border border-gray-300 border-1  rounded-lg ${
                userDetails.fullnameError ? "my-input" : ""
              }`}
              style={{
                border: userDetails.fullnameError ? "1px solid red" : "",
              }}>
              <input
                type="text"
                onChange={handleInputChange}
                placeholder={`${
                  userDetails.fullnameError
                    ? "Name must be first name and surname"
                    : "Enter your user name"
                }`}
                required
                name="userName"
                value={userDetails.userName}
                className="text-[16px] p-4 bg-transparent w-full outline-0 outline-none sm:text-xs sm:p-3   "
              />

              <div class=" flex items-center pointer-events-none ">
                <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2  sm:grid-col-1 gap-6">
          <div className="my-4 sm:my-2 ">
            <p className=" font-bold text-[16px]  sm:text-sm  py-4 sm:py-2">
              Gender
            </p>

            <div
              class={`relative inline-flex items-center w-full   md:max-w-lg border border-gray-300 border-1  rounded-lg ${
                userDetails.fullnameError ? "my-input" : ""
              }`}
              style={{
                border: userDetails.fullnameError ? "1px solid red" : "",
              }}>
              <select
                name="gender"
                value={userDetails.gender}
                onChange={handleInputChange}
                className="select text-[16px] bg-transparent w-full outline-0 outline-none sm:text-xs  ">
                <option value="" disabled selected>
                  -- select gender --
                </option>
                <option value="Male" selected={userDetails.gender === "Male"}>
                  Male
                </option>
                <option
                  value="Female"
                  selected={userDetails.gender === "Female"}>
                  Female
                </option>
              </select>

              <div class=" flex items-center pointer-events-none ">
                <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
              </div>
            </div>
          </div>
          <div className="my-4 sm:my-2 ">
            <p className=" font-bold text-[16px]  sm:text-sm  py-4 sm:py-2">
              Marital Status
            </p>

            <div
              class={`relative inline-flex items-center w-full   md:max-w-lg border border-gray-300 border-1  rounded-lg ${
                userDetails.fullnameError ? "my-input" : ""
              }`}
              style={{
                border: userDetails.fullnameError ? "1px solid red" : "",
              }}>
              <select
                name="status"
                onChange={handleInputChange}
                value={userDetails.status}
                className="select text-[16px] bg-transparent w-full outline-0 outline-none border-0   border-none sm:text-xs  ">
                <option value="" disabled selected>
                  -- select marital status --
                </option>
                <option
                  value="Single"
                  selected={userDetails.status === "Single"}>
                  Single
                </option>
                <option
                  value="Married"
                  selected={userDetails.status === "Married"}>
                  Married
                </option>
              </select>

              <div class=" flex items-center pointer-events-none ">
                <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
              </div>
            </div>
          </div>
        </div>
        <div className="  flex justify-end">
          <button
            onClick={handlePersonalDetaislUpadete}
            className="btn    sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            Update {userDetails.loadingProfile && <Loginspinner />}
          </button>
        </div>
        <h2 className="text-[#3188FF]  lg:text-[20px] font-normal">
          Contact Details
        </h2>
        <div className=" grid grid-cols-2  sm:grid-col-1 gap-6 ">
          <div className="my-4 sm:my-2 ">
            <p className=" font-bold text-[16px]  sm:text-sm  py-4 sm:py-2">
              Email
            </p>

            <div
              class={`relative inline-flex items-center w-full   md:max-w-lg    border border-gray-300 border-1border-gray-400 border-1  rounded-lg ${
                userDetails.fullnameError ? "my-input" : ""
              }`}
              style={{
                border: userDetails.fullnameError ? "1px solid red" : "",
              }}>
              <input
                type="text"
                onChange={handleInputChange}
                placeholder={`${
                  userDetails.fullnameError
                    ? "Name must be first name and surname"
                    : "Enter your email address"
                }`}
                required
                name="email"
                value={userDetails.email}
                className="text-[16px] p-4 bg-transparent w-full outline-0 outline-none     sm:text-xs sm:p-3   "
              />

              <div class=" flex items-center pointer-events-none ">
                <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
              </div>
            </div>
          </div>
          <div className="my-4 sm:my-2 ">
            <p className=" font-bold text-[16px]  sm:text-sm  py-4 sm:py-2">
              Phone
            </p>

            <div
              class={`relative inline-flex items-center w-full   md:max-w-lg border border-gray-300 border-1  rounded-lg ${
                userDetails.fullnameError ? "my-input" : ""
              }`}
              style={{
                border: userDetails.fullnameError ? "1px solid red" : "",
              }}>
              <input
                type=" text"
                placeholder={`${
                  userDetails.fullnameError
                    ? "Name must be first name and surname"
                    : "Enter your  phone number"
                }`}
                required
                name="phone"
                onChange={handleInputChange}
                value={userDetails.phone || ""}
                className="text-[16px] p-4 bg-transparent w-full outline-0 outline-none sm:text-xs sm:p-3   "
              />

              <div class=" flex items-center pointer-events-none ">
                <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-end">
          <button
            onClick={handleContactDetailsUpdate}
            className="btn    sm:btn-xs normal-case  font-light  bg-[#3188FF] text-white hover:bg-white hover:text-[#3188FF] hover:border hover:border-[#3188FF]">
            Update {userDetails.finalLoad && <Loginspinner />}
          </button>
        </div>
      </div>
    </div>
  );
}
