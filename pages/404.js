import React from "react";
import Image from "next/image";
import { Footer } from "../components/Layout"
import Link from "next/link";

export default function PageNotFound() {


  return (
    <main className="  border h-[100vh]">
    <Link href="/login">
      <Image src="/hrs.png" width="97" height="89" alt="logo" />

    </Link>
      <div className=" flex justify-center  items-center  flex-col sm:h-[65vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh]">
        <div className="   p-3 text-center bg-[#3188FF] rounded-md text-[white]">
          <h2 className="text-lg font-bold my-2">Page Not Found </h2>
          <p className="pb-3">Click the logo to goback to home page</p>
        </div>
      </div>
      <div className="  mt-auto">
        <Footer />
      </div>
    </main>
  );
}
