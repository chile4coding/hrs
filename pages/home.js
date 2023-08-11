import React from "react";
import Layout from "../components/Layout";
import Dashboardmenus from "@/components/dashboardmenus";
export default function home() {
  return (
    <Layout>
<div className="mt-10 grid lg:grid-cols-5  md:grid-cols-2  sm:grid-cols-1 gap-4">
  <Dashboardmenus details="Visited Patients"/>
  <Dashboardmenus details="Specialists"/>
  <Dashboardmenus details="All Hospital"/>
</div>

   
    </Layout>
  );
}
