import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaGlobeAfrica,
  FaRegUserCircle,
} from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  return (
    <>
      <div className=" lg:max-w-[1350px] md:max-w-[786pxs] mx-auto px-5 md:px-8 lg:px-0">
        <div className=" flex lg:flex-row flex-col lg:gap-0 gap-1 items-center justify-between *:text-[#7A0999] py-3">
          <div className=" flex flex-row items-center">
            <h3 className=" font-bold text-[12px]">Follow Us :</h3>
            <div className=" flex flex-row pl-3 gap-3">
              <FaInstagram className="size-4" />
              <FaYoutube className="size-4" />
              <FaFacebook className="size-4" />
              <FaTwitter className="size-4" />
            </div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <FaGlobeAfrica className="size-4" />
            <h3 className=" text-[12px]">
              shipping happiness more than 1000 clients
            </h3>
          </div>
          <div className=" flex flex-row gap-3 items-center">
            <h7 className="text-[11px]">Currency</h7>
            <Image
              width={25}
              height={25}
              src="/nepal-logo.png"
              alt="nepal-flag-logo"
            />
            <Select className="px-[2px]">
              <SelectTrigger className="w-[50px] px-[2px] h-[10px] border-0 focus:ring-0 focus:ring-offset-0 ring-offset-0 ring-0">
                <SelectValue placeholder="NPR" />
              </SelectTrigger>
              <SelectContent className="border-0 focus:ring-0 focus:ring-offset-0 ring-offset-0 ring-0">
                <SelectGroup className="">
                  <SelectLabel>Currency</SelectLabel>
                  <SelectItem value="npr">NRP</SelectItem>
                  <SelectItem value="us">USD</SelectItem>
                  <SelectItem value="inr">INR</SelectItem>
                  <SelectItem value="hk">HK</SelectItem>
                  <SelectItem value="euro">Euro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className=" bg-[#7A0999] w-full px-5">
        <div className=" lg:max-w-[1350px]  mx-auto flex flex-row items-center justify-between py-4">
          <div>
            <Image
              width={220}
              height={500}
              src="/logo.png"
              alt="nav-logo"
              className="object-object w-[220px] h-auto"
            />
          </div>

          <div className=" lg:hidden block">
            <RxHamburgerMenu className="text-white size-6" />
          </div>

          <div className=" lg:flex hidden flex-row items-center gap-6">
            <ul className="flex flex-row items-center *:text-white gap-10 *:text-base *:hover:cursor-pointer *:font-bold">
              <li>Men</li>
              <li>Women</li>
              <li>Traditional</li>
              <li>Craft</li>
            </ul>
            <div className=" flex flex-row items-center relative">
              <Input
                className=" py-6 min-w-[50px] focus-visible:ring-0 pr-20 placeholder:text-[12px] placeholder:indent-2"
                type="text"
                placeholder="Search Here "
              />
              <IoSearchOutline className="absolute right-3 size-6 text-gray-400" />
            </div>
          </div>
          <div className=" *:text-white lg:flex hidden flex-row items-center gap-5 *:hover:cursor-pointer">
            <span className=" flex flex-col items-center justify-center gap-1">
              <FaRegUserCircle className="size-5" />
              <DropdownMenu className="">
                <DropdownMenuTrigger className=" flex flex-row items-center gap-1 dark:focus:bg-none text-[11px] border-0 ring-0 ring-offset-0 outline-none border-none">
                  Sign In <MdKeyboardArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="*:text-[#7A0999] *:hover:cursor-pointer">
                  <DropdownMenuItem>Register</DropdownMenuItem>
                  <DropdownMenuItem>Login</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
            <span className=" flex flex-col items-center justify-center gap-1">
              <BsCart3 className="size-5" />
              <h3 className=" text-[11px]">Cart</h3>
            </span>
            <span className=" flex flex-col items-center justify-center gap-1">
              <IoIosHeartEmpty className="size-5" />
              <h3 className=" text-[11px]">Wishlist</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
