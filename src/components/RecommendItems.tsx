/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { apartmentIcon, BusinesIcon, calculatorIcon, discordIcon, homeIcon, houseIcon, mapsIcon, villaIcon } from "@/assets/houzing-images"
import userImg from "@/assets/user.png"
import { CategoryService } from "@/services/category-services"
import { ScheduleService } from "@/services/schedule-service"
import Container from "@/shared/Container"
import { Category, Property } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Item from "./Item"
import ItemCard from "./ItemCard"
import Div from "./ui/Div"
import Text from "./ui/Text"

const RecommendItems = () => {
  const [property, setProperty] = useState<Property | any>(null)
  const [categories, setCategories] = useState<Category | any>(null)
  const [windowWidth, setWindowWidth] = useState<number | any>(null);

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

  useEffect(() => {

    // Fetch property details from your API
    const fetchProperty = async () => {
      try {
        const response = await ScheduleService.getAllSchedules()
        setProperty(response)
      } catch (error) {
        console.error("Error fetching property details:", error)
      }
    }

    fetchProperty()
    const fetchCategories = async () => {
      try {
        const response = await CategoryService.getAllCategories()
        setCategories(response)
      } catch (error) {
        console.error("Error fetching property details:", error)
      }
    }

    fetchCategories()
  }, [])


  return (
    <div className=" w-full h-auto ">
      <div className="flex justify-center items-center flex-col">
        <h1 className='font-semibold text-[28px] leading-9 tracking-[-2%] text-center mt-[90px]'>Recommended</h1>
        <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%] mt-2 mb-8">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text>
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
      <div className="bg-[#F5F7FC]  flex justify-center items-center flex-col mt-12 ">
        <Container>
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-semibold mt-[48px] text-[28px] leading-9 tracking-[-2%] text-center;">Why Choose Us?</h1>
            <p className="mt-2 mb-10">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
          </div>

          <div className="grid grid-cols-4 gap-x-[77px] mb-[50px]">
            <div className="flex justify-center items-center flex-col ">
              <Image src={discordIcon} alt="social" />
              <h1 className="text-[#0D263B] font-semibold text-lg leading-7 tracking-[0%] text-center mt-6 mb-2">Trusted By Thousands</h1>
              <Text color="#696969" className=" font-normal text-base leading-6 tracking-[0%] text-center">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</Text>
            </div>
            <div className="flex justify-center items-center flex-col ">
              <Image src={houseIcon} alt="social" />
              <h1 className="text-[#0D263B] font-semibold text-lg leading-7 tracking-[0%] text-center mt-6 mb-2">Trusted By Thousands</h1>
              <Text color="#696969" className=" font-normal text-base leading-6 tracking-[0%] text-center">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</Text>
            </div>
            <div className="flex justify-center items-center flex-col ">
              <Image src={calculatorIcon} alt="social" />
              <h1 className="text-[#0D263B] font-semibold text-lg leading-7 tracking-[0%] text-center mt-6 mb-2">Trusted By Thousands</h1>
              <Text color="#696969" className=" font-normal text-base leading-6 tracking-[0%] text-center">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</Text>
            </div>
            <div className="flex justify-center items-center flex-col ">
              <Image src={mapsIcon} alt="social" />
              <h1 className="text-[#0D263B] font-semibold text-lg leading-7 tracking-[0%] text-center mt-6 mb-2">Trusted By Thousands</h1>
              <Text color="#696969" className=" font-normal text-base leading-6 tracking-[0%] text-center">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</Text>
            </div>

          </div>
        </Container>



      </div>
      <Container>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-semibold mt-[48px] text-[28px] leading-9 tracking-[-2%] text-center;">Category</h1>
          <p className="mt-2 mb-10">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        </div>

        <div className="mb-[90px]">
          <ItemCard
            sliderConfig={{
              centerMode: false,
              slidesToShow: categories?.length,
            }}

            slider
            className="bg-transparent"
            items={categories?.map((item: Category, index: number) => (
              <Link href={`/properties/category/${item?.id}`}
                key={index}
                className="h-[350px]  mb-[32px] px-[20px]"

              >
                <div className="flex rounded-lg  justify-center items-center flex-col bg-center w-full h-full  bg-cover " style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                  url('https://s3-alpha-sig.figma.com/img/e2c1/b220/eb21ff462cdc4d29fe96321026ddfaf6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dh3cxn97k2l4SVEMEY9RKs-INYMsqJlGrxeNRjawdQMFXAEKoVMZLeqUc5VZFcZLwssB2h11Oh0p-EXIFdkZ~ar7jKp0O9deNCNM1kxlZdkOd3xWn5jMKAqaaEAtPiXMIGAmjx5qn4G1XFoHD29L4NtuPPqlM1A1tsEY8bleo7qlfyT9TOr0RMuIWlgvYPzinYI1hZjiKWlOjVInigLjbEnSXVKzxhgZJmPL6~a0UC8x7IhvL-A3brYYzxw7zUZnUB0c5QdQWNIbO1NRcYc0YmCFUzKzyvtLdDRMdEwGrU2zfMTuCKQudzeMjIU8ECGyTxSNISJWRA2pAH2NiW6bvg__')`
                }}>

                  {index === 0 && <Image src={homeIcon} alt="homeIcon" />}
                  {index === 1 && <Image src={apartmentIcon} alt="apartmentIcon" />}
                  {index === 2 && <Image src={BusinesIcon} alt="officeIcon" />}
                  {index === 3 && <Image src={villaIcon} alt="villaIcon" />}
                  <span className="font-semibold text-lg leading-7 tracking-[0%] text-white block mt-6">
                    {item?.name}
                  </span>
                </div>
              </Link>
            ))}
          />


        </div>
      </Container>

      <div className="w-full h-[569px] bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url('https://s3-alpha-sig.figma.com/img/348a/9872/65add135c66e5d356aae0e7a44733748?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z9Z1jQi8~L1ZtXzhKJ38gxQzhlx5TVX-smgbShkIXFiv-Fph5iEn73RdJijwjfEDKfCCcuBUJBlEAx5iQ5ifviy5IpYIawE17l785DnB0czUOQNJuFRiEHvXC0uXUM-cR4VKD0GE1xg1akRxpG3gUJQp~xfrbkelc~yBeZwmkZCRao~8pnWK-nU-kZ6atioKdhopLNjVTb7-ULSjq9m4cZHQZTxDtg8Gfagtl0CbEOfR-xZnKp6VZC2ie5g85fXhz7mrotFyHKo8--7-Ux8ZC90y1RTYB2Fh8d3wErwSwmMY1FAsuCCbaDyHtvtf-t10cDi6qeLwgS7xU6JrM8PP4g__')`
      }}>
        <div className="flex justify-center items-center flex-col h-full ">
          <Text color="#fff" className="font-semibold text-[28px] leading-9 tracking-[-2%] text-center">Vermont Farmhouse With Antique Jail Is
            the Week&apos;s Most Popular Home</Text>
          <Div className="bg-[#0061DF] border-none w-[180] h-[44] gap-2.5 px-10 py-3  rounded-sm flex justify-center items-center mt-[40px] cursor-pointer">
            <Text color="white"> Read more</Text>
          </Div>
        </div>
      </div>
      <Container>
        <div className="flex justify-center items-center flex-col">
          <h1 className='font-semibold text-[28px] leading-9 tracking-[-2%] text-center mt-[90px]'>Recent Properties for Rent</h1>
          <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%] mt-2 mb-8">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text>
        </div>

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
              <Item key={index} id={item.id} title={item.title} price={item.price} description={item.description} />
            ))}
            slider
          />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
            {property?.map((item: Property, index: number) => (
              <Item key={index} title={item.title} id={item.id} price={item.price} description={item.description} />
            ))}
          </div>

        )}
      </Container>

      <div className="bg-[#F5F7FC] mt-12  ">
        <Container>
          <div className="flex justify-center items-center flex-col  ">
            <h1 className='font-semibold text-[28px] leading-9 tracking-[-2%] text-center mt-[90px]'>Testimonials</h1>
            <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%] mt-2 mb-8">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text>
          </div>


          <ItemCard sliderConfig={{
            centerMode: false
          }} cardStyles={{
            marginRight: '20px'
          }} className="h-auto  bg-transparent  "
            items={[1, 2, 3, 4].map((_, index) => <div key={index} className="relative mb-36">
              <div className="bg-white  shadow-[0px_10px_50px_0px_#0D263B1A]  mb-12  mx-5 px-12 py-10 ">
                <Text color="#696969" >
                  &quot; I believe in lifelong learning and Skola is a great place to learn from experts. I&apos;ve learned a lot and recommend it to all my friends &quot;
                </Text>

                <div className="flex absolute  -bottom-9 left-1/3  justify-center items-center flex-col">
                  <Image width={100} height={100} className="w-10 h-10 rounded-full  " src={userImg} alt="user" />
                  <Text color="#0D263B" className="font-semibold text-base leading-6 tracking-[0%] mt-4 mb-1 text-center">
                    Marvin McKinney
                  </Text>
                  <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%] text-center">Designer</Text>
                </div>
              </div>
            </div>)} slider>
          </ItemCard>
        </Container>
      </div>

    </div>
  )
}

export default RecommendItems