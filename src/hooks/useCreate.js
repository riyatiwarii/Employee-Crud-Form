import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Schema from "../service/FormSchema";
import { useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA.json"

const getLocalStorageData = () => {
    const data = localStorage.getItem('employees');
    if(data){
        return JSON.parse(data)
    }else{
        return MOCK_DATA
    }
}

const useCreate = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(Schema)})
    const navigate = useNavigate()

    const [employeeList, setEmployeeList] = useState(getLocalStorageData());
    console.log(employeeList);
    const onSubmit = (e) => {
        
        const employeeObj = {
            e_firstName : e.firstName,
            e_lastName : e.lastName,
            e_gender : e.gender,
            e_phone : e.phone,
            e_date : e.date,
            e_email : e.email,
        }        
        
        setEmployeeList([...employeeList,employeeObj]);

        console.log(employeeList);
        setTimeout(() => {
            navigate('/')
        }, 500)
        
    }

    
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employeeList))
       
    },[employeeList])

    // console.log(employeeList);
   
    return [register, handleSubmit, errors, onSubmit, employeeList]

}

export default useCreate




  