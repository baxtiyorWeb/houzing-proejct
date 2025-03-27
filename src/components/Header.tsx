import { LogoIcon, UserIcon } from "@/assets/houzing-images"
import Container from "@/shared/Container"
import Image from "next/image"
import Link from "next/link"
import Filternavigation from "./FilterNavigation"
import Text from "./ui/Text"


const Header = () => {
  return (
    <>
      <header className="w-full bg-[#0D263B] ">
        <Container>
          <div className="py-[20px] flex justify-between items-center">

            <Link href={'/'} className="flex justify-center items-center space-x-2">
              <Image src={LogoIcon} alt="logo" />
              <Text color="white" className="text-lg font-extrabold">Houzing</Text>
            </Link>
            <div className="space-x-[64px]">
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/"}>Home</Link>
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/properties"}>Properties</Link>
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/Contacts"}>
                Contacts
              </Link>
            </div>

            <div>
              <Image src={UserIcon} alt="logo" />
            </div>
          </div>
        </Container>
      </header>
      <Container>
        <Filternavigation />
      </Container>
    </>
  )
}

export default Header