/* eslint-disable @typescript-eslint/no-explicit-any */
import { BathIcon, BedIcon } from '@/assets/houzing-images'
import userImg from "@/assets/user.png"
import { Property } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Div from './ui/Div'
import Text from './ui/Text'



const Item = ({ title, description, price, location, image1, image2, created_at, status, category, id }: Property) => {

  return (
    <div className="bg-white mx-3 py-2   relative ">

      <Link href={`/properties/${id}`}>
        <div className="hover:scale-y-105 hover:shadow-lg transition-all duration-150 rounded-md overflow-hidden" >
          <div className="bg-center w-full h-[220px]  bg-cover" style={{
            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/348a/9872/65add135c66e5d356aae0e7a44733748?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z9Z1jQi8~L1ZtXzhKJ38gxQzhlx5TVX-smgbShkIXFiv-Fph5iEn73RdJijwjfEDKfCCcuBUJBlEAx5iQ5ifviy5IpYIawE17l785DnB0czUOQNJuFRiEHvXC0uXUM-cR4VKD0GE1xg1akRxpG3gUJQp~xfrbkelc~yBeZwmkZCRao~8pnWK-nU-kZ6atioKdhopLNjVTb7-ULSjq9m4cZHQZTxDtg8Gfagtl0CbEOfR-xZnKp6VZC2ie5g85fXhz7mrotFyHKo8--7-Ux8ZC90y1RTYB2Fh8d3wErwSwmMY1FAsuCCbaDyHtvtf-t10cDi6qeLwgS7xU6JrM8PP4g__')"
          }}>

          </div>
          <div className="mb-2 px-[20px] border border-[#E6E9EC]">
            <h1 className=" mt-6 font-semibold text-base leading-6 tracking-[0%]">{title}</h1>
            <span className=" mt-1 font-normal text-sm leading-5 tracking-[0%]">
              {description}
            </span>
            <div className="space-x-6 my-4 flex justify-center items-center ">
              <div className="flex justify-center items-center flex-col">
                <Image src={BedIcon} alt="BedIcon" />
                <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%]">4 beds</Text>
              </div>
              <div className="flex justify-center items-center flex-col">
                <Image src={BathIcon} alt="BathIcon" />
                <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="#696969">5 Baths</Text>
              </div>
              <div className="flex justify-center items-center flex-col">
                <Image src={BathIcon} alt="BathIcon" />
                <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="#696969">1 Garage</Text>
              </div>
              <div className="flex justify-center items-center flex-col">
                <Image src={BathIcon} alt="BathIcon" />
                <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="#696969">1200 Sq Ft</Text>
              </div>
            </div>
            <div className="mb-2  bg-[#E6E9EC]  w-full h-[1] left-px top-[368px]">

            </div>
            <div className="mb-2">
              <p className="text-[#696969] font-normal text-xs leading-5 tracking-[0%] line-through">{price}</p>
              <span className="text-[#0D263B] font-semibold text-base leading-6 tracking-[0%]">{price}/mo</span>
            </div>
          </div>
        </div >
        <div>
          <div>
            <Image width={100} height={100} className='w-10 h-10 rounded-full absolute right-5 top-[45%]' src={userImg} alt='user ' />
          </div>
        </div>
        <div className='absolute top-10 w-full flex justify-between items-center px-5'>
          <Div className='bg-[#0061DF] border-none flex justify-center items-center  h-[23] gap-2.5 px-3 py-[5px] rounded-[3px] '>
            <Text color='white' className='font-semibold text-[10px] leading-[100%] tracking-[0%]'>
              FEATURED

            </Text>
          </Div>
          <Div className='  flex justify-center items-center  h-[23] gap-2.5 px-3 py-[5px] rounded-[3px] bg-[#0D263B] border-none'>
            <Text color='white' className='font-semibold text-[10px] leading-[100%] tracking-[0%]'>
              FOR SALE
            </Text>
          </Div>
        </div>

      </Link>
    </div>

  )
}

export default Item