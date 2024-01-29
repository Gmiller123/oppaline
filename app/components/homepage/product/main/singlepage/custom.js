import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SizeTable from "./table";

const CustomMeasurement = () => {
  return (
    <div>
      <div>
        <span className=" flex items-center gap-[13px]">
          <h3 className="text-[28px] text-[#808285]">
            <strike>$69.56</strike>
          </h3>
          <h3 className=" text-[28px]">$30.59</h3>
        </span>

        {/* ------------------------------- Tab section ------------------------------ */}

        <Tabs
          defaultValue="unstitched"
          className="w-full bg-[#F2F4F7] border-[0.5px] border-[#D0D5DD] p-5 h-full"
        >
          <div className=" flex items-center justify-between mb-[15px]">
            <h1 className="text-base font-bold">STITCHING OPTIONS*</h1>

            <SizeTable />
          </div>

          <TabsList className="p-0 flex flex-col h-fit items-start mb-5">
            <RadioGroup defaultValue="option-one">
              <TabsTrigger
                value="unstitched"
                className=" justify-start p-0 data-[state=active]:bg-transparent data-[state=active]:text-slate-950 data-[state=active]:shadow-none"
              >
                <div className=" flex gap-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="cursor-pointer">
                    Unstitched - Fabric only
                  </Label>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="standard"
                className="justify-start gap-2 p-0 data-[state=active]:bg-transparent data-[state=active]:text-slate-950 data-[state=active]:shadow-none"
              >
                <div className=" flex gap-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="cursor-pointer">
                    Standard Size Stitching (+ AU$ 20)
                  </Label>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="justify-start gap-2 p-0 data-[state=active]:bg-transparent data-[state=active]:text-slate-950 data-[state=active]:shadow-none"
              >
                <div className=" flex gap-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three" className="cursor-pointer">
                    Standard Size Stitching (+ AU$ 20)
                  </Label>
                </div>
              </TabsTrigger>
            </RadioGroup>
          </TabsList>

          <TabsContent value="unstitched">
            <ul>
              <li className=" flex items-center gap-2 text-[12px]">
                <span>
                  <IoMdStar className="bg-black text-white rounded-full text-[9px]" />
                </span>{" "}
                Ships in 1 day
              </li>
              <li className="flex items-center gap-2 text-[12px]">
                <IoMdStar className="bg-black text-white rounded-full text-[9px]" />{" "}
                Lining material included FREE of charge.
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="standard">
            <h3 className=" text-[13px] font-bold mb-[5px]">
              SLECT STANDARD SIZE:
            </h3>
            <p className=" text-[12px] mb-[10px]">
              Select your "EXACT Body Measurements" using our Size Chart. While
              stitching we add some loosening for fitting.Select your "EXACT
              Body Measurements" using our Size Chart. While stitching we add
              some loosening for fitting.
            </p>
            <ol className="w-full list-decimal space-y-1">
              <li className=" text-sm font-medium flex items-center justify-between w-full">
                <span className=" flex items-center gap-2">
                  1. Body Measurement{" "}
                  <Image
                    width={10}
                    height={10}
                    src="/info-circle.svg"
                    alt=" use of description icon"
                  />{" "}
                </span>
                <Select className="">
                  <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                    <SelectValue
                      className="text-[8px] placeholder:text-[5px]"
                      placeholder="-- Select --"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className=" *:text-[11px]">
                      <SelectLabel className="pl-5">--Select--</SelectLabel>
                      <SelectItem value="1">34 inch/86 cm</SelectItem>
                      <SelectItem value="2">36 inch/89 cm</SelectItem>
                      <SelectItem value="3">38 inch/92 cm</SelectItem>
                      <SelectItem value="4">40 inch/95 cm</SelectItem>
                      <SelectItem value="5">42 inch/98 cm</SelectItem>
                      <SelectItem value="6">44 inch/101 cm</SelectItem>
                      <SelectItem value="7">46 inch/104 cm</SelectItem>
                      <SelectItem value="8">48 inch/107 cm</SelectItem>
                      <SelectItem value="9">50 inch/110 cm</SelectItem>
                      <SelectItem value="10">52 inch/103 cm</SelectItem>
                      <SelectItem value="11">54 inch/106 cm</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li className=" text-sm font-medium flex items-center justify-between w-full">
                <span className=" flex items-center gap-2">
                  2. Kameez Length{" "}
                  <Image
                    width={10}
                    height={10}
                    src="/info-circle.svg"
                    alt=" use of description icon"
                  />{" "}
                </span>
                <Select className="">
                  <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                    <SelectValue
                      className="text-[8px] placeholder:text-[5px]"
                      placeholder="-- Select --"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className=" *:text-[11px]">
                      <SelectLabel className="pl-5">--Select--</SelectLabel>
                      <SelectItem value="1">34 inch/86 cm</SelectItem>
                      <SelectItem value="2">36 inch/89 cm</SelectItem>
                      <SelectItem value="3">38 inch/92 cm</SelectItem>
                      <SelectItem value="4">40 inch/95 cm</SelectItem>
                      <SelectItem value="5">42 inch/98 cm</SelectItem>
                      <SelectItem value="6">44 inch/101 cm</SelectItem>
                      <SelectItem value="7">46 inch/104 cm</SelectItem>
                      <SelectItem value="8">48 inch/107 cm</SelectItem>
                      <SelectItem value="9">50 inch/110 cm</SelectItem>
                      <SelectItem value="10">52 inch/103 cm</SelectItem>
                      <SelectItem value="11">54 inch/106 cm</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li className=" text-sm font-medium flex items-center justify-between w-full">
                3. Salwar Length
                <Select className="">
                  <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                    <SelectValue
                      className="text-[8px] placeholder:text-[5px]"
                      placeholder="-- Select --"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className=" *:text-[11px]">
                      <SelectLabel className="pl-5">--Select--</SelectLabel>
                      <SelectItem value="1">34 inch/86 cm</SelectItem>
                      <SelectItem value="2">36 inch/89 cm</SelectItem>
                      <SelectItem value="3">38 inch/92 cm</SelectItem>
                      <SelectItem value="4">40 inch/95 cm</SelectItem>
                      <SelectItem value="5">42 inch/98 cm</SelectItem>
                      <SelectItem value="6">44 inch/101 cm</SelectItem>
                      <SelectItem value="7">46 inch/104 cm</SelectItem>
                      <SelectItem value="8">48 inch/107 cm</SelectItem>
                      <SelectItem value="9">50 inch/110 cm</SelectItem>
                      <SelectItem value="10">52 inch/103 cm</SelectItem>
                      <SelectItem value="11">54 inch/106 cm</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li className=" text-sm font-medium flex items-center justify-between w-full">
                4. My Height
                <Select className="">
                  <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                    <SelectValue
                      className="text-[8px] placeholder:text-[5px]"
                      placeholder="-- Select --"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className=" *:text-[11px]">
                      <SelectLabel className="pl-5">--Select--</SelectLabel>
                      <SelectItem value="1">34 inch/86 cm</SelectItem>
                      <SelectItem value="2">36 inch/89 cm</SelectItem>
                      <SelectItem value="3">38 inch/92 cm</SelectItem>
                      <SelectItem value="4">40 inch/95 cm</SelectItem>
                      <SelectItem value="5">42 inch/98 cm</SelectItem>
                      <SelectItem value="6">44 inch/101 cm</SelectItem>
                      <SelectItem value="7">46 inch/104 cm</SelectItem>
                      <SelectItem value="8">48 inch/107 cm</SelectItem>
                      <SelectItem value="9">50 inch/110 cm</SelectItem>
                      <SelectItem value="10">52 inch/103 cm</SelectItem>
                      <SelectItem value="11">54 inch/106 cm</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
            </ol>
          </TabsContent>
          <TabsContent value="custom">
            <div className="mb-5">
              <h4 className="   text-[13px] font-bold mb-[5px]">
                SELECT CUSTOM SIZES:
              </h4>
              <p className=" text-[12px] mb-5">
                Take your Body or Garment Measurement & select below choices.
              </p>
            </div>

            <div className="mb-5">
              <h4 className="border-l-4 pl-2 leading-4 border-black text-[13px] font-bold mb-4">
                I am giving my*
              </h4>
              <RadioGroup defaultValue="option-one">
                <div className=" flex items-center gap-2">
                  <RadioGroupItem
                    value="bodyMeasurement"
                    id="bodyMeasurement"
                  />
                  <Label htmlFor="bodyMeasurement" className="cursor-pointer">
                    Body Measurements
                  </Label>
                </div>
                <div className=" flex items-center gap-2">
                  <RadioGroupItem
                    value="garmentMeasurement"
                    id="garmentMeasurement"
                  />
                  <Label
                    htmlFor="garmentMeasurement"
                    className="cursor-pointer"
                  >
                    Garments Measurements
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-5">
              <h4 className=" border-l-4 border-[#000] leading-4 pl-2 text-[13px] mb-2 font-bold">
                Kameez(Top)
              </h4>

              <ol className=" list-decimal list-inside space-y-1">
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    1. Brust*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    2. Waist*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    3. Hips*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  4. Kameez length
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  5. Shoulder
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  6. Sleeve Length
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  7. Armhole Round
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  8. Upper Arm
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  9. Wrist Round
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
              </ol>
            </div>
            <div className=" mb-5">
              <h4 className="text-[13px] font-bold border-l-4 pl-2 border-black leading-4 mb-2">
                Salwar(Top)
              </h4>

              <ol className=" space-y-1">
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    10. Waist Tie*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    11. Salwar Length*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    12. Thigh Round*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    13. Knee Round*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    14. Ankle Round*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>

                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  <span className=" flex items-center gap-2">
                    15. Salwar style*
                    <Image
                      width={10}
                      height={10}
                      src="/info-circle.svg"
                      alt=" use of description icon"
                    />{" "}
                  </span>
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
              </ol>
            </div>

            <div className=" mb-5">
              <h4 className="text-[13px] font-bold border-l-4 pl-2 border-black leading-4 mb-2">
                Heights
              </h4>

              <ol>
                <li className=" text-sm font-medium flex items-center justify-between w-full">
                  My height
                  <Select className="">
                    <SelectTrigger className="w-[120px] rounded-none border border-[#000]/20 h-8 text-[12px] focus:ring-0 focus:ring-none focus:ring-offset-0">
                      <SelectValue
                        className="text-[8px] placeholder:text-[5px]"
                        placeholder="-- Select --"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className=" *:text-[11px]">
                        <SelectLabel className="pl-5">--Select--</SelectLabel>
                        <SelectItem value="1">34 inch/86 cm</SelectItem>
                        <SelectItem value="2">36 inch/89 cm</SelectItem>
                        <SelectItem value="3">38 inch/92 cm</SelectItem>
                        <SelectItem value="4">40 inch/95 cm</SelectItem>
                        <SelectItem value="5">42 inch/98 cm</SelectItem>
                        <SelectItem value="6">44 inch/101 cm</SelectItem>
                        <SelectItem value="7">46 inch/104 cm</SelectItem>
                        <SelectItem value="8">48 inch/107 cm</SelectItem>
                        <SelectItem value="9">50 inch/110 cm</SelectItem>
                        <SelectItem value="10">52 inch/103 cm</SelectItem>
                        <SelectItem value="11">54 inch/106 cm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
              </ol>
            </div>

            <div className="mb-5">
              <h4 className="border-l-4 pl-2 leading-4 border-black text-[13px] font-bold mb-4">
                Delivery Time Option*
              </h4>
              <RadioGroup defaultValue="option-one" className="mb-2">
                <div className=" flex items-center gap-2">
                  <RadioGroupItem
                    value="bodyMeasurement"
                    id="bodyMeasurement"
                  />
                  <Label htmlFor="bodyMeasurement" className="cursor-pointer">
                    Standard: Delivery in 2 weeks (Free)
                  </Label>
                </div>
                <div className=" flex items-center gap-2">
                  <RadioGroupItem
                    value="garmentMeasurement"
                    id="garmentMeasurement"
                  />
                  <Label
                    htmlFor="garmentMeasurement"
                    className="cursor-pointer"
                  >
                    URGENT: Delivery in 1 weeks(+ $20)
                  </Label>
                </div>
              </RadioGroup>
              <p className=" text-[12px]">
                Please select your "EXACT Body Measurements".While stitching we
                add some loosening for fitting.Example: If Bust Size 34 inches
                is selected then your dress will be about 36 inch Bust Size.
              </p>
            </div>

            <div className="mb-5">
              <h4 className="border-l-4 pl-2 leading-4 border-black text-[13px] font-bold mb-2">
                Customization Request*
              </h4>
              <p className=" text-[12px] mb-2">
                Order instruction or Customization Request:
              </p>

              <textarea
                className=" w-full resize-none placeholder:text-[#98A2B3] border border-[#0D5DD] text-[11px] pt-2 indent-2 mb-2 outline-none"
                name="customizationRequest"
                id=""
                rows="6"
                placeholder="Order instruction or Customization Request:"
              ></textarea>
              <p className=" text-[12px]">
                Stitching is done as model photos unless you request for
                changes, at no extra cost, such as add lining, add sleeves, hide
                skin, and longer blouse etc.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomMeasurement;
