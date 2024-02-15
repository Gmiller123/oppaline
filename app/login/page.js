"use client";

import React from "react";
import { Form, Formik, Field } from "formik";
import Link from "next/link";
// import { Checkbox } from "@/components/ui/checkbox";
import Checkbox from "@mui/material/Checkbox";

import Image from "next/image";
import FormPassword from "./password";
import FormErrorMessage from "./register/formerrormessage";
import { formValidation } from "./formvalidation";

const LoginPage = () => {
  return (
    <div className="bg-[#F2F4F7]">
      <div className="max-w-[1390px] mx-auto px-5 pb-[100px] pt-[20px]">
        <h1 className=" text-center text-[22px] md::text-[32px] font-bold mb-[20px]">
          LOGIN OR CREATE AN ACCOUNT
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:divide-x-2 max-sm:divide-y-2 bg-white p-[20px] md:p-[35px] lg:p-[50px]">
          <Formik
            initialValues={{
              email: "",
              password: "",
              checkbox: false,
            }}
            validationSchema={formValidation}
            onSubmit={(values, actions) => {
              console.log(values);
            }}
          >
            <Form className="lg:pr-10 max-sm:pb-10">
              <h2 className=" text-[18px] lg:text-[24px] font-bold mb-5 md:mb-[29px]">
                LOGIN
              </h2>
              <div className=" flex flex-col gap-[15px]  text-sm md:text-base">
                <span className="shadowContainer flex flex-col gap-1">
                  <label className="" htmlFor="email address">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className=" py-4 border outline-none indent-3 rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
                  />
                  <FormErrorMessage name="email" />
                </span>

                <FormPassword />
                <FormErrorMessage name="password" />

                <span className=" flex items-center justify-between">
                  <div className="flex items-center space-x-1 lg:space-x-2">
                    <Checkbox
                      className="p-0 "
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
                      className="text-[12px] md:text-sm text-[#58667E] font-medium leading-none"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/components/homepage/header/login/resetpassword"
                    className="text-[#667085] text-[12px] md:text-sm hover:underline active:text-black"
                  >
                    Forget your password?
                  </Link>
                </span>
                <button
                  type="submit"
                  className=" bg-[#6E0586] hover:bg-transparent hover:text-[#6E0586] hover:border-[#6E6E0586] font-bold border active:scale-95 text-white text-[12px] md:text-sm py-3 rounded-md"
                >
                  LOGIN TO MY ACCOUNT
                </button>

                <h4 className="text-center font-bold optionforlogin text-[#475467] text-[12px] md:text-sm">
                  OR
                </h4>

                <Link
                  href="#"
                  className="active:scale-95 flex items-center justify-center gap-1 border border-[#D0D5DD] py-3 text-[12px] md:text-sm"
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
                  className="active:scale-95 flex items-center justify-center gap-1 border border-[#D0D5DD] py-3 text-[12px] md:text-sm"
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
              </div>
            </Form>
          </Formik>

          <div className=" flex flex-col gap-[29px] lg:pl-10 max-sm:pt-10">
            <h2 className=" text-[22px] md:text-[24px] text-[#1D2939] font-bold">
              NEW CUSTOMERS
            </h2>
            <p className=" text-sm md:text-[16px] text-[#667085] font-semibold">
              It&apos;s easy to sign up and you can benefit straight away.
            </p>
            <ul className=" text-[#667085] text-[12px] md:text-sm space-y-[13px]">
              <li className=" flex items-center gap-2">
                {" "}
                <Image
                  width={24}
                  height={24}
                  src="/list.svg"
                  alt="list logos"
                  className=" md:size-6 size-4"
                />
                Check your Order history
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <Image
                  width={24}
                  src="/Location.svg"
                  height={24}
                  alt="list logos"
                  className=" md:size-6 size-4"
                />
                Save Multiple Addresses
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <Image
                  width={24}
                  height={24}
                  src="/inbox.svg"
                  alt="list logos"
                  className=" md:size-6 size-4"
                />
                Track your orders
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <Image
                  width={24}
                  height={24}
                  src="/time.svg"
                  alt="list logos"
                  className=" md:size-6 size-4"
                />
                Check out faster
              </li>
            </ul>
            <Link
              href="/components/homepage/header/login/register"
              className=" text-center active:scale-95 font-medium border rounded-md hover:bg-[#6E0586] hover:text-white text-semibold border-[#6E0586] py-3 bg-transparent text-[12px] md:text-sm"
            >
              CREATE MY ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
