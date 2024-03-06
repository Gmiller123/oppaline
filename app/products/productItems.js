import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductItems = ({ productData, loading, error }) => {
  const local_url_img = "http://192.168.10.66:8000";

  if (loading) return "Data is fetching";
  if (error) return "Error has occured";

  return (
    <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
      {productData?.map((product, index) => (
        <Carousel key={index} className="relative">
          <CarouselContent>
            <CarouselItem className="flex flex-col">
              <Link href={`/products/${product._id}`}>
                <Image
                  width={600}
                  height={849}
                  src={local_url_img + "/images/" + product.image}
                  alt="pant image"
                  className="w-full h-auto"
                />
              </Link>

              <div>
                <div className="flex items-center justify-between pt-5">
                  <span className=" flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-[#000]">
                      {product.name}
                    </h4>
                    <span className=" flex gap-1">
                      <h5 className="text-[#667085] font-semibold">
                        <strike>${product.discount}</strike>
                      </h5>
                      <h5 className=" font-semibold">${product.price}</h5>
                    </span>
                  </span>
                  <span className=" flex items-center gap-[10px] pr-[10px]">
                    <Link href="#">
                      <Image
                        width={24}
                        height={24}
                        src="/addtocart-icon.svg"
                        alt="add to card icon"
                        className=" text-[#344054]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        width={24}
                        height={24}
                        src="/love.svg"
                        alt="add to card icon"
                        className=" text-[#344054]"
                      />
                    </Link>
                  </span>
                </div>
                <span className=" flex items-center gap-[10px] pt-[8px]">
                  <span className=" flex items-center gap-[10px] pl-[6px]">
                    <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                  </span>
                  <span>
                    <h5 className=" text-[12px] text-[#000]">
                      +{product.discount} colors
                    </h5>
                  </span>
                </span>
                <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                  {`${product.discount}% Off, Shop Today`}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col">
              <Link href={`/products/${product._id}`}>
                <Image
                  width={600}
                  height={849}
                  src={local_url_img + "/images/" + product.image}
                  alt="pant image"
                  className="w-full h-auto"
                />
              </Link>

              <div>
                <div className="flex items-center justify-between pt-5">
                  <span className=" flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-[#000]">
                      {product.name}
                    </h4>
                    <span className=" flex gap-1">
                      <h5 className="text-[#667085] font-semibold">
                        <strike>${product.discount}</strike>
                      </h5>
                      <h5 className=" font-semibold">${product.price}</h5>
                    </span>
                  </span>
                  <span className=" flex items-center gap-[10px] pr-[10px]">
                    <Link href="#">
                      <Image
                        width={24}
                        height={24}
                        src="/addtocart-icon.svg"
                        alt="add to card icon"
                        className=" text-[#344054]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        width={24}
                        height={24}
                        src="/love.svg"
                        alt="add to card icon"
                        className=" text-[#344054]"
                      />
                    </Link>
                  </span>
                </div>
                <span className=" flex items-center gap-[10px] pt-[8px]">
                  <span className=" flex items-center gap-[10px] pl-[6px]">
                    <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                  </span>
                  <span>
                    <h5 className=" text-[12px] text-[#000]">
                      +{product.discount} colors
                    </h5>
                  </span>
                </span>
                <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                  {`${product.discount}% Off, Shop Today`}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col">
              <Link href="/products/singlepage">
                <Image
                  width={600}
                  height={849}
                  src={local_url_img + "/images/" + product.image}
                  alt="pant image"
                  className="w-full h-auto"
                />
              </Link>

              <div>
                <div className="flex items-center justify-between pt-5">
                  <span className=" flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-[#000]">
                      {product.name}
                    </h4>
                    <span className=" flex gap-1">
                      <h5 className="text-[#667085] font-semibold">
                        <strike>${product.discount}</strike>
                      </h5>
                      <h5 className=" font-semibold">${product.price}</h5>
                    </span>
                  </span>
                  <span className=" flex items-center gap-[10px] pr-[10px]">
                    <Link href="#">
                      <Image
                        width={24}
                        height={24}
                        src="/addtocart-icon.svg"
                        alt="add to card icon"
                        className=" text-[#344054]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        width={24}
                        height={24}
                        src="/love.svg"
                        alt="add to card icon"
                        className=" text-[#344054]"
                      />
                    </Link>
                  </span>
                </div>
                <span className=" flex items-center gap-[10px] pt-[8px]">
                  <span className=" flex items-center gap-[10px] pl-[6px]">
                    <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                  </span>
                  <span>
                    <h5 className=" text-[12px] text-[#000]">
                      +{product.discount} colors
                    </h5>
                  </span>
                </span>
                <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                  {`${product.discount}% Off, Shop Today`}
                </h3>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-5 top-[40%]" />
          <CarouselNext className="absolute right-5 top-[40%]" />
        </Carousel>
      ))}
    </div>
  );
};

export default ProductItems;
