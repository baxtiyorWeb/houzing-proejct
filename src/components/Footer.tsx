import Container from "@/shared/Container"
import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"


const Footer = () => {

  return (
    <footer className="w-full bg-[#0D1D31] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p>123 456 7890</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <p>support@houzing.com</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <Link href="#" className="bg-[#0D1D31] hover:bg-[#1a2c45] p-2 rounded-md border border-gray-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-[#0D1D31] hover:bg-[#1a2c45] p-2 rounded-md border border-gray-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="bg-[#0D1D31] hover:bg-[#1a2c45] p-2 rounded-md border border-gray-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-[#0D1D31] hover:bg-[#1a2c45] p-2 rounded-md border border-gray-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Discover Section */}
          <div>
            <h3 className="text-xl font-medium mb-6">Discover</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Chicago
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Miami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  New York
                </Link>
              </li>
            </ul>
          </div>

          {/* Lists by Category 1 */}
          <div>
            <h3 className="text-xl font-medium mb-6">Lists by Category</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Condos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Offices
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Villas
                </Link>
              </li>
            </ul>
          </div>

          {/* Lists by Category 2 */}
          <div>
            <h3 className="text-xl font-medium mb-6">Lists by Category</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2 relative">
              <div className="w-10 h-10 rounded-full bg-[#6222CC] flex items-center justify-center">
                <span className="text-white font-bold">d</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E9572F] flex items-center justify-center absolute -right-4 -top-1">
                <span className="text-white font-bold">o</span>
              </div>
            </div>
            <span className="text-xl font-bold ml-6">Houzing</span>
          </div>
          <p className="text-sm text-gray-400">Copyright © 2021 CreativeLayers. All Right Reserved.</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-md transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </footer>
  )
}

export default Footer