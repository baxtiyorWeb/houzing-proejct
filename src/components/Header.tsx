import { LogoIcon, UserIcon } from "@/assets/houzing-images"
import Container from "@/shared/Container"
import Image from "next/image"
import Link from "next/link"
import Filternavigation from "./FilterNavigation"


const Header = () => {
  return (
    <>
      <header className="w-full bg-[#0D263B] ">
        <Container>
          <div className="py-[20px] flex justify-between items-center">

            <div>
              <Image src={LogoIcon} alt="logo" />
            </div>
            <div className="space-x-[64px]">
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/home"}>Home</Link>
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/Properties"}>Properties</Link>
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