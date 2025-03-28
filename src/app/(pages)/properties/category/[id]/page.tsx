/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Item from "@/components/Item"
import ItemCard from "@/components/ItemCard"
import Div from "@/components/ui/Div"
import Text from "@/components/ui/Text"
import { ScheduleService } from "@/services/schedule-service"
import Container from "@/shared/Container"
import { Property } from "@/types"
import { ChevronDown } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const CategoryPage = () => {
  const [windowWidth, setWindowWidth] = useState<number | any>(null);
  const { id } = useParams()
  useEffect(() => {
    if (typeof window !== "undefined") { // Faqat brauzerda bajariladi
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const [property, setProperty] = useState<Property | any>(null)
  useEffect(() => {
    // Fetch property details from your API
    const fetchProperty = async () => {
      try {
        const response = await ScheduleService.getScheduleByCategoryId(Number(id))
        setProperty(response)
      } catch (error) {
        console.error("Error fetching property details:", error)
      }
    }

    fetchProperty()
  }, [])
  return (
    <Container>
      <div className="flex justify-center items-center flex-col  ">
        <h1 className='font-semibold text-[28px] leading-9 tracking-[-2%] text-center mt-[64px]'>Properties</h1>
        <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%] mt-2 mb-[70px]">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text>
      </div>
      <div className="flex justify-between items-center py-[22px] my-[22px]">
        <p className="font-normal text-sm leading-5 tracking-[0%]">13,474 results</p>
        <p className="flex justify-center items-center space-x-2">
          <span> Sort by: Newest Listings </span><ChevronDown />
        </p>
      </div>
      <Container>

        {windowWidth >= 1024 ? (
          <ItemCard
            sliderConfig={{
              centerMode: false,
              slidesToShow: property?.length
            }}
            cardStyles={{
              marginRight: "20px",
            }}
            className="h-auto bg-transparent"
            items={property?.map((item: Property, index: number) => (
              <Item key={index} title={item.title} price={item.price} description={item.description} id={item.id} />
            ))}
            slider
          />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
            {property?.map((item: Property, index: number) => (
              <Item key={index} title={item.title} price={item.price} description={item.description} id={item.id} />
            ))}
          </div>

        )}
      </Container>

      <div className="w-full  flex justify-center my-10 cursor-pointer items-center">
        <Div className="w-[250] bg-[#0061DF] h-[44] gap-2.5 px-10 py-3 rounded-sm flex justify-center items-center">
          <Text color="white">Show more</Text>
        </Div>
      </div>
    </Container>
  )
}

export default CategoryPage