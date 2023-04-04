import * as yup from "yup";

const Schema = yup.object().shape({
    firstName : yup.string().required('First name is required.'),
    lastName : yup.string().required('Last name is required.'),
    gender : yup.string().required('Gender is required.'),
    email: yup.string().email("A valid email address is required").required("Email address is required"),
    phone : yup.string().matches(/^(?:\+91|0)?[6789]\d{9}$/, {
        message: "Invalid Phone number",
        excludeEmptyString: false,
      }).required("This field is required."),
    date : yup.string().required('Date of birth is required.'),
})

export default Schema