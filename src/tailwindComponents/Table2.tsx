import React from "react";

const Table: React.FC = () => {
  return (
    <div className="border-1 p-5 h-screen bg-gray-100">
      <h1 className="text-xl mb-2">Your orders</h1>
      
      <div className="overflow-auto rounded-lg shadow">
        <table className="border-1 w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">No.</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><a className="font-bold text-blue-500 hover:underline" href="#">1001</a></td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span></td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
            </tr>
            <tr>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><a className="font-bold text-blue-500 hover:underline" href="#">1002</a></td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span></td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
            </tr>
            <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><a className="font-bold text-blue-500 hover:underline" href="#">1003</a></td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span></td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
