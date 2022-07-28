import React from "react";

const Navbar2: React.FC = () => {
  return (
    <>
      <div className="border-1 border-red-900 p-8 flex flex-col md:flex-row space-y-6 md:space-x-12 md:space-y-0">
        <div>
          <strong>Company</strong>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <strong>Contact</strong>
          <br />
          Contract number
        </div>

        <div>
          <strong>Social</strong>
        </div>
        <div className="border-1 md:flex-grow md:text-right">Company Logo</div>
      </div>
    </>
  );
};
export default Navbar2;
