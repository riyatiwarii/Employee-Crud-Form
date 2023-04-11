import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import Schema from "../service/FormSchema";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../UserReducer";


const useEdit = () => {
  const {id} = useParams()
  const users = useSelector((state) => state.users)
  const existingUser = users[id-1]

  const preloadedValues = {
      id: existingUser.id,
      firstName: existingUser.e_firstName,
      lastName: existingUser.e_lastName,
      gender: existingUser.e_gender,
      date: existingUser.e_date,
      email: existingUser.e_email,
      phone: existingUser.e_phone
  }
  
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(Schema),
defaultValues: preloadedValues})

  const navigate = useNavigate()

  const editCancel = () => {
    navigate('/')
  }

    const dispatch = useDispatch()
    const onUpdate = (e) => {
    dispatch(updateUser({
      id: e.id,
      e_firstName : e.firstName,
      e_lastName : e.lastName,
      e_gender : e.gender,
      e_phone : e.phone,
      e_date : e.date,
      e_email : e.email, 
    }))
    navigate('/')
  }

  return [register, handleSubmit, errors, onUpdate, editCancel]

}

export default useEdit