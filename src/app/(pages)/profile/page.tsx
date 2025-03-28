"use client"

import { Badge } from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import { Buttons } from "@/components/ui/Button2"
import Input from "@/components/ui/Input"
import { Edit, Search, Trash2 } from 'lucide-react'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// This would come from your API
const mockProperties = [
  {
    id: 1,
    title: "New Apartment Nice View",
    address: "Quincy St, Brooklyn, NY, USA",
    price: "$7,500/mo",
    originalPrice: "$8,800/mo",
    datePublished: "30 December 2022",
    status: "Pending",
    views: 5933,
    featured: true,
    forSale: true,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    title: "New Apartment Nice View",
    address: "Quincy St, Brooklyn, NY, USA",
    price: "$7,500/mo",
    originalPrice: "$8,800/mo",
    datePublished: "30 December 2022",
    status: "Pending",
    views: 5933,
    featured: true,
    forSale: true,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    title: "New Apartment Nice View",
    address: "Quincy St, Brooklyn, NY, USA",
    price: "$7,500/mo",
    originalPrice: "$8,800/mo",
    datePublished: "30 December 2022",
    status: "Pending",
    views: 5933,
    featured: true,
    forSale: true,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function MyPropertiesPage() {
  const router = useRouter()
  const [properties, setProperties] = useState(mockProperties)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token")

    if (!token) {
      // Redirect to login if no token found
      router.push("/login")
      return
    }

    // Fetch properties from API
    // In a real app, you would fetch from your API here
    // const fetchProperties = async () => {
    //   try {
    //     const response = await fetch('/api/properties', {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     })
    //     const data = await response.json()
    //     setProperties(data)
    //   } catch (error) {
    //     console.error('Failed to fetch properties:', error)
    //   }
    // }

    // fetchProperties()
    setIsLoading(false)
  }, [router])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    // In a real app, you might want to debounce this or trigger on submit
  }

  const handleDelete = (id: number) => {
    // In a real app, you would call your API to delete the property
    setProperties(properties.filter(property => property.id !== id))
  }

  const handleEdit = (id: number) => {
    // Navigate to edit page
    router.push(`/my-properties/edit/${id}`)
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-end items-center mb-3">
        <Button onClick={() => router.push("/properties/create")}>
          Add Property
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl font-bold text-[#0D263B] mb-4 md:mb-0">My properties</h1>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 w-full md:w-[300px] border-gray-200 rounded-md"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-gray-500">
          <div className="col-span-5">Listing Title</div>
          <div className="col-span-2">Date Published</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">View</div>
          <div className="col-span-1">Action</div>
        </div>

        {/* Table Body */}
        <div className="divide-y">
          {properties.map((property) => (
            <div key={property.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 hover:bg-gray-50">
              {/* Listing Title (with image and details) */}
              <div className="col-span-1 md:col-span-5 flex space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <div className="absolute top-0 left-0 z-10">
                    {property.featured && (
                      <Badge className="bg-blue-600 text-white text-xs uppercase">Featured</Badge>
                    )}
                  </div>
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover bg-gray-200"
                  />
                  {property.forSale && (
                    <div className="absolute top-0 right-0 bg-[#0D263B] text-white text-xs px-2 py-1">
                      FOR SALE
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-medium text-[#0D263B]">{property.title}</h3>
                  <p className="text-sm text-gray-500">{property.address}</p>
                  <div className="mt-1">
                    <span className="text-sm font-semibold">{property.price}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">{property.originalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Mobile view - stacked layout */}
              <div className="md:hidden grid grid-cols-2 gap-2 col-span-1 mt-2">
                <div>
                  <div className="text-xs text-gray-500">Date Published</div>
                  <div className="text-sm">{property.datePublished}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Status</div>
                  <div className="text-sm">{property.status}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Views</div>
                  <div className="text-sm">{property.views}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Actions</div>
                  <div className="flex space-x-2">
                    <Buttons
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(property.id)}
                      className="h-8 w-8 text-blue-600"
                    >
                      <Edit className="h-4 w-4" />
                    </Buttons>
                    <Buttons
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(property.id)}
                      className="h-8 w-8 text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Buttons>
                  </div>
                </div>
              </div>

              {/* Desktop view - table layout */}
              <div className="hidden md:block col-span-2 self-center">
                <span className="text-sm">{property.datePublished}</span>
              </div>
              <div className="hidden md:block col-span-2 self-center">
                <span className="text-sm">{property.status}</span>
              </div>
              <div className="hidden md:block col-span-2 self-center">
                <span className="text-sm">{property.views}</span>
              </div>
              <div className="hidden md:flex col-span-1 self-center space-x-2 justify-end">
                <Buttons
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEdit(property.id)}
                  className="h-8 w-8 text-blue-600"
                >
                  <Edit className="h-4 w-4" />
                </Buttons>
                <Buttons
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(property.id)}
                  className="h-8 w-8 text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Buttons>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
