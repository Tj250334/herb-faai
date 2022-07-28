import React from "react";

const Table: React.FC = () => {
  return (
    <div className="bg-cyan-900 flex justify-center items-center h-screen">
      <table className="shadow-2xl border-2 border-cyan-200 w-6/12 overflow-hidden">
        <thead className="text-white">
        <tr>
          <th className="py-3 bg-cyan-800">S.NO</th>
          <th className="py-3 bg-cyan-800">Name</th>
          <th className="py-3 bg-cyan-800">LANGUAGE</th>
          <th className="py-3 bg-cyan-800">MARK</th>
        </tr>
        </thead>
        <tbody className="text-cyan-900 text-center">
          <tr className="bg-cyan-200 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">1</td>
            <td className="py-3 px-6">JOHN DOE</td>
            <td className="py-3 px-6">PYTHON</td>
            <td className="py-3 px-6">78</td>
          </tr>
          <tr className="bg-cyan-300 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">1</td>
            <td className="py-3 px-6">SIMTH</td>
            <td className="py-3 px-6">JAVA</td>
            <td className="py-3 px-6">48</td>
          </tr>
          <tr className="bg-cyan-400 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">3</td>
            <td className="py-3 px-6">ALEX</td>
            <td className="py-3 px-6">HTML</td>
            <td className="py-3 px-6">39</td>
          </tr>
          <tr className="bg-cyan-500 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">4</td>
            <td className="py-3 px-6">DANY</td>
            <td className="py-3 px-6">CSS</td>
            <td className="py-3 px-6">99</td>
          </tr>
          <tr className="bg-cyan-600 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">5</td>
            <td className="py-3 px-6">MARRY</td>
            <td className="py-3 px-6">C++</td>
            <td className="py-3 px-6">59</td>
          </tr>
          <tr className="bg-cyan-700 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">6</td>
            <td className="py-3 px-6">ROMAN</td>
            <td className="py-3 px-6">JAVASCRIPT</td>
            <td className="py-3 px-6">89</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
