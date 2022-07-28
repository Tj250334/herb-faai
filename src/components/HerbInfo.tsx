import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";



// Redux
import { useAppDispatch, useAppSelector } from "../contexts/store";
// import { setActiveMenu } from "../contexts/features/term/term-slice";

import {
  Herb,
  useUpdateHerbMutation,
  useGetHerbQuery,
} from "../contexts/features/thaiherb/thaiherb-api-slice";


const HerbWiki = () => {


  const herbId = useAppSelector((state) => state.termStored.herbId);
  // const dispatch = useAppDispatch();

  const { data, error, isSuccess, isLoading, isFetching } =
    useGetHerbQuery(herbId);

  if (error) {
    return <p>Error!</p>;
  } else if (isLoading) {
    return <p>Loading</p>;
  } else if (isFetching) {
    return <p>Fetching</p>;
  } else if (isSuccess) {
    return (
      <div className="mt-4">
        {/* {JSON.stringify(data)}
        <table>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
        </table> */}

        <HerbInfo key={data[0].id} herb={data[0]} />
      </div>
    );
  } else return null;
};
export default HerbWiki;




interface Props {
  herb: Herb;
}
const HerbInfo: React.FC<Props> = ({ herb }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Herb>({ defaultValues: herb });

  const [updateHerb] = useUpdateHerbMutation();
  const handler = async (data: Herb) => {
    await updateHerb(data);
  };

  const onSubmit: SubmitHandler<Herb> = (data) => {
    console.log(data);
    handler(data);
  };

  const StyleDiv = "block py-2";
  const StyleLabel = "text-base uppercase";
  const StyleInput = "mt-1.5 mb-4 p-3 w-full border-1 rounded-md resize-y";

  return (
    <div className="p-5 rounded-md bg-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        
          <label className="text-base uppercase" htmlFor="name">
            name :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        

        
          <label className={StyleLabel} htmlFor="geography">
            geography :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="geography"
            {...register("geography")}
          />
        

        
          <label className={StyleLabel} htmlFor="habitat">
            habitat :{" "}
          </label>
          <textarea
            className={StyleInput}
            placeholder="habitat"
            {...register("habitat")}
          />
        

        
          <label className={StyleLabel} htmlFor="morphology">
            morphology :{" "}
          </label>
          <textarea
            className={StyleInput}
            placeholder="morphology"
            {...register("morphology")}
          />
        

        
          <label className={StyleLabel} htmlFor="traditional_use">
            traditional-use :{" "}
          </label>
          <textarea
            className={StyleInput}
            placeholder="traditional use"
            {...register("traditional_use")}
          />
        

        
          <label className={StyleLabel} htmlFor="part_used">
            part-used :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="part used"
            {...register("part_used")}
          />
        

        <input
          className="bg-green-300 rounded-md p-1.5 mt-2"
          type="submit"
          value="save"
        />
      </form>
    </div>
  );
};

// const sample = {
//   id: 1,
//   name: "aaaa",
//   geography: "aaaa",
//   habitat: "aaaa",
//   morphology: "aaaa",
//   traditional_use: "aaaa",
//   part_used: "aaaa",
// };


// const HerbKey = [
//   "name",
//   "geography",
//   "habitat",
//   "morphology",
//   "traditional_use",
//   "part_used",
// ];


{
  /* <table>
          <form>
            <tr>
              <td>
                <label htmlFor="name" className="bg-red-400">Name</label>
              </td>
              <td>
                <input type="text" id="name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input type="email" id="email" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="telnum">Tel No.</label>
              </td>
              <td>
                <input type="telnum" id="telnum" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="rollno">Roll No.</label>
              </td>
              <td>
                <input type="number" id="rollno" />
              </td>
            </tr>
          </form>
        </table> */
}

{
  /* <div className="px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        
          <label className="text-base uppercase" htmlFor="name">
            name :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>

        
          <label className={StyleLabel} htmlFor="geography">
            geography :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="geography"
            {...register("geography")}
          />
        </div>

        
          <label className={StyleLabel} htmlFor="habitat">
            habitat :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="habitat"
            {...register("habitat")}
          />
        </div>

        
          <label className={StyleLabel} htmlFor="morphology">
            morphology :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="morphology"
            {...register("morphology")}
          />
        </div>

        
          <label className={StyleLabel} htmlFor="traditional_use">
            traditional-use :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="traditional use"
            {...register("traditional_use")}
          />
        </div>

        
          <label className={StyleLabel} htmlFor="part_used">
            part-used :{" "}
          </label>
          <input
            className={StyleInput}
            placeholder="part used"
            {...register("part_used")}
          />
        </div>

        <input
          className="bg-green-300 rounded-md p-1.5 mt-2"
          type="submit"
          value="save"
        />
      </form>
    </div> */
}
