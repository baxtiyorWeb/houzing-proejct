"use client"

import { LogoIcon, UserIcon } from "@/assets/houzing-images"
import Container from "@/shared/Container"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Filternavigation from "./FilterNavigation"
import Text from "./ui/Text"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()
  return (
    <>
      <header className="w-full bg-[#0D263B]">
        <Container>
          {/* Desktop Header */}
          <div className="hidden md:flex py-[20px] justify-between items-center">
            <Link href={"/"} className="flex justify-center items-center space-x-2">
              <Image src={LogoIcon || "/placeholder.svg"} alt="logo" />
              <Text color="white" className="text-lg font-extrabold">
                Houzing
              </Text>
            </Link>

            <div className="space-x-[64px]">
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/"}>
                Home
              </Link>
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/properties"}>
                Properties
              </Link>
              <Link className="font-normal text-base leading-6 tracking-[0%] text-[#FFFFFF]" href={"/Contacts"}>
                Contacts
              </Link>
            </div>

            <Link href={"/profile"}>
              <Image src={UserIcon || "/placeholder.svg"} alt="user icon" />
            </Link>
          </div>

          {/* Mobile Header - Matches the provided design */}
          <div className="flex md:hidden py-[15px] justify-between items-center">
            <button className="p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6 text-white" />
            </button>

            <Link href={"/"} className="flex justify-center items-center space-x-2">
              <Image src={LogoIcon || "/placeholder.svg"} alt="logo" />
              <Text color="white" className="text-lg font-extrabold">
                Houzing
              </Text>
            </Link>

            <div>
              <Image src={UserIcon || "/placeholder.svg"} alt="user icon" />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-[#0D263B] z-50 pt-20">
              <div className="flex flex-col items-center space-y-8 p-8">
                <Link
                  className="font-normal text-xl leading-6 tracking-[0%] text-[#FFFFFF]"
                  href={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className="font-normal text-xl leading-6 tracking-[0%] text-[#FFFFFF]"
                  href={"/properties"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Properties
                </Link>
                <Link
                  className="font-normal text-xl leading-6 tracking-[0%] text-[#FFFFFF]"
                  href={"/Contacts"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacts
                </Link>
              </div>
            </div>
          )}
        </Container>
      </header>
      <Container>
        {pathname !== "/profile" && <Filternavigation />}

      </Container>
    </>
  )
}

export default Header

