import { BathIcon, BedIcon } from "@/assets/houzing-images"
import Image from "next/image"
import RecommendItems from "./RecommendItems"
import Div from "./ui/Div"
import Text from "./ui/Text"

const Main = () => {
  return (
    <>
      <div className="relative flex justify-center items-center flex-col">
        <div className="w-full  h-[569px] bg-cover bg-center " style={{
          backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2166/569c/025784029df0a6b745e6bcb400f1a436?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZCknXs8~KQeCnLQUziZetdkV371f69ROxI6FYMAiQRsghjPYVdRHDBlCy1x6wmazWIztGLxZJVlqTIiiytS1ZAJetexmuQtjwsLBikrkscggs7Dl-ksgqJN8BFjWYNmqJLllElcIjFnEY2Kd4FUdjyS26utogyIXBAVAAlNqY2DaRWueS3P-csEUjbrAnzejBpsFO-b8xRX~F1aazUHQMVz8hzF2jyXvWDhjJHox-ybGXP48kb51-yUZAYtFxCzW6Ddy4GllWAhmAya7QHaZbAJXmWaWIXmcCyRxEZQCRzgO570556Ja-Bka1c2P1fu5ENvp4W8kN5tlnVi1Xbq5WA__')"
        }} >

          <div className="absolute top-1/12 right-1/3 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-white font-bold text-[44px] leading-[48px] tracking-[-2%]">Skyper Pool Partment</h1>
            <p className="text-white font-normal text-base leading-6 tracking-[0%]">112 Glenwood Ave Hyde Park, Boston, MA</p>

            <div className="space-x-6 flex justify-center items-center ">
              <div>
                <Image src={BedIcon} alt="BedIcon" />
                <Text color="white" className="font-normal text-base leading-6 tracking-[0%]">4 beds</Text>
              </div>
              <div>
                <Image src={BathIcon} alt="BathIcon" />
                <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="white">5 Baths</Text>
              </div>
              <div>
                <Image src={BathIcon} alt="BathIcon" />
                <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="white">1 Garage</Text>
              </div>
              <div>
                <Image src={BathIcon} alt="BathIcon" />
                <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="white">1200 Sq Ft</Text>
              </div>
            </div>

            <h2 className="text-white font-semibold text-[28px] leading-9 tracking-[-2%]">$5,250/mo</h2>

            <Div className="w-[180] h-[44] border gap-2.5 px-10 py-3 rounded-sm left-[630px] top-[521px] text-white font-normal text-sm leading-5 tracking-[0%] my-12">
              Read more
            </Div>
          </div>

          <div>
            <ul className="flex justify-center items-center space-x-2">
              {
                [1, 2, 3, 4, 5].map((_, index) => (
                  <li key={index} className="w-2 h-2 rounded-full bg-white"></li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>

      <RecommendItems /></>
  )
}

export default Main