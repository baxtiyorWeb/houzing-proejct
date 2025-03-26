"use client"
import { BathIcon, BedIcon, DocumentIcon } from "@/assets/houzing-images"
import Item from "@/components/Item"
import ItemCard from "@/components/ItemCard"
import Div from "@/components/ui/Div"
import Text from "@/components/ui/Text"
import Container from "@/shared/Container"
import Image from "next/image"
import { useState } from "react"

const ViewPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Container>

        <div className="grid grid-cols-9 grid-rows-6 gap-2 h-[400px]">
          <div className="col-span-5 row-span-6">
            <Image className="w-full h-[400px]" width={100} height={100} src="https://s3-alpha-sig.figma.com/img/ab6a/7508/a1d6861976be9192959ec4224a576408?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HEPTtV3ava13Nxc5JvBNsZlHc~9Y5UVW~NJmN02l99KBnqrrgaSqlp8XHOOB3mEQzDjYE~U8FzfoGYVDgiPMp74C4PgboXcCxd-XwskXbiGH1gfqTeTggyN3oHA0Dy4V9Ft17-Dypazr51bSGFawozXK6U3sffsg6VF8vQDkZcCLDh-kIyJrIK2rhV3-qDs1yQkjIPio3AiJYKZLHaZxKj29I4tgxMOToBI96LBMdmNr4e7U9Veb9ltg6vQRpgbi7~2tioZSD43CD8o-F1Svjlb24kEFL6tCkrLbOFsQZHgjTDNgG43mSpKThf2pk8Hqx7HXygxrC3i7EyxJPpKZfQ__" alt="" />
          </div>
          <div className="col-span-2 row-span-3 col-start-6"><Image className="w-full h-full" width={100} height={100} src="https://s3-alpha-sig.figma.com/img/0edc/bc61/dd70bf47c3dd3b75410f6559251699e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D-f7ZefqVkgUwfVj35uZfA3OoO49UwQfu2xrZ4BSXEEipaiOYN-28SyslggwrP4wKm4H6jx4Dzmw~yJlZelnvBNalFJM4bsPlHASyFnc3yp8Ks~o-k~k1Sf5B273915OwnoNodQJ02RIf~I5HU7kKGif8wvvZI-sVqnY0zGuENwq8gMds49pqzoIy-n3etiokZyVxEeQl0fNvXpjyF7Cal2cAyot82jyDBIGb3cEJa6rCqLiBEFzZS3b1DesmDeSrjGuxMNkfnBubZfJTYIxa8B59kc2HdZ4ZPiQ2Smzkbl5NW65FjieAal6pZgDdfDzULNxQqXc~HQMG9qmUejh5Q__" alt="" /></div>
          <div className="col-span-2 row-span-3 col-start-8"><Image className="w-full h-full" width={100} height={100} src="https://s3-alpha-sig.figma.com/img/0edc/bc61/dd70bf47c3dd3b75410f6559251699e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D-f7ZefqVkgUwfVj35uZfA3OoO49UwQfu2xrZ4BSXEEipaiOYN-28SyslggwrP4wKm4H6jx4Dzmw~yJlZelnvBNalFJM4bsPlHASyFnc3yp8Ks~o-k~k1Sf5B273915OwnoNodQJ02RIf~I5HU7kKGif8wvvZI-sVqnY0zGuENwq8gMds49pqzoIy-n3etiokZyVxEeQl0fNvXpjyF7Cal2cAyot82jyDBIGb3cEJa6rCqLiBEFzZS3b1DesmDeSrjGuxMNkfnBubZfJTYIxa8B59kc2HdZ4ZPiQ2Smzkbl5NW65FjieAal6pZgDdfDzULNxQqXc~HQMG9qmUejh5Q__" alt="" /></div>
          <div className="col-span-2 row-span-3 col-start-6 row-start-4"><Image className="w-full h-full" width={100} height={100} src="https://s3-alpha-sig.figma.com/img/0edc/bc61/dd70bf47c3dd3b75410f6559251699e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D-f7ZefqVkgUwfVj35uZfA3OoO49UwQfu2xrZ4BSXEEipaiOYN-28SyslggwrP4wKm4H6jx4Dzmw~yJlZelnvBNalFJM4bsPlHASyFnc3yp8Ks~o-k~k1Sf5B273915OwnoNodQJ02RIf~I5HU7kKGif8wvvZI-sVqnY0zGuENwq8gMds49pqzoIy-n3etiokZyVxEeQl0fNvXpjyF7Cal2cAyot82jyDBIGb3cEJa6rCqLiBEFzZS3b1DesmDeSrjGuxMNkfnBubZfJTYIxa8B59kc2HdZ4ZPiQ2Smzkbl5NW65FjieAal6pZgDdfDzULNxQqXc~HQMG9qmUejh5Q__" alt="" /></div>
          <div className="col-span-2 row-span-3 col-start-8 row-start-4"><Image className="w-full h-full" width={100} height={100} src="https://s3-alpha-sig.figma.com/img/0edc/bc61/dd70bf47c3dd3b75410f6559251699e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D-f7ZefqVkgUwfVj35uZfA3OoO49UwQfu2xrZ4BSXEEipaiOYN-28SyslggwrP4wKm4H6jx4Dzmw~yJlZelnvBNalFJM4bsPlHASyFnc3yp8Ks~o-k~k1Sf5B273915OwnoNodQJ02RIf~I5HU7kKGif8wvvZI-sVqnY0zGuENwq8gMds49pqzoIy-n3etiokZyVxEeQl0fNvXpjyF7Cal2cAyot82jyDBIGb3cEJa6rCqLiBEFzZS3b1DesmDeSrjGuxMNkfnBubZfJTYIxa8B59kc2HdZ4ZPiQ2Smzkbl5NW65FjieAal6pZgDdfDzULNxQqXc~HQMG9qmUejh5Q__" alt="" /></div>
        </div>
        <div>

          <div className="grid grid-cols-9 grid-rows-10 gap-2 mt-6">
            <div className="col-span-7 row-span-10">
              <div>
                <Text color="#0D263B" className="font-semibold text-2xl leading-8 tracking-[-2%]">
                  Luxury Family Loft by Victoria Park
                </Text>
                <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%]">Quincy St, Brooklyn, NY, USA</Text>
              </div>

              <div className="space-x-6 my-4 flex justify-start mt-8 mb-12 items-center ">
                <div className="flex justify-center items-center space-x-2">
                  <Image src={BedIcon} alt="BedIcon" />
                  <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%]">4 beds</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Image src={BathIcon} alt="BathIcon" />
                  <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="#696969">5 Baths</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Image src={BathIcon} alt="BathIcon" />
                  <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="#696969">1 Garage</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Image src={BathIcon} alt="BathIcon" />
                  <Text className="font-normal text-base leading-6 tracking-[0%] text-white" color="#696969">1200 Sq Ft</Text>
                </div>
              </div>
              <Text color="#0D263B" className="font-semibold text-lg leading-7 tracking-[0%]">
                Description
              </Text>
              <div>
                <Text color="#696969">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi at exercitationem obcaecati dolorum nesciunt veritatis ab aliquid enim error sunt, totam delectus maxime dicta asperiores id odio molestias hic.
                </Text>
                <Text color="#0061DF" className="mt-12 mb-24 font-normal text-sm leading-5 tracking-[0%] underline decoration-solid decoration-[0%]">Show more</Text>
                <Text color="#0D263B" className="font-semibold text-lg leading-7 tracking-[0%]">Documents</Text>

                <div className="flex justify-center items-center space-x-12 mt-4 mb-12">
                  <div className="flex justify-center items-center space-x-2">
                    <Image src={DocumentIcon} alt="documentIcon" /> <Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">test_property.pdf</Text>
                    <Text color="#0061DF" className="font-semibold text-xs leading-5 tracking-[1%] ml-6 uppercase underline decoration-solid decoration-[0%]">DOWNLOAD</Text>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Image src={DocumentIcon} alt="documentIcon" /> <Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">test_property.pdf</Text><Text color="#0061DF" className="font-semibold text-xs leading-5 tracking-[1%] ml-6 uppercase underline decoration-solid decoration-[0%]">DOWNLOAD</Text>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Image src={DocumentIcon} alt="documentIcon" /> <Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">test_property.pdf</Text><Text color="#0061DF" className="font-semibold text-xs leading-5 tracking-[1%] ml-6 uppercase underline decoration-solid decoration-[0%]">DOWNLOAD</Text>
                  </div>
                </div>

              </div>
              <div className=" w-full mb-36 h-[1] bg-[#E6E9EC]  ">
                <div>
                  <Text className="mb-6 font-semibold text-lg leading-7 tracking-[0%]" color="#0D263B ">Location</Text>
                </div>

                <div className="mb-36 grid grid-cols-3 gap-y-6 gap-x-16">
                  <div className="flex justify-center items-center space-x-2">
                    <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                  </div>

                </div>

              </div>
              <div className="mt-6 mb-12">
                <Image src={"https://s3-alpha-sig.figma.com/img/0de4/4608/b5743db9a2b51d7b1f8fda1b030dc6db?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=swpCTGf-76L-w~oy~a~cZolrc10lDRKpKuLHQfy~nldz19vNOP4A-w99sWBBq95yNzFp4D6zj0wLoFQyIxjRwjCYzVOTPbC3b3hgnukcenTqJdfTkgYSv50JoZf1zeDVkZLozRDub3XiRLqu6jZUJ8LN9-A55uC4k0aZm0J81Zf0RpT3iXhhqhwbD55gHQGrcAU1KvSx4gTRCNMJ3Xi2QITp-dc1dMqSmQuGHQRZfmJvPI4o8KzlrU27oFiB21Y5tnnwH4uAsmv5KecJgQVF9feaOLdtgQIUbm00731HfNciJkWQDxZV7ROlf3f2CqVJxKjY2TdiVWxsPnMAcH7m6w__"} width={100} height={100} alt="image-map" className="w-full h-[416px]" />
              </div>

              <div className=" mb-12 w-[880] h-[1]  bg-[#E6E9EC]" ></div>
              <div>
                <Text className="mb-6 font-semibold text-lg leading-7 tracking-[0%]" color="#0D263B ">Location</Text>
              </div>

              <div className="mb-16 grid grid-cols-3 gap-y-6 gap-x-16">
                <div className="flex justify-center items-center space-x-2">
                  <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Address: </Text><Text color="#696969" className="font-normal text-sm leading-5 tracking-[0%]">329 Queensberry Street</Text>
                </div>

              </div>
              <div className=" mb-12 w-[880] h-[1]  bg-[#E6E9EC]" ></div>
              <div>
                <Text className="mb-6 font-semibold text-lg leading-7 tracking-[0%]" color="#0D263B ">Schedule A Tour</Text>
              </div>


              <div>
                <div className="max-w-3xl  ">
                  {/* Date va Time */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600 mb-1">Date</label>
                      <select className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2">
                        <option>Select Date</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-900 font-semibold mb-1">Time</label>
                      <select className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2">
                        <option>10:00 am</option>
                      </select>
                    </div>
                  </div>

                  {/* Your Information */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Your Information
                  </h3>
                  <div className="grid grid-cols-3 gap-6 mb-4">
                    <div className="flex flex-col">
                      <label className="text-gray-600 mb-1">Name</label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-600 mb-1">Phone</label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder=""
                        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Enter Your Message"
                      className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                    />
                  </div>
                </div>

                <Div className="max-w-max flex justify-center items-center h-[44] gap-2.5 px-10 py-3 rounded-sm left-[130px] bg-[#0061DF] top-[2824px] border-none mt-6 mb-12">
                  <Text color="white">Submit a tour request</Text>
                </Div>

                <div className=" mb-12 w-[880] h-[1]  bg-[#E6E9EC]" ></div>

                <div>
                  <Text color="#0D263B" className="font-semibold text-lg leading-7 tracking-[0%] my-6">
                    4.67 (14 reviews)
                  </Text>

                  <div className="grid grid-cols-2 gap-[128px] w-full">
                    <div className="w-full ">
                      <div className="grid grid-cols-2  my-6">
                        <Text className=" font-normal text-sm leading-5 tracking-[0%]" color="#696969 ">Cleanliness</Text>
                        <div className="w-full  flex justify-center items-center ">
                          <div className="relative w-full bg-[#E6E9EC]  ">
                            <div className=" flex justify-end items-center h-1 bg-[#0061DF] w-[80%] rounded-full"></div>
                          </div>
                          <Text color="#0D263B" className="font-normal text-sm leading-5 tracking-[0%] text-right mx-4">4.7</Text>
                        </div>

                      </div>

                    </div>
                    <div className="w-full ">
                      <div className="grid grid-cols-2  my-6">
                        <Text className=" font-normal text-sm leading-5 tracking-[0%]" color="#696969 ">Cleanliness</Text>
                        <div className="w-full  flex justify-center items-center ">
                          <div className="relative w-full bg-[#E6E9EC]  ">
                            <div className=" flex justify-end items-center h-1 bg-[#0061DF] w-[80%] rounded-full"></div>
                          </div>
                          <Text color="#0D263B" className="font-normal text-sm leading-5 tracking-[0%] text-right mx-4">4.7</Text>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div className=" my-12 w-[880] h-[1]  bg-[#E6E9EC]" ></div>
                <div>
                  <div>
                    <Text className="mb-6 font-semibold text-lg leading-7 tracking-[0%]" color="#0D263B ">Write a Review</Text>
                  </div>
                  <div className="grid grid-cols-2 gap-[128px] w-full">
                    <div className="w-full ">
                      <div className="grid grid-cols-2  my-6">
                        <Text className=" font-normal text-sm leading-5 tracking-[0%]" color="#696969 ">Cleanliness</Text>
                        <div className="w-full  flex justify-center items-center space-x-2">
                          {[1, 2, 3, 4, 5].map((_, index) => <svg key={index} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99861 4.03906C9.99861 3.87165 9.82003 3.80469 9.68611 3.78237L6.88477 3.375L5.62919 0.835937C5.57896 0.72991 5.4841 0.607143 5.35575 0.607143C5.2274 0.607143 5.13253 0.72991 5.08231 0.835937L3.82673 3.375L1.02539 3.78237C0.885882 3.80469 0.712891 3.87165 0.712891 4.03906C0.712891 4.13951 0.785435 4.23437 0.8524 4.30692L2.88365 6.28237L2.40374 9.07254C2.39816 9.11161 2.39258 9.14509 2.39258 9.18415C2.39258 9.32924 2.46512 9.46317 2.62695 9.46317C2.70508 9.46317 2.77762 9.43527 2.85017 9.39621L5.35575 8.07924L7.86133 9.39621C7.92829 9.43527 8.00642 9.46317 8.08454 9.46317C8.24637 9.46317 8.31334 9.32924 8.31334 9.18415C8.31334 9.14509 8.31334 9.11161 8.30776 9.07254L7.82785 6.28237L9.85352 4.30692C9.92606 4.23437 9.99861 4.13951 9.99861 4.03906Z" fill="#CAB877" />
                          </svg>
                          )}
                        </div>

                      </div>

                    </div>


                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="text-gray-600 mb-1">Name</label>
                      <input
                        type="email"
                        placeholder=""
                        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-600 mb-1">Name</label>
                      <input
                        type="email"
                        placeholder=""
                        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder=""
                        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Div className="max-w-max flex justify-center items-center h-[44] gap-2.5 px-10 py-3 rounded-sm left-[130px] bg-[#0061DF] top-[2824px] border-none mt-6 mb-12 cursor-pointer">
                <Text color="white">Send your review</Text>
              </Div>



            </div>

            <div className="col-span-2 row-span-7 col-start-8">
              <div className="max-w-sm mx-auto p-6 bg-white border border-[#E6E9EC] rounded-lg ">
                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <Text color="#0D263B" className="font-semibold text-base leading-6 tracking-[0%]">Darrel Steward</Text>
                    <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%]">(123) 456-7890</Text>
                  </div>
                </div>

                {/* Input Fields */}
                <div className="mt-4 flex flex-col space-y-4">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Email"
                      className="border-b placeholder:text-gray-600 mb-1 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                    />
                  </div>
                  <div className="mt-[28px] mb-2 ">
                    <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%]">Message</Text>
                    <p className="font-normal text-sm leading-5 tracking-[0%]">
                      Hello, I am interested in [New Apartment]
                    </p>
                  </div>

                  {/* Checkbox */}
                  <div className="mt-4 flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 border-gray-300 rounded"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <label htmlFor="terms" className="ml-2 text-gray-600 text-sm">
                      By submitting this form I agree to Terms of Use
                    </label>
                  </div>

                  {/* Button */}
                  <button
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Send request
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center items-center flex-col  ">
          <h1 className='font-semibold text-[28px] leading-9 tracking-[-2%] text-center mt-[64px]'>Properties</h1>
          <Text color="#696969" className="font-normal text-base leading-6 tracking-[0%] mt-2 mb-[70px]">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text>
        </div>

        <ItemCard className="mb-26" items={[0, 1, 2, 3, 4, 5, 6].map((_, index) => <div key={index} >
          <Item />
        </div>)} slider />
      </Container>
    </div>
  )
}

export default ViewPage