import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Schema from "../service/FormSchema";


const useEdit = () => {

  const preloadedValues = {
      id: localStorage.getItem('id'),
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      gender: localStorage.getItem('gender'),
      date: localStorage.getItem('DOB'),
      email: localStorage.getItem('email'),
      phone: localStorage.getItem('phoneNumber')
  }
  
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(Schema),
defaultValues: preloadedValues})

  const navigate = useNavigate()
 
  const onUpdate = (e) => {
    let index = JSON.parse(localStorage.getItem('id')) - 1
    let data = JSON.parse(localStorage.getItem('employees')) 
    data[index] = {
      e_firstName : e.firstName,
      e_lastName : e.lastName,
      e_gender : e.gender,
      e_phone : e.phone,
      e_date : e.date,
      e_email : e.email, 
    }
    localStorage.setItem('employees', JSON.stringify(data))
    navigate('/')
  }

  const editCancel = () => {
    navigate('/')
  }

  return [register, handleSubmit, errors, onUpdate, editCancel]

}

export default useEdit