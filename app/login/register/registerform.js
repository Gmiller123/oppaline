"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Checkbox } from "@/components/ui/checkbox";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import Link from "next/link";

import FormPassword from "../password";
import { formValidation } from "../formvalidation";
import FormErrorMessage from "./formerrormessage";

const RegisterForm = () => {
  return (
    <div>
      <div className="bg-[#F2F4F7]">
        <div className=" max-w-[1390px] mx-auto px-5 pb-[100px] pt-[20px]">
          <h1 className=" text-[#101828] text-[22px] md:text-[32px] font-bold text-center mb-5">
            CREATE AN ACCOUNT
          </h1>

          <Formik
            validationSchema={formValidation}
            initialValues={{
              fname: "",
              lname: "",
              dateofbirth: "",
              email: "",
              password: "",
              confirmpassword: "",
              terms: "",
            }}
            onSubmit={(values, actions) => {
              alert("form submitted!!", values);

              actions.resetForm();
            }}
          >
            <Form className="max-w-[950px] mx-auto bg-white p-[20px] md:p-[50px] space-y-[35px]">
              <div className="space-y-[15px]">
                <h2 className=" text-[#1D2939] text-lg md:text-[24px] font-bold">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] text-sm md:text-base">
                  <span className=" flex flex-col gap-1">
                    <label htmlFor="First Name">First Name</label>
                    <Field
                      name="fname"
                      type="text"
                      className=" py-4 border outline-none indent-3 rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
                      placeholder="Enter full name"
                    />
                    <FormErrorMessage name="fname" />
                  </span>

                  <span className=" flex flex-col gap-1">
                    <label htmlFor="Last Name">Last Name</label>
                    <Field
                      type="text"
                      name="lname"
                      placeholder="Enter your last name"
                      className=" py-4 border outline-none indent-3 rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
                    />
                    <FormErrorMessage name="lname" />
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <label className="text-sm md:text-base" htmlFor="calender">
                    Date of Birth
                  </label>
                  <Field
                    type="date"
                    name="dateofbirth"
                    className="text-[#000]/40 pr-5 py-4 border outline-none text-sm md:text-base indent-2  rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
                  />
                  <FormErrorMessage name="dateofbirth" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    className="p-0"
                    defaultChecked={false}
                    sx={{
                      color: "#6E0586",
                      "&.Mui-checked": {
                        color: "#6E0586",
                      },
                    }}
                  />
                  <label
                    htmlFor="terms"
                    className="text-[12px] md:text-[13px] text-[#58667E] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subscribe to Opaline Shop emails for exclusive offers,
                    rewards and more
                  </label>
                </div>
              </div>

              <div className=" space-y-[15px]">
                <h2 className=" text-[#1D2939] text-lg  md:text-[24px] font-bold">
                  SIGN-IN INFORMATION
                </h2>
                <span className=" flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm md:text-base">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className=" py-4 border outline-none indent-3 rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
                  />
                  <FormErrorMessage name="email" />
                </span>

                <FormPassword />
                <FormErrorMessage name="password" />

                <span className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base"
                    htmlFor="confirmpassword"
                  >
                    Confirm Password
                  </label>
                  <Field
                    placeholder="Re-enter your password"
                    name="confirmpassword"
                    className=" py-4 border outline-none indent-3 rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
                  />
                  <FormErrorMessage name="confirmpassword" />
                </span>
                <div className=" space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      className="p-0"
                      defaultChecked={false}
                      sx={{
                        color: "#6E0586",
                        "&.Mui-checked": {
                          color: "#6E0586",
                        },
                      }}
                    />
                    <label
                      htmlFor="terms"
                      className="text-[12px] md:text-[13px] text-[#58667E] font-medium leading-none "
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex items-start md:items-center space-x-2 pb-[15px]">
                    <Checkbox
                      className="p-0"
                      required
                      defaultChecked={false}
                      sx={{
                        color: "#6E0586",
                        "&.Mui-checked": {
                          color: "#6E0586",
                        },
                      }}
                    />
                    <label
                      htmlFor="terms"
                      className=" text-[12px] md:text-[13px] text-[#58667E] font-medium leading-none"
                    >
                      By clicking Create an Account, you agree to OpalineShop’s
                      privacy policy, terms & conditions and cookie policy
                    </label>
                  </div>

                  <button className=" py-3 w-full font-bold border rounded-md bg-[#6E0586] text-white text-semibold border-[#6E0586] active:scale-95 hover:bg-transparent hover:text-[#6E0586] text-sm">
                    CREATE MY ACCOUNT
                  </button>
                </div>

                <h4 className="text-center font-bold optionforlogin text-[#475467] text-sm py-[15px]">
                  OR
                </h4>

                <Link
                  href=""
                  className=" w-full active:scale-95 flex items-center justify-center gap-1 border border-[#D0D5DD] py-3 text-sm"
                >
                  {" "}
                  <Image
                    width={25}
                    height={25}
                    src="/google.svg"
                    alt="google logo"
                  />{" "}
                  Continue with Google
                </Link>

                <Link
                  href="#"
                  className="w-full active:scale-95 flex items-center justify-center gap-1 border border-[#D0D5DD] py-3 text-sm"
                >
                  {" "}
                  <Image
                    width={25}
                    height={25}
                    src="/Facebook.svg"
                    alt="google logo"
                  />{" "}
                  Continue with Facebook
                </Link>

                <p className=" text-sm text-center mt-10">
                  Already have an account?{" "}
                  <Link
                    className=" text-[#6E0586] hover:underline"
                    href="/login/register"
                  >
                    login
                  </Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
