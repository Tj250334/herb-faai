import React from "react";
import HerbImage from "./HerbImage";
import HerbInfo from "./HerbInfo";
import HerbNames from "./HerbNames";

import Table from "../tailwindComponents/Table";

import {
  Herb,
  useUpdateHerbMutation,
  useGetHerbQuery,
} from "../contexts/features/thaiherb/thaiherb-api-slice";


const HerbWiki = () => {


  return(
    <div className="m-8">
      <HerbImage />
      <HerbNames />
      <HerbInfo />

      <Table />
    </div>
  )

  
};
export default HerbWiki;

