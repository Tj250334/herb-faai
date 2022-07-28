import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal: React.FC = () => {
  const [popup, setPopup] = useState(true);

  return (
    <div className="bg-gray-800 h-screen p-12">
      <button
        onClick={() => setPopup(true)}
        className="px-6 py-3 bg-red-600 text-gray-100 rounded shadow"
      >
        Delete
      </button>

      {/* Modal */}
      <div
        className={`${
          popup ? "flex" : "hidden"
        } items-center justify-center inset-0 bg-black bg-opacity-50 absolute`}
      >
        <div className="bg-gray-200 max-w-sm py-1 px-2 rounded shadow-xl text-gray-800">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Confirm delete ?</h4>

            <button onClick={() => setPopup(false)}>
              <IoMdClose className="h-6 w-6 p-1 hover:bg-gray-300 rounded-full" />
            </button>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="p-1 h-6 w-6 hover:bg-gray-300 rounded-full cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
          </div>

          {/* Paragraph */}
          <div className="mt-2 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis eum molestiae commodi tempora quae beatae modi quam
              expedita temporibus facere quod labore
            </p>
          </div>

          {/* OK Cancel */}
          <div className="mt-3 flex justify-end space-x-3">
            <button
              onClick={() => setPopup(false)}
              className="px-3 py-1 rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900"
            >
              Cancel
            </button>
            <button
              onClick={() => setPopup(false)}
              className="px-3 py-1 rounded bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
