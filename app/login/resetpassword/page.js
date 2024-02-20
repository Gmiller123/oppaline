"use client";
import React from "react";
import { Formik, Field, Form } from "formik";
import Link from "next/link";
import { formValidation } from "../formvalidation";
import FormErrorMessage from "../register/formerrormessage";

const ResetPassword = () => {
  return (
    <div className="bg-[#F2F4F7]">
      <div className=" max-w-[1390px] mx-auto px-5 pt-5 pb-[100px]">
        <h1 className=" mb-5 text-[32px] font-bold text-center">
          Forgot Password?
        </h1>

        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={formValidation}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));

            actions.resetForm();
          }}
        >
          <Form className="max-w-[664px] mx-auto bg-white p-[50px] flex flex-col gap-5">
            <h2 className=" text-base text-[#667085] text-center">
              Dont worry, we all do it!
            </h2>
            <h2 className="text-base text-[#667085] text-center">
              PLEASE ENTER YOUR EMAIL ADDRESS BELOW TO RECEIVE A PASSWORD RESET
              LINK.
            </h2>

            <div className=" flex flex-col gap-2">
              <label className=" text-sm" htmlFor="email address">
                Email Address
              </label>
              <Field
                name="email"
                type="email"
                className=" py-4 border outline-none indent-3 rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
                placeholder="Enter your email address"
              />
              <FormErrorMessage name="email" />
            </div>

            <button
              type="submit"
              className=" bg-[#6E0586] hover:bg-transparent hover:text-[#6E0586] hover:border-[#6E6E0586] border active:scale-95 text-white text-base py-3 rounded-md"
            >
              RESET MY PASSWORD
            </button>

            <p className=" text-sm text-center">
              Already have an account?{" "}
              <Link className=" hover:underline text-[#6E0586]" href="/login">
                Login
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
