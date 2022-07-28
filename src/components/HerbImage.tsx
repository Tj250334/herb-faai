import React from "react";
import ModalImage from "./ModalImage";
// Redux
import { useAppDispatch, useAppSelector } from "../contexts/store";
// redux
import { useAddHerbImgMutation, useGetHerbImgQuery } from "../contexts/features/thaiherb/thaiherb-api-slice";

const HerbImage: React.FC = () => {
  const herbId = useAppSelector((state) => state.termStored.herbId);

  const [uploadImage] = useAddHerbImgMutation();

  const addHandler = async (data: FormData) => {
    await uploadImage(data);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    data.set("herb_id", String(herbId));

    addHandler(data);
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        {/* <input type="number" name="herb_id" /> */}
        <input type="file" name="img" />
        <input
          className="text-sm bg-green-600 rounded-md p-1.5 hover:bg-green-400"
          type="submit"
          value="Upload"
        />
      </form>
      <HerbImageShow />
    </div>
  );
};
export default HerbImage;




const HerbImageShow:React.FC = () => {
  const herbId = useAppSelector((state) => state.termStored.herbId);
  const { data, error, isSuccess, isFetching, isLoading } =
    useGetHerbImgQuery(herbId);

  return (
    <div className="transition duration-0 md:duration-150">
      {error ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>loading</p>
      ) : isFetching ? (
        <p>fetching</p>
      ) : isSuccess ? (
        // JSON.stringify(data)
        <div className="flex">
          {data.map(e => (
            <ModalImage key={e.id} herbimg={e}/>
          ))}
        </div>
      ) : null}
    </div>
  )
}