import React from "react";

const Table: React.FC = () => {
  return (
    <form>
      <table>
        <tr>
          <td>
            <label htmlFor="name">Name</label>
          </td>
          <td>
            <input
              className="border-1 rounded border-slate-300"
              type="text"
              id="name"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="email">Email</label>
          </td>
          <td>
            <input
              className="border-1 rounded border-slate-300"
              type="email"
              id="email"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="telnum">Tel No.</label>
          </td>
          <td>
            <input
              className="border-1 rounded border-slate-300"
              type="telnum"
              id="telnum"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="Roll No.">Roll No.</label>
          </td>
          <td>
            <input
              className="border-1 rounded border-slate-300"
              type="number"
              id="rollno"
            />
          </td>
        </tr>
      </table>
      <input
        className="m-2 mt-4 border-1 border-sky-300 rounded-md p-1 hover:bg-sky-400"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
export default Table;
