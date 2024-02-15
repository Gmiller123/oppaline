import React from "react";
import { FaStar } from "react-icons/fa6";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Image from "next/image";

const Feedback = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#890DAB",
    },
    "& .MuiRating-iconHover": {
      color: "#890DAB",
    },
  });
  return (
    <div>
      <div className="py-5 space-y-5 border-b">
        <div>
          <span className=" flex items-center gap-5">
            <Image width={52} height={52} src="/boy-avatar.svg" alt="avatar" />
            <span className=" space-y-[8px]">
              <span className=" flex items-center gap-[10px]">
                <h3 className=" font-bold">Aashish G.</h3>
                <Box
                  sx={{
                    "& > legend": { mt: 0 },
                  }}
                  className="flex space-y-[10px]"
                >
                  <StyledRating
                    className="space-x-1"
                    name="customized-color"
                    defaultValue={3}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FaStar fontSize="22px" />}
                    emptyIcon={<FaStar fontSize="22px" />}
                  />
                </Box>
              </span>
              <p className=" text-[#000] text-[12px]">
                et deserunt elit do laboris ea nulla ea magna Lorem voluptate
                reprehenderit velit id irure non exercitation excepteur magna
                eiusmod nisi ut ex{" "}
              </p>
            </span>
          </span>
        </div>
        <div>
          <span className=" flex items-center gap-[20px]">
            <Image width={52} height={52} src="/girl-avatar.svg" alt="avatar" />
            <span className=" space-y-[8px]">
              <span className=" flex items-center gap-[10px]">
                <h3 className=" font-bold">Aashish G.</h3>
                <Box
                  sx={{
                    "& > legend": { mt: 0 },
                  }}
                  className="flex space-y-[10px]"
                >
                  <StyledRating
                    className="space-x-1"
                    name="customized-color"
                    defaultValue={3}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FaStar fontSize="22px" />}
                    emptyIcon={<FaStar fontSize="22px" />}
                  />
                </Box>
              </span>
              <p className=" text-[#000] text-[12px]">
                et deserunt elit do laboris ea nulla ea magna Lorem voluptate
                reprehender
              </p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
