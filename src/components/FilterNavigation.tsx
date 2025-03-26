import { CarKeyIcon, HousesIcon, PriceIcon, SearchIcon, SettingLineIcon } from "@/assets/houzing-images"
import Image from "next/image"
import Div from "./ui/Div"
import Text from "./ui/Text"

const Filternavigation = () => {
  return (
    <div className="py-[10px]">
      <div className="flex justify-center items-center space-x-[20px]">
        <Div className="flex w-full space-x-2 justify-start items-center px-[20px] py-[12px]">
          <Image src={HousesIcon} alt="houses" />
          <Text className=" font-normal  text-sm leading-5 tracking-[0%]" color="#0D263B">
            Enter an address, neighborhood, city, or ZIP code
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px]  w-auto">
          <Image src={CarKeyIcon} alt="CarKeyIcon" />
          <Text className=" font-normal text-sm leading-5 tracking-[0%]" color="#0D263B">
            Status
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px]  w-auto">
          <Image src={PriceIcon} alt="houses" />
          <Text className=" font-normal text-sm leading-5 tracking-[0%]" color="#0D263B">
            Status
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px]  w-auto">
          <Image src={SettingLineIcon} alt="houses" />
          <Text className=" font-normal text-sm leading-5 tracking-[0%]" color="#0D263B">
            Advanced
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px]  w-auto bg-[#0061DF]">
          <Image src={SearchIcon} alt="SearchIcon" />
          <Text className=" font-normal text-sm leading-5 tracking-[0%]" color="#fff">
            Advanced
          </Text>
        </Div>
      </div>
    </div>
  )
}

export default Filternavigation