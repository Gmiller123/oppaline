import React from "react";
import Image from "next/image";

const ContactUS = () => {
  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full h-full px-5 md:px-8 lg:px-0">
      <div className=" max-w-[1350px] mx-auto relative w-full h-full">
        <Image
          width={1500}
          height={1800}
          src="/contact-bg.png"
          alt="contactus-bg"
          className="w-full h-[350px] object-cover"
        />
        <div className=" max-w-[800px] w-full flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 *:text-white">
          <h1 className=" text-lg md:text-[24px] md:leading-[36px] mb-4 text-center">
            Continuous, unrestricted shopping experience available through 24/7
            phone call support for an enhanced customer journey.
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative">
              <span className="text-black top-[50%] translate-y-[-50%] absolute">
                <select
                  className="pr-7 pl-4 bg-transparent outline-none border-none text-[14px]"
                  id="mySelect"
                  name="mySelect"
                  required
                >
                  <option className="" value="" selected>
                    +977
                  </option>
                  <option value="option1">+356</option>
                  <option value="option2">+256</option>
                  <option value="option3">+758</option>
                </select>

                <Image
                  width={9}
                  height={12}
                  src="/homepage/nepal-flag.svg"
                  alt="nepal flag"
                  className=" absolute top-[45%] translate-y-[-50%] left-[62px]"
                />
              </span>
              <input
                className="py-3 outline-none text-[#000] pl-28 w-[250px] placeholder:text-sm rounded-md"
                type="text"
                placeholder="Phone Number*"
              />
            </div>
            <button className="bg-white text-black text-sm px-4 py-3 rounded-md">
              START CALL NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
