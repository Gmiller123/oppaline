import React from "react";
import Checkbox from "@mui/material/Checkbox";

const ReviewForm = () => {
  const label = { inputProps: { "aria-label": "terms and conditions" } };

  return (
    <div>
      <div className="mb-[111px]">
        <p className=" text-[12px] text-[#000] py-5">
          You will be able to receive emails in connection with this review (eg
          if others comment on your review). All emails contain the option to
          unsubscribe. We can use the text and star rating from your review in
          other marketing.
        </p>

        <form className=" space-y-5" action="">
          <span className=" flex flex-col gap-1.5">
            <label className=" text-sm font-medium" htmlFor="review title">
              Review Title
            </label>
            <input
              type="text"
              placeholder="Example: Easy to use"
              className=" placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
            />
          </span>
          <h4 className=" text-[#475467] text-base font-bold">
            Would you recommend this product to a friend?
          </h4>

          <span className=" flex flex-col gap-1.5">
            <label className=" text-sm font-medium" htmlFor="review title">
              Review Body
            </label>
            <textarea
              rows={5}
              type="textarea"
              placeholder="Example: Easy to use"
              className=" resize-none placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
            />
          </span>

          <div className=" grid grid-cols-4 gap-5">
            <div className=" md:col-span-1 col-span-5">
              <span className=" flex flex-col gap-1.5">
                <label className=" text-sm font-medium" htmlFor="review title">
                  Nickname
                </label>
                <input
                  type="text"
                  placeholder="Example: Bob28"
                  className=" placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
                />
              </span>
            </div>
            <div className=" md:col-span-1 col-span-5">
              <span className=" flex flex-col gap-1.5">
                <label
                  className=" text-sm font-medium whitespace-nowrap"
                  htmlFor="review title"
                >
                  Email Address (will not be published)
                </label>
                <input
                  type="text"
                  placeholder="Example: you@email.com"
                  className=" placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
                />
              </span>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <Checkbox
              className="p-0"
              required
              defaultChecked={false}
              {...label}
              sx={{
                color: "#6E0586",
                "&.Mui-checked": {
                  color: "#6E0586",
                },
              }}
            />

            <p className="text-[12px]">I accept terms & conditions</p>
          </div>
          <p className=" text-[12px] max-w-[650px]">
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </p>
          <button className=" bg-[#6E0586] rounded-[6px] text-white p-[10px] text-base">
            Submit product review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
