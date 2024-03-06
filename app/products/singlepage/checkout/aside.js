import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";

const AsidePayment = () => {
  return (
    <div className="lg:p-[10px]">
      <div className="w-full divide-y-2">
        <form className=" space-y-5 pb-5">
          <button className=" bg-black text-[#F2F4F7] font-bold text-base w-full py-3">
            CHECKOUT
          </button>
          <input
            className="border py-3 text-base text-[#000] indent-4 w-full"
            type="text"
            placeholder="Promo Code"
          />
        </form>
        <div className=" space-y-[10px] py-5">
          <span className=" flex items-center justify-between text-base text-[#D92D20]">
            <h4 className=" ">Discount</h4>
            <h5>-89.97</h5>
          </span>
          <span className=" flex items-center justify-between text-base">
            <h4>Product Subtotal</h4>
            <h5>$189.97</h5>
          </span>
        </div>

        <div className="py-5">
          <div className=" text-[#344054] text-[12px] bg-[#F2F4F7] border-[#D0D5DD] border py-[10px] *:text-center">
            <p>Hooray</p>
            <p>You&apos;ve qualified for $5 Delivery When You Spend $130+</p>
          </div>
        </div>

        <div className="py-5">
          <RadioGroup className="space-y-[8px]" defaultValue="express">
            <div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="r1" />
                <Label className="text-base" htmlFor="r1">
                  Standard Delivery $5.00
                </Label>
              </div>
              <p className=" text-sm text-[#475467]">4-8 business days</p>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="express" id="r2" />
                <Label className="text-base" htmlFor="r2">
                  Express Delivery $14.99
                </Label>
              </div>
              <p className=" text-sm text-[#475467]">1-3 business days</p>
            </div>
          </RadioGroup>
          <Link href="#" className="underline text-sm">
            International Delivery
          </Link>
        </div>

        <div className="py-5">
          <div className=" text-lg flex items-center justify-between">
            <h4>Order Total</h4>
            <h4 className=" flex items-center justify-center gap-1">
              $324.96 <span className=" text-[10px]">AUD</span>
            </h4>
          </div>
          <div className="py-5">
            <button className=" bg-black text-[#F2F4F7] font-bold text-sm md:text-base w-full py-3">
              CHECKOUT
            </button>
          </div>
          <p className="text-base text-center font-bold mb-3">Or</p>

          <div className=" space-y-5">
            <button className=" flex items-center justify-center gap-[10px] bg-[#F9FAFB] text-[#000] border border-[#D0D5DD] font-bold text-sm md:text-base w-full py-3">
              CHECKOUT With
              <Image
                width={65.22}
                height={17}
                src="/paypal.svg"
                alt="google pay logo"
              />
            </button>
            <button className="flex items-center justify-center gap-[10px] bg-black text-[#F2F4F7] font-bold text-sm md:text-base w-full py-3">
              CHECKOUT WITH
              <Image
                width={55.22}
                height={17}
                src="/gpay.svg"
                alt="google pay logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsidePayment;
