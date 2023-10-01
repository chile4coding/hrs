import React from 'react'
import Layout from '@/components/Layout'
import Card from '@/components/facilities/Card'

export default function Facilities() {
  return (
    <Layout>
      <h2 className=" text-[28px] font-bold  sm:text-lg">Life Save Hospital / Facilities</h2>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
