import * as yup from "yup";

export const formValidation = yup.object({
  fname: yup
    .string()
    .required("First Name is Required!")
    .matches(/^[^\d]+$/, "First should not contain numbers")
    .min(3, "First Name should be more than 2 characters"),

  lname: yup
    .string()
    .required("Last Name is Required!")
    .matches(/^[^\d]+$/, "Last Name should not contain numbers")
    .min(3, "Last Name should be more than 2 characters"),
  dateofbirth: yup
    .date("Invalid date of birth!")
    .max(new Date(), "Date of birth must be in the past")
    .required("Date of birth is required"),

  email: yup
    .string()
    .required("email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be less than 20 characters"),

  confirmpassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be less than 20 characters")
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
