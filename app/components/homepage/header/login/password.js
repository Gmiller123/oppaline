import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Field } from "formik";

const FormPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email address">Password</label>
      <span className="flex relative">
        <Field
          type={passwordVisible ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          className="w-full py-4 border outline-none indent-3 rounded-md focus:ring-1 focus:ring-[#6E0586] focus:ring-offset focus:shadow-md focus:shadow-[#6E0586]"
        />

        <button type="submit" className="" onClick={togglePasswordVisiblity}>
          {" "}
          {passwordVisible ? (
            <VisibilityOutlinedIcon className="absolute top-[50%] translate-y-[-50%] right-4 text-[#000]/30" />
          ) : (
            <VisibilityOffOutlinedIcon className="absolute top-[50%] translate-y-[-50%] right-4 text-[#000]/30" />
          )}
        </button>
      </span>
    </div>
  );
};

export default FormPassword;
