import { useEffect, useState } from "react"
import MOCK_DATA from "../MOCK_DATA.json"
import { deleteUser } from "../UserReducer";
import { useDispatch } from "react-redux";

// const useItemAction = () => {
//   const [employeeData, setEmployeeData] = useState([])
  
//   useEffect(() => {
//     getEmployeeData();
//   }, [])

//   const getEmployeeData = () => {
//     let data = localStorage.getItem('employees');
//     if (!data) {
//       localStorage.setItem('employees', JSON.stringify(MOCK_DATA));
//       data = JSON.stringify(MOCK_DATA);
//     }
//     setEmployeeData(JSON.parse(data));
//   }

//   const deleteEmployee = (index) => {
//     let data = JSON.parse(localStorage.getItem('employees'));
//     let filteredData = data.filter(employee => data.indexOf(employee) !== index);
//     localStorage.setItem('employees', JSON.stringify(filteredData));
//     setEmployeeData(filteredData);
    
//   }

//   const setDataToStorage = (id, firstName, lastName, gender, DOB, email, phoneNumber) => {
//     localStorage.setItem('id', id);
//     localStorage.setItem('firstName', firstName);
//     localStorage.setItem('lastName', lastName);
//     localStorage.setItem('gender', gender);
//     localStorage.setItem('DOB', DOB);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phoneNumber', phoneNumber);
//   }

//   return [employeeData, deleteEmployee, setDataToStorage, getEmployeeData]
// }

const useItemAction = () => {
  const [employeeData, setEmployeeData] = useState([])
  
  useEffect(() => {
    getEmployeeData();
  }, [])

  const getEmployeeData = () => {
    let data = localStorage.getItem('employees');
    if (!data) {
      localStorage.setItem('employees', JSON.stringify(MOCK_DATA));
      data = JSON.stringify(MOCK_DATA);
    }
    setEmployeeData(JSON.parse(data));
  }

  const dispatch = useDispatch();
  const deleteEmployee = (index) => {
    dispatch(deleteUser(index))
    
  }

  const setDataToStorage = (id, firstName, lastName, gender, DOB, email, phoneNumber) => {
    localStorage.setItem('id', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('gender', gender);
    localStorage.setItem('DOB', DOB);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber);
  }

  return [employeeData, deleteEmployee, setDataToStorage, getEmployeeData]
}

export default useItemAction
