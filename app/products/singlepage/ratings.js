import React from "react";
import { FaStar } from "react-icons/fa6";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Ratings = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#890DAB",
    },
    "& .MuiRating-iconHover": {
      color: "#890DAB",
    },
  });
  return (
    <>
      <div className="flex md:flex-row flex-col md:divide-x-2 md:divide-y-0 divide-y-2 border-b pb-5 mt-10">
        <div className="flex flex-col justify-between space-y-[10px] md:pr-10 md:pb-0 pb-6">
          <div>
            <div className=" flex items-center gap-3 mb-3">
              <h2 className="text-lg font-bold">4.5</h2>
              <span>
                <div className="bg-[#890DAB] flex items-center gap-2 px-3 py-2">
                  <FaStar className="text-[#FCEBFF] size-6" />
                  <h4 className=" text-[#FCEBFF] text-lg">Top Rated</h4>
                </div>
              </span>
            </div>

            <Box
              sx={{
                "& > legend": { mt: 0 },
              }}
              className="flex flex-col space-y-[10px]"
            >
              <StyledRating
                className="space-x-1"
                name="customized-color"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FaStar fontSize="22px" />}
                emptyIcon={<FaStar fontSize="22px" />}
              />
              <Typography
                className=" text-[#475467] text-[22px] font-bold"
                component="legend"
              >
                291 ratings
              </Typography>
            </Box>
          </div>
          <Link className=" text-[#475467] text-sm" href="">
            Click to rate
          </Link>
        </div>
        <div className="md:pl-10 md:pt-0 pt-6">
          <h2 className=" text-[#475467] text-[22px] mb-[10px] font-bold">
            Overall rating
          </h2>

          <div className=" space-y-[10px]">
            <div>
              <div className="flex items-center gap-3">
                <h4 className=" text-lg">291</h4>
                <Box
                  sx={{
                    "& > legend": { mt: 0 },
                  }}
                  className="flex space-y-[10px]"
                >
                  <StyledRating
                    className="space-x-1"
                    name="customized-color"
                    defaultValue={5}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FaStar fontSize="22px" />}
                    emptyIcon={<FaStar fontSize="22px" />}
                  />
                </Box>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h4 className=" text-lg">156</h4>
                <Box
                  sx={{
                    "& > legend": { mt: 0 },
                  }}
                  className="flex space-y-[10px]"
                >
                  <StyledRating
                    className="space-x-1"
                    name="customized-color"
                    defaultValue={4}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FaStar fontSize="22px" />}
                    emptyIcon={<FaStar fontSize="22px" />}
                  />
                </Box>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h4 className=" text-lg">125</h4>
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
              </div>
            </div>
            <div>
              <div className="flex md:justify-between items-center gap-3">
                <h4 className=" text-lg">16</h4>
                <Box
                  sx={{
                    "& > legend": { mt: 0 },
                  }}
                  className="flex space-y-[10px]"
                >
                  <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    className="space-x-1"
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FaStar fontSize="22px" />}
                    emptyIcon={<FaStar fontSize="22px" />}
                  />
                </Box>
              </div>
            </div>
            <div>
              <div className="flex md:justify-between items-center gap-3">
                <h4 className=" text-lg">8</h4>
                <Box
                  sx={{
                    "& > legend": { mt: 0 },
                  }}
                  className="flex space-y-[10px]"
                >
                  <StyledRating
                    className="space-x-1"
                    name="customized-color"
                    defaultValue={1}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FaStar fontSize="22px" />}
                    emptyIcon={<FaStar fontSize="22px" />}
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
