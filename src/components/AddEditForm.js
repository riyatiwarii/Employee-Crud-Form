import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import Schema from "../service/FormSchema";
import { addUser, updateUser } from "../UserReducer";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { genderOptions, languageOptions} from "../config/constants";
import useLangTranslation from "../hooks/useLangTranslation";

const AddEditForm = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users[id-1]
  const preloadedValues = existingUser ? {
    id: existingUser.id,
    firstName: existingUser.e_firstName,
    lastName: existingUser.e_lastName,
    gender: existingUser.e_gender,
    date: existingUser.e_date,
    email: existingUser.e_email,
    phone: existingUser.e_phone
  } : {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t, handleChangeLng] = useLangTranslation()
  const defaultValues = id ? preloadedValues : {};

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const onSubmit = (e) => {
    const employeeObj = {
      id: id ? e.id : users.length + 1,
      e_firstName: e.firstName,
      e_lastName: e.lastName,
      e_gender: e.gender,
      e_phone: e.phone,
      e_date: e.date,
      e_email: e.email,
    };

    if (id) {
        dispatch(updateUser(employeeObj));
    } else{
        console.log(id);
        dispatch(addUser(employeeObj));
    }

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
    <div className="py-6 theme-purple">
    <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
    <div className="d-flex align-items-center bg-gradient-to-r from-skin-fill to-skin-hue lg:block lg:w-1/2 ">
      <div className="text-black text-center px-3 py-36 p-md-5 mx-md-4">
        <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
          <span className="block">Just One Step Away!</span>
          <span className="block">Add Shine to Your Goals.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-skin-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? Dicta facilis sint aliquid ipsum atque?</p>
      </div>
    </div>
      <div className="w-full p-8 lg:w-1/2">
      <div className="text-center mb-10 text-skin-fill">
          <h1 className="font-bold text-3xl ">{id ? "UPDATE" : "REGISTER"}</h1>
          <p>{id ? "Enter your information to update" : "Enter your information to register"}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-36">
            <label
              htmlFor="language"
              className="label-style"
            >
              Language
            </label>
            <select
              name="language"
              className="bg-gray-50 border border-gray-300 text-form-base text-sm block w-full p-1 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              {...register("language")}
              onClick={(e) => handleChangeLng(e)} 
              >
              <option value="">Select language</option>
              {languageOptions.map((option, index) => {
                return (
                  <option key={index} value={option.value}>{option.text}</option>
                )
              })}
            </select>
      </div>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="label-style"
          >
            {t("firstName")}
          </label>
          <input
            type="text"
            id="firstName"
            className="input-style"
            placeholder="First Name"
            required=""
            {...register("firstName")}
          />
          {errors.firstName && (<span className="text-red-700">{errors.firstName.message}</span>) }
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="label-style"
          >
            {t("lastName")}
          </label>
          <input
            type="text"
            id="lastName"
            className="input-style"
            placeholder="Last Name"
            required=""
            {...register("lastName")}
          />
          {errors.lastName && (<span className="text-red-700">{errors.lastName.message}</span>) }
        </div>
        <div>
          <label
            htmlFor="gender"
            className="label-style"
          >
            Gender
          </label>
          <select
            name="gender"
            className="input-style"
            required=""
            {...register("gender")}>
            <option value="">Select gender</option>
            {genderOptions.map((option, index) => {
              return (
                <option key={index} value={option.value}>{option.text}</option>
              )
            })}
          </select>
          {errors.gender && (<span className="text-red-700">{errors.gender.message}</span>) }
        </div>
        <div>
          <label
            htmlFor="phone"
            className="label-style"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="input-style"
            placeholder="+91"
            required=""
            {...register("phone")}
          />
          {errors.phone && (<span className="text-red-700">{errors.phone.message}</span>) }
        </div>
        <div>
          <label
            htmlFor="date"
            className="label-style"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="date"
            className="input-style"
            placeholder="flowbite.com"
            required=""
            {...register("date")}
          />
          {errors.date && (<span className="text-red-700">{errors.date.message}</span>) }
        </div>
        <div>
        <label
          htmlFor="email"
          className="label-style"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="input-style"
          placeholder="abc@example.com"
          required=""
          {...register("email")}
        />
        {errors.email && (<span className="text-red-700">{errors.email.message}</span>) }
      </div>      
      </div>
        <div className="flex flex-col gap-4 w-40">
        <button type="submit" className="text-white bg-skin-button-accent hover:bg-skin-button-accent-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{id ? "Update" : "Add"} </button>
        <button className="text-white bg-skin-button-accent hover:bg-skin-button-accent-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/">&laquo; Previous page</Link></button>
        </div>
      </form>
      </div>
    </div>
    </div>
  </>
  );
};


export default AddEditForm