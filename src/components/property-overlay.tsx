import { BathIcon, BedIcon } from "@/assets/houzing-images"
import Image from "next/image"
import Div from "./ui/Div"
import Text from "./ui/Text"


const PropertyOverlay = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
      <div className="max-w-2xl flex  flex-col items-center space-y-4 md:space-y-5">
        <h1 className="text-white w-full font-bold text-3xl md:text-4xl xl:text-[44px] leading-tight md:leading-[48px] tracking-[-2%]">
          Skyper Pool Partment
        </h1>
        <p className="text-white font-normal text-sm md:text-base leading-6 tracking-[0%]">
          112 Glenwood Ave Hyde Park, Boston, MA
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="flex flex-col items-center">
            <Image src={BedIcon} alt="BedIcon" />
            <Text color="white" className="font-normal text-sm md:text-base leading-6 tracking-[0%]">
              4 beds
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Image src={BathIcon} alt="BathIcon" />
            <Text className="font-normal text-sm md:text-base leading-6 tracking-[0%] text-white" color="white">
              5 Baths
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Image src={BathIcon} alt="BathIcon" />
            <Text className="font-normal text-sm md:text-base leading-6 tracking-[0%] text-white" color="white">
              1 Garage
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Image src={BathIcon} alt="BathIcon" />
            <Text className="font-normal text-sm md:text-base leading-6 tracking-[0%] text-white" color="white">
              1200 Sq Ft
            </Text>
          </div>
        </div>

        <h2 className="text-white font-semibold text-2xl md:text-[28px] leading-9 tracking-[-2%] mt-2">$5,250/mo</h2>

        <Div className="border border-white text-white font-normal text-sm leading-5 tracking-[0%] px-8 py-3 rounded-sm cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all mt-4 md:mt-8">
          Read more
        </Div>
      </div>
    </div>
  )
}

export default PropertyOverlay

