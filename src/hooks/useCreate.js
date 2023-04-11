import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Schema from "../service/FormSchema";
import { addUser } from "../UserReducer";
import { useSelector, useDispatch } from "react-redux";

const useCreate = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(Schema)})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const onSubmit = (e) => {
        
        const employeeObj = {
            id : users.length + 1,
            e_firstName : e.firstName,
            e_lastName : e.lastName,
            e_gender : e.gender,
            e_phone : e.phone,
            e_date : e.date,
            e_email : e.email,
        }     
        
        dispatch(addUser(employeeObj))
        setTimeout(() => {
        navigate('/')
        }, 500)
    }

   
    return [register, handleSubmit, errors, onSubmit]

}

export default useCreate




  