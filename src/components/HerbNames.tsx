import React, { useState } from "react";
import { herbNameTypes, herbNames } from "../data/dummy";

const HerbNames: React.FC = () => {
  return (
    <div className="mt-4 border-1 rounded-md p-4">


      <div className="">
        {herbNameTypes.map((nameType, i) => (
          <p className="py-1" key={i}>
            {nameType + " : "}
            {herbNames
              .filter((herbName) => herbName.category_id === i + 0)
              .map((item, index) => (
                <span key={item.id}>{`${index === 0 ? "" : ","} ${
                  item.name
                }`}</span>
              ))}
          </p>
        ))}
      </div>



      {/* <form>
        <select
          id="country"
          name="country"
          className="border-1 p-2 hover:bg-slate-50"
          value={herbNameTypes[2]}
        >
          {herbNameTypes.map((nameType, index) => (
            <option value={nameType} key={index}>
              {nameType}
            </option>
          ))}
        </select>

        <input
          className="ml-2 border-1 p-2"
          type="text"
          name="name"
          placeholder="name..."
        />

        <input
          className="ml-2 border-1 rounded-md p-2 hover:bg-stone-200"
          type="submit"
          value="Add"
        />
      </form> */}


    </div>
  );
};
export default HerbNames;

interface Props {
  category_id: number;
  name: string;
}
const EditName: React.FC<Props> = ({ category_id, name }) => {
  return (
    <div>
      <select
        name="country"
        className="border-1 p-1 hover:bg-slate-50"
        value={herbNameTypes[category_id]}
      >
        {herbNameTypes.map((nameType, index) => (
          <option value={nameType} key={index}>
            {nameType}
          </option>
        ))}
      </select>

      <input
        className="ml-2 border-1 p-1 w-2/6"
        type="text"
        name="name"
        value={name}
        placeholder="name..."
      />
    </div>
  );
};
