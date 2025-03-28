"use client"

import { CarKeyIcon, HousesIcon, PriceIcon, SearchIcon, SettingLineIcon } from "@/assets/houzing-images"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Div from "./ui/Div"
import Text from "./ui/Text"

const Filternavigation = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  return (
    <div className="py-[10px] relative">
      {/* Desktop Filter Navigation */}
      <div className="hidden md:flex justify-center items-center space-x-[20px]">
        <Div className="flex w-full space-x-2 justify-start items-center px-[20px] py-[12px]">
          <Image src={HousesIcon || "/placeholder.svg"} alt="houses" />
          <Text className="font-normal text-sm leading-5 tracking-[0%]" color="#0D263B">
            Enter an address, neighborhood, city, or ZIP code
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px] w-auto">
          <Image src={CarKeyIcon || "/placeholder.svg"} alt="CarKeyIcon" />
          <Text className="font-normal text-sm leading-5 tracking-[0%]" color="#0D263B">
            Status
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px] w-auto">
          <Image src={PriceIcon || "/placeholder.svg"} alt="houses" />
          <Text className="font-normal text-sm leading-5 tracking-[0%]" color="#0D263B">
            Price
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px] w-auto">
          <Image src={SettingLineIcon || "/placeholder.svg"} alt="houses" />
          <Text className="font-normal text-sm leading-5 tracking-[0%]" color="#0D263B">
            Advanced
          </Text>
        </Div>
        <Div className="flex space-x-2 justify-start items-center pl-[20px] pr-[40px] py-[12px] w-auto bg-[#0061DF]">
          <Image src={SearchIcon || "/placeholder.svg"} alt="SearchIcon" />
          <Text className="font-normal text-sm leading-5 tracking-[0%]" color="#fff">
            Search
          </Text>
        </Div>
      </div>

      {/* Mobile Filter Navigation - Matches the provided design */}
      <div className="md:hidden">
        {/* Filter button to show/hide mobile filters */}
        <button
          className="flex items-center justify-center w-full py-2 bg-blue-600 text-white rounded-md mb-2"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >

          <Image src={SettingLineIcon || "/placeholder.svg"} alt="houses" className="mr-2 h-4 w-4" />
          <span>Filters</span>
        </button>

        {/* Mobile filter card */}
        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          {/* Address input */}
          <div className="border border-gray-200 rounded-md p-3 mb-4 flex items-center">
            <Image src={HousesIcon || "/placeholder.svg"} alt="houses" className="mr-2" />
            <input type="text" placeholder="Enter an address, city, ZIP code" className="w-full outline-none text-sm" />
          </div>

          {/* Status dropdown */}
          <div className="border border-gray-200 rounded-md p-3 mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={CarKeyIcon || "/placeholder.svg"} alt="Status" className="mr-2" />
              <Text className="font-normal text-sm" color="#0D263B">
                Status
              </Text>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          {/* Price dropdown */}
          <div className="border border-gray-200 rounded-md p-3 mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={PriceIcon || "/placeholder.svg"} alt="Price" className="mr-2" />
              <Text className="font-normal text-sm" color="#0D263B">
                Price
              </Text>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          {/* Advanced and Search buttons */}
          <div className="flex gap-4">
            <button className="flex items-center justify-center border border-gray-200 rounded-md p-3 w-1/2">
              <Image src={SettingLineIcon || "/placeholder.svg"} alt="Advanced" className="mr-2" />
              <Text className="font-normal text-sm" color="#0D263B">
                Advanced
              </Text>
            </button>

            <button className="flex items-center justify-center bg-blue-600 rounded-md p-3 w-1/2">
              <Image src={SearchIcon || "/placeholder.svg"} alt="Search" className="mr-2" />
              <Text className="font-normal text-sm" color="#fff">
                Search
              </Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filternavigation

