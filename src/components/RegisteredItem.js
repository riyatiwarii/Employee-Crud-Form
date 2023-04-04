import { Link } from "react-router-dom"
import useItemAction from '../hooks/useItemAction';

const RegisteredItems = () => {

  const [employeeData, deleteEmployee, setDataToStorage] = useItemAction()

  return (
    employeeData.map((item, index) => {
      return (
        <tr key= {index} className="bg-white md:hover:bg-gray-100 md:table-row md:flex-row md:flex-no-wrap md:mb-0 lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0
  ">
    <td className="w-full md:w-auto lg:w-auto p-3 text-gray-800 text-center border border-b block md:table-cell lg:table-cell relative md:static lg:static">
      <span className="lg:hidden md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
        ID
      </span>
      {index+1}
    </td>
    <td className="w-full md:w-auto lg:w-auto p-3 text-gray-800 text-center border border-b block    md:table-cell lg:table-cell relative md:static lg:static">
      <span className="lg:hidden md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
      First Name
      </span>
      {item.e_firstName} 
    </td>
    <td className="w-full md:w-auto lg:w-auto p-3 text-gray-800 text-center border border-b block    md:table-cell lg:table-cell relative md:static lg:static">
      <span className="lg:hidden md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
      Last Name
      </span>
      {item.e_lastName}
    </td>
    <td className="w-full md:w-auto lg:w-auto p-3 text-gray-800 text-center border border-b block    md:table-cell lg:table-cell relative md:static lg:static">
      <span className="lg:hidden md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
      Date of Birth
      </span>
      {item.e_date}
    </td>
    <td className="w-full md:w-auto lg:w-auto p-3 text-gray-800 text-center border border-b block    md:table-cell lg:table-cell relative md:static lg:static">
      <span className="lg:hidden md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
      Email ID
      </span>
      {item.e_email}
    </td>
    <td className="w-full md:w-auto lg:w-auto p-3 text-gray-800 text-center border border-b block    md:table-cell lg:table-cell relative md:static lg:static">
      <span className="lg:hidden md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
      Contact
      </span>
      {item.e_phone}
    </td> 
    <td className="w-full md:w-auto lg:w-auto p-3 text-gray-800 text-center border border-b block    md:table-cell lg:table-cell relative md:static lg:static">
      <span className="lg:hidden md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
        Actions
      </span>
      <td className="p-3 px-2 flex justify-center">
        <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() =>
         {
          setDataToStorage(index+1, item.e_firstName, item.e_lastName, item.e_gender, item.e_date, item.e_email, item.e_phone)
         }} ><Link to="/edit">Edit</Link></button>
        <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => {
        if(window.confirm('Are you sure to delete data?')){
          deleteEmployee(index)
        }}} >Delete</button>
      </td>
    </td>
      </tr>
      )
    })
  )

}

export default RegisteredItems