import React from "react";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const SizeTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} className="underline text-black">
        SIZE GUIDE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="space-y-[19px]">
          <h1 className=" text-[24px] text-[#667085] flex flex-col items-center justify-center ">
            Opaline Size Guide
          </h1>
          <p className="text-center">
            To help you choose the best size, we recommend that you compare each
            product&apos;s measurements with your own.
          </p>

          <Tabs
            defaultValue="size"
            className="w-full flex flex-col justify-center"
          >
            <TabsList className="p-0 bg-transparent mb-[19px] ">
              <TabsTrigger
                className=" bg-[#EAECF0] data-[state=active]:bg-[#890DAB] data-[state=active]:text-white text-black py-0 px-10 h-full"
                value="size"
              >
                Size Chart
              </TabsTrigger>
              <TabsTrigger
                className="bg-[#EAECF0] data-[state=active]:bg-[#890DAB] data-[state=active]:text-white text-black py-0 px-6 h-full"
                value="measure"
              >
                How to Measure
              </TabsTrigger>
            </TabsList>
            <TabsContent value="size" className="px-10">
              <div className=" w-full grid grid-cols-5">
                <div className="col-span-1 ">
                  <Image
                    className="mx-auto object-cover"
                    src="/size.png"
                    width={214}
                    height={561}
                    alt="size calculation"
                  />
                </div>
                <div className="col-span-4">
                  <Table className="border-2 border-[#000]/20">
                    <TableHeader className="border-2 border-[#000]/20">
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20 *:bg-[#EAECF0] *:text-[#000] *:font-bold">
                        <TableHead className="">Sizes</TableHead>
                        <TableHead className="">Bust</TableHead>
                        <TableHead>WAIST</TableHead>
                        <TableHead className="text-center">HIPS</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody className="div">
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>XXS</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>26</TableCell>
                        <TableCell>34</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>XS</TableCell>
                        <TableCell>32</TableCell>
                        <TableCell>28</TableCell>
                        <TableCell>36</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>S</TableCell>
                        <TableCell>34</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>38</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>M</TableCell>
                        <TableCell>36</TableCell>
                        <TableCell>32</TableCell>
                        <TableCell>40</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>L</TableCell>
                        <TableCell>38</TableCell>
                        <TableCell>34</TableCell>
                        <TableCell>42</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>XL</TableCell>
                        <TableCell>40</TableCell>
                        <TableCell>36</TableCell>
                        <TableCell>44</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>XXL</TableCell>
                        <TableCell>42</TableCell>
                        <TableCell>38</TableCell>
                        <TableCell>46</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>3XL</TableCell>
                        <TableCell>44</TableCell>
                        <TableCell>40</TableCell>
                        <TableCell className="text-center">48</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>4XL</TableCell>
                        <TableCell>46</TableCell>
                        <TableCell>42</TableCell>
                        <TableCell className="text-center">50</TableCell>
                      </TableRow>
                      <TableRow className="*:text-center *:border-2 *:border-[#000]/20">
                        <TableCell>5XL</TableCell>
                        <TableCell>48</TableCell>
                        <TableCell>44</TableCell>
                        <TableCell className="text-center">52</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="measure">
              <div className=" grid grid-cols-5">
                <div className=" col-span-1">
                  <img
                    src="/measure-potrait.png"
                    width={184}
                    height={600}
                    alt="measure potrait"
                  />
                </div>

                <table className="table-auto col-span-4 border w-full">
                  <thead className=" border">
                    <tr className=" bg-[#EAECF0]">
                      <th colSpan={2} className="py-2">
                        SALWAR(TOP)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="*:border">
                    <tr className="*:border *:pl-6 *:text-[12px]">
                      <td colSpan={1}>1. Bust</td>
                      <td className="text-[12px]" colSpan={1}>
                        Measure around the fullest part of your bust. Leave no
                        gap between body & tape.
                      </td>
                    </tr>

                    <tr className="*:border *:pl-6 *:text-[12px] bg-[#F9FAFB]">
                      <td>2. Waist</td>
                      <td>
                        {" "}
                        Measure around the slimmest part of your waist. Leave no
                        gap between body & tape.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px]">
                      <td>3. Hips</td>
                      <td>
                        {" "}
                        Measure around the widest part of hip. Leave no gap
                        between body & tape.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px] bg-[#F9FAFB]">
                      <td>4. Kameez Length</td>
                      <td>
                        {" "}
                        Measure from shoulder point to your desired length. For
                        Anarkali, measure from Shoulder to Toe.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px]">
                      <td>5. Shoulder</td>
                      <td>
                        {" "}
                        Measure shoulder from one shoulder point to other
                        shoulder point from your back.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px] bg-[#F9FAFB]">
                      <td>6. Sleeve Length</td>
                      <td>
                        {" "}
                        Starting from the edge of the shoulder bone, measure
                        down to the desired length.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px]">
                      <td>7. Armhold Round</td>
                      <td>
                        {" "}
                        From the highest point on your shoulder, measure around
                        armhole.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px] bg-[#F9FAFB]">
                      <td>8. Upper Arm</td>
                      <td>
                        {" "}
                        Measure around the upper arm at the widest part. Leave
                        no gap between body & tape.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px]">
                      <td>9. Wrist round</td>
                      <td>
                        {" "}
                        Measure around your wrist. Do not leave any gap between
                        tape & body.
                      </td>
                    </tr>
                  </tbody>

                  <thead className=" border">
                    <tr className=" bg-[#EAECF0]">
                      <th colSpan={2} className="">
                        SALWAR(BOTTOM)
                      </th>
                    </tr>
                  </thead>

                  <tbody className="*:border ">
                    <tr className="*:border *:pl-6 *:text-[12px]">
                      <td>10. Waist Tie</td>
                      <td>
                        Measure around where you normally tie your Salwar/Pant.
                        Leave no gap between body & tape.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px] bg-[#F9FAFB]">
                      <td>11. SALWAR LENGTH</td>
                      <td>
                        Measure from where you tie your Salwar/Lower down till
                        your desired length.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px]">
                      <td>12. Thigh Round</td>
                      <td>
                        Measure around widest part of knee. Leave no gap between
                        body & tape.
                      </td>
                    </tr>
                    <tr className="*:border *:pl-6 *:text-[12px] bg-[#F9FAFB]">
                      <td>13. Knew Round</td>
                      <td>
                        Measure around the ankle of your foot. Leave no gap
                        between body & tape.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </Box>
      </Modal>
    </div>
  );
};

export default SizeTable;
