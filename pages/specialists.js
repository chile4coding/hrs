import React from "react";
import Layout from "../components/Layout";
import { Specialistcard } from "../components/specialists";
import { Specialistscompletecard , Rating} from "../components/specialists";

export default function Specialists() {
  return (
    <Layout>
      <div className=" grid grid-cols-3 gap-4 my-10 sm:grid-cols-1">
        <Specialistcard />
        <Specialistcard />
        <Specialistcard />
      </div>
      <div className=" grid grid-cols-3 gap-4 my-10 md:grid-cols-2 sm:grid-cols-1">
        <Specialistscompletecard rate={1} />
        <Specialistscompletecard rate={2} />
        <Specialistscompletecard rate={3} />
        <Specialistscompletecard rate={4} />
        <Specialistscompletecard rate={5} />
        <Specialistscompletecard rate={6} />
      </div>
    </Layout>
  );
}
