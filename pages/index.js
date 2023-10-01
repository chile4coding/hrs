import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/homelayout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import { useDispatch, useSelector } from "react-redux";
import { signup } from "@/services/request";
import Loginspinner from "@/components/spinners/Loginspinner";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const hospitals = useSelector((state) => state.hospitals);
  const [valu, setValue] = useState({
    email: "",
    password: "",
    fullname: "",
    confirmPassword: "",
    inputCheck: false,
    loading: false,
    fullnameError: false,
    checkvalue: false,
    checkvalueMessage:false
  });
  const router = useRouter();
  const handleShowPassword = () => setShowPassword((password) => !password);
  const handleCheck = () =>
    setValue({ ...valu, checkvalue: !valu.checkvalue, checkvalueMessage:false });

  function handleValues(e) {
    const { name, value } = e.target;
    setValue({
      ...valu,
      [name]: value,
      inputCheck: false,
      fullnameError: false,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (valu.password.trim() !== valu.confirmPassword.trim()) {
      setValue({ ...valu, inputCheck: true });
      return;
    }
    const nameCheck = valu.fullname.split(" ");
    if (nameCheck.length === 1) {
      setValue({ ...valu, fullnameError: true, fullname: "" });
      return;
    }
    if(!valu.checkvalue){
       setValue({
         ...valu,
         checkvalueMessage: true,
       });
      return
    }

    setValue({ ...valu, loading: true });
    const response = await signup({
      email: valu.email,
      password: valu.password,
      fullname: valu.fullname,
    });
    if (response.ok) {
      const data = await response.json();
      toast.success(data.message);
      setValue({ ...valu, loading: false });
      router.push("/login");
    } else {
      const data = await response.json();
      toast.error(data.error);
      setValue({ ...valu, loading: false });
    }
  }

  return (
    <Layout >
      <main className="bg-[#fff] py-8 px-8 h-full  sm:py-4  rounded-lg normal-case ">
        <h2 className=" font-bold text-[32px] text-[#3188FF]  lg:mt-24">
          Sign up to HRS
        </h2>
        <p className="ttext-[14ppx] text-[#8F8F8F] my-3 font-normal">
          Create a free account to start locating various hospitals and services
          with the HRS platform.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="my-4 sm:my-2">
            <p className="text-[16px] font-medium sm:text-sm  py-4 sm:py-2">
              Full Name
            </p>

            <div
              class={`relative inline-flex items-center w-full   md:max-w-lg border   rounded-lg ${
                valu.fullnameError ? "my-input" : ""
              }`}
              style={{ border: valu.fullnameError ? "1px solid red" : "" }}>
              <input
                type="text"
                placeholder={`${
                  valu.fullnameError
                    ? "Name must be first name and surname"
                    : "Enter your full name"
                }`}
                required
                name="fullname"
                value={valu.fullname}
                onChange={handleValues}
                className="text-[16px] p-4 bg-transparent w-full border-0 outline-0 outline-none border-none sm:text-xs sm:p-3   "
              />

              <div class=" flex items-center pointer-events-none ">
                <BiUser className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm " />
              </div>
            </div>
          </div>
          <div className="my-4 sm:my-2">
            <p className="text-[16px] font-medium sm:text-sm  py-4 sm:py-2">
              Email
            </p>
            <div class="relative inline-flex items-center w-full   md:max-w-lg border   rounded-lg">
              <input
                type="text"
                placeholder="Enter your email address"
                required
                name="email"
                value={valu.email}
                onChange={handleValues}
                className="text-[16px] p-4 bg-transparent w-full border-0 outline-0 outline-none border-none sm:text-xs sm:p-3  "
              />

              <div class=" flex items-center pointer-events-none ">
                <AiOutlineMail className="text-2xl text-gray-400 cursor-pointer  mr-2 sm:text-sm" />
              </div>
            </div>
          </div>
          <div className="my-4 sm:my-2">
            <p className="text-[16px] font-medium sm:text-sm  py-4 sm:py-2">
              Password
            </p>
            <div class="flex items-center w-full   md:max-w-lg border   rounded-lg">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
                name="password"
                value={valu.password}
                onChange={handleValues}
                style={{
                  border: valu.inputCheck ? "1px solid red" : "",
                }}
                className="  text-[16px] p-4 bg-transparent w-full  border-0 outline-0 outline-none border-none sm:text-xs sm:p-3  "
              />
              <div class="flex items-center   ">
                {showPassword ? (
                  <AiOutlineEye
                    className="text-2xl text-gray-400  cursor-pointer  mr-2 sm:text-sm "
                    onClick={handleShowPassword}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="text-2xl text-gray-400  cursor-pointer  mr-2 sm:text-sm "
                    onClick={handleShowPassword}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="my-4 sm:my-2">
            <p className="text-[16px] font-medium sm:text-sm  py-4 sm:py-2">
              Confirm Password
            </p>
            <div class="flex items-center w-full   md:max-w-lg border   rounded-lg">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                required
                name="confirmPassword"
                value={valu.confirmPassword}
                onChange={handleValues}
                style={{
                  border: valu.inputCheck ? "1px solid red" : "",
                }}
                className="  text-[16px] p-4 bg-transparent w-full  border-0 outline-0 outline-none border-none sm:text-xs sm:p-3  "
              />
              <div class="flex items-center   ">
                {showPassword ? (
                  <AiOutlineEye
                    className="text-2xl text-gray-400  cursor-pointer  mr-2 sm:text-sm "
                    onClick={handleShowPassword}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="text-2xl text-gray-400  cursor-pointer  mr-2 sm:text-sm "
                    onClick={handleShowPassword}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex  gap-2 items-center py-4 sm:pt-1">
            {valu.checkvalueMessage && (
              <span className=" text-red-500 text-[16px]">
                check the privary terms
              </span>
            )}
            <input
              type="checkbox"
              onClick={handleCheck}
              className={`checkbox   sm:font-thin sm:text-xs sm:w-4 sm:h-4`}
            />
            <div className=" sm:text-[10px] normal-case">
              <span>Agree to our</span>{" "}
              <span className="text-[#3188FF]">Terms</span>
              <span> &</span>{" "}
              <span className="text-[#3188FF]"> Privacy Policy</span>
            </div>
          </div>
          <div>
            <button className="btn  normal-case w-full flex  items-center bg-[#3188FF] p-3 text-[white] hover:text-[#3188FF] hover:bg-[white] hover:border-[#3188FF] hover:border">
              {valu.loading ? "Createing Account" : "Create Account"}
              {valu.loading ? <Loginspinner /> : ""}
            </button>
          </div>
        </form>
        <div className=" flex  w-full gap-1 justify-center my-3 ">
          <p className="text-[14px]  font-normal sm:text-[10px] normal-case">
            Already created an Account?
          </p>
          <Link
            href="/login"
            className="text-[#3188FF] text-[14px]  font-normal sm:text-[10px]">
            {" "}
            Sign in here.
          </Link>
        </div>
      </main>
    </Layout>
  );
}
