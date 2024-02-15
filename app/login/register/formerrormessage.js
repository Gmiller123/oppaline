import React from "react";

import { ErrorMessage } from "formik";

const FormErrorMessage = ({ name }) => {
  return (
    <div className=" text-red-500 font-bold ">
      <ErrorMessage name={name} />
    </div>
  );
};

export default FormErrorMessage;
