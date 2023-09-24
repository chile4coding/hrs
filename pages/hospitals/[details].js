import React from 'react'
import Layout from '@/components/Layout'
import Detail from '@/components/hospitals/Details'
import {HiOutlineArrowNarrowLeft} from "react-icons/hi"
import { useRouter } from 'next/router'
export default function Details() {
    const router  = useRouter()
       function handleBackNav() {
         router.back();
       }
 
  return (
    <Layout>
      <div className="flex gap-2  my-2 sm:items-center">
        <HiOutlineArrowNarrowLeft
          className=" sm:text-[20px] text-[30px] cursor-pointer"
          onClick={handleBackNav}
        />
        <h2 className=" text-[28px] font-bold  sm:text-lg">Hospital Details</h2>
      </div>
      <Detail />
    </Layout>
  );
}
