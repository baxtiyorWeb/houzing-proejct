import Item from "@/components/Item"
import ItemCard from "@/components/ItemCard"
import Div from "@/components/ui/Div"
import Text from "@/components/ui/Text"
import Container from "@/shared/Container"
import { ChevronDown } from "lucide-react"

const PropertiesPage = () => {
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
      <div className="grid grid-cols-3">
        <ItemCard items={[1, 2, 3, 4].map((item) => (
          <Item key={item} />
        ))} />
        <ItemCard items={[1, 2, 3, 4].map((item) => (
          <Item key={item} />
        ))} />
        <ItemCard items={[1, 2, 3, 4].map((item) => (
          <Item key={item} />
        ))} />
        <ItemCard items={[1, 2, 3, 4].map((item) => (
          <Item key={item} />
        ))} />
      </div>

      <div className="w-full  flex justify-center my-10 cursor-pointer items-center">
        <Div className="w-[250] bg-[#0061DF] h-[44] gap-2.5 px-10 py-3 rounded-sm flex justify-center items-center">
          <Text color="white">Show more</Text>
        </Div>
      </div>
    </Container>
  )
}

export default PropertiesPage