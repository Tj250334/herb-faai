import React from "react";

const Table: React.FC = () => {
  return (
    <table className="border-slate-500 ...">
      <thead>
        <tr>
          <th className="border border-slate-600 ...">State</th>
          <th className="border border-slate-600 ...">City</th>
        </tr>
      </thead>
      <tbody>
        <tr className="odd:bg-red-400 even:bg-slate-500">
          <td className="border border-slate-700 ...">Indiana</td>
          <td className="border border-slate-700 ...">Indianapolis</td>
        </tr>
        <tr className="odd:bg-red-400 even:bg-slate-500">
          <td className="border border-slate-700 ...">Ohio</td>
          <td className="border border-slate-700 ...">Columbus</td>
        </tr>
        <tr className="odd:bg-red-400 even:bg-slate-500">
          <td className="border border-slate-700 ...">Michigan</td>
          <td className="border border-slate-700 ...">Detroit</td>
        </tr>
        <tr className="odd:bg-red-400 even:bg-slate-500">
          <td className="border border-slate-700 ...">Michigan</td>
          <td className="border border-slate-700 ...">Detroit</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
