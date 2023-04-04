import RegisteredItems from "./RegisteredItem"
import { Link } from "react-router-dom"

const RegisterationTable = () => {

    return (
      <div className="bg-white flex flex-col items-center gap-4 justify-center mt-4">
        <div className="flex items-center justify-center gap-12">
        <button className="text-white bg-skin-button-accent hover:bg-skin-button-accent-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/register">Add Employee</Link></button>
        <h1 className="subpixel-antialiased lg:text-2xl text-lg font-semibold">Employee Registeration Data</h1>
        </div>
        <table className="border-collapse lg:w-4/5 md:w-full">
        <thead className="bg-gray-800 text-slate-200">
          <tr>
            <th className="p-3 font-bold uppercase border border-gray-300 hidden md:table-cell lg:table-cell">
              ID
            </th>
            <th className="p-3 font-bold uppercase border border-gray-300 hidden md:table-cell lg:table-cell">
              First Name
            </th>
            <th className="p-3 font-bold uppercase border border-gray-300 hidden md:table-cell lg:table-cell">
              Last Name
            </th>
            <th className="p-3 font-bold uppercase border border-gray-300 hidden md:table-cell lg:table-cell">
              Date of Birth
            </th>
            <th className="p-3 font-bold uppercase border border-gray-300 hidden md:table-cell lg:table-cell">
              Email ID
            </th>
            <th className="p-3 font-bold uppercase border border-gray-300 hidden md:table-cell lg:table-cell">
              Contact
            </th>
            <th className="p-3 font-bold uppercase border border-gray-300 hidden md:table-cell lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <RegisteredItems/>     
        </tbody>
        </table>
      </div>
    )
}

export default RegisterationTable