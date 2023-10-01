import React from 'react'
import Map from '../../../components/hospitals/index'
import Layout from '@/components/Layout'
import { useSelector } from 'react-redux';
export default function Hopsitalmap() {
    const { singleHospital } = useSelector((state) => state.hospitals);
  return (
    <Layout>
      <h2 className=" text-[28px] font-bold  sm:text-lg">{singleHospital.name}</h2>

      <Map />
    </Layout>
  );
}
