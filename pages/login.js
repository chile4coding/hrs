import React, { useState, useEffect } from "react";
import Layout from "../components/homelayout/Layout";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Loginspinner from "@/components/spinners/Loginspinner";
import { loginRequest } from "@/services/request";
import { session, addedUserLocation } from "@/services/request";
import toast from "react-hot-toast";
// import cogoToast from "cogo-toast";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [valu, setValue] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const route = useRouter();
  useEffect(()=>{
    addedUserLocation()
  }, [])
 

  const handleShowPassword = () => setShowPassword((password) => !password);

  function handleValues(e) {
    const { name, value } = e.target;
    setValue({ ...valu, [name]: value });
  }

  const finalCheck = Boolean(
    valu.email && valu.loading && valu.password
  );
  async function handleSubmit(e) {
    e.preventDefault();


      setValue({ ...valu, loading: true });

    sessionStorage.clear()
    const response = await loginRequest({
      email: valu.email,
      password: valu.password,
    });

    const  data = await response.json();
    if (response.ok) {
      session(data)
     toast.success(data.mesage,)

      setValue({ ...valu, loading: false });
    } else {

      toast.error(data.error);
      setValue({ ...valu, loading: false });
      route.replace("/login");
    }
  const sessionData  =  await session()
  if(!sessionData){
    return
  }
  route.replace("/home")
  }

  return (
    <Layout>
      <main className="bg-[#fff] py-8 px-8 h-full rounded-lg normal-case">
        <h2 className=" font-bold text-[32px] text-[#3188FF]">
          Sign in to HRS
        </h2>
        <p className="text-[14ppx] text-[#8F8F8F] my-3 font-normal">
          Create a free account to start locating various hospitals and services
          with the HRS platform.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="my-4 sm:my-2">
            <p className="text-[16px] font-medium sm:text-sm  py-4 sm:py-2">
              Email
            </p>
            <div class="relative inline-flex items-center w-full   md:max-w-lg border   rounded-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                name="email"
                onChange={handleValues}
                value={valu.email}
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
                onChange={handleValues}
                value={valu.password}
                name="password"
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
        
          <div>
            <button className="btn  normal-case w-full flex  items-center bg-[#3188FF] p-3 text-[white] hover:text-[#3188FF] hover:bg-[white] hover:border-[#3188FF] hover:border">
              {valu.loading ? "Logging in" : "Login"}
              {valu.loading ? <Loginspinner /> : ""}
            </button>
          </div>
        </form>

        <div className=" flex  w-full gap-1 justify-center my-3">
          <p className="text-[14px]  font-normal sm:text-[10px]    normal-case">
            Don&apos;t have an Account?
          </p>
          <Link
            href="/"
            className="text-[#3188FF] text-[14px]  font-normal sm:text-[10px] normal-case">
            Sign up here.
          </Link>
        </div>
      </main>
    </Layout>
  );
}
