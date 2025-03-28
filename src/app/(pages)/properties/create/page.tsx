/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import axios from "@/lib/axios"
import { CategoryService } from "@/services/category-services"
import { Category } from "@/types"
import { Upload } from "lucide-react"
import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react"

const Text = ({ children, className = "" }: { children?: ReactNode; className?: string | null | any }) => {
  return <div className={`font-semibold text-lg leading-7 tracking-[0%] text-[] ${className}`}>{children}</div>
}

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    category: "2",
    title: "",
    description: "",
    price: "",
    location: "",
    status: "active",

    material: "",
    home_area: "",
    beds: "",
    label: "",
    lot_dimensions: "",
    rooms: "",
  })

  const [image1, setImage1] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    try {
      const getCategories = async () => {
        const res = await CategoryService.getAllCategories()
        console.log(res);
        setCategories(res)

      }

      getCategories()
    } catch (error) {
      console.log(error);

    }
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage1(file)

      // Create preview
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // Create form data object for API request
      const apiFormData = new FormData()

      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        apiFormData.append(key, value)
      })

      // Add image if selected
      if (image1) {
        apiFormData.append("image1", image1)
      }

      // Send to API
      const response = await axios.post("/uy/create_schedule/", apiFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      console.log(response.data)

      setSubmitResult({
        success: true,
        message: "Property successfully created!",
      })

      // Reset form after successful submission
      setFormData({
        category: "2",
        title: "",
        description: "",
        price: "",
        location: "",
        status: "active",
        // Reset new fields
        material: "",
        home_area: "",
        beds: "",
        label: "",
        lot_dimensions: "",
        rooms: "",
      })
      setImage1(null)
      setImagePreview(null)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitResult({
        success: false,
        message: "Error creating property. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#0D263B] mb-6">Add new property</h1>

      {submitResult && (
        <div
          className={`p-4 mb-6 rounded-lg ${submitResult.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {submitResult.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <Text>Property Information</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col">
              <label htmlFor="category" className="text-gray-600 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="border-b focus:outline-none focus:border-blue-500 py-2"
                required
              >
                {
                  categories?.map((item: { id: number, name: string }, index) => (
                    <option value={item?.id} key={index}>{item?.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className="text-gray-600 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Property title*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="label" className="text-gray-600 mb-1">
                Label
              </label>
              <input
                type="text"
                id="label"
                name="label"
                value={formData.label}
                onChange={handleInputChange}
                placeholder="Property label*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="material" className="text-gray-600 mb-1">
                Material
              </label>
              <input
                type="text"
                id="material"
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                placeholder="Building material*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>

            <div className="flex flex-col col-span-1 md:col-span-2">
              <label htmlFor="description" className="text-gray-600 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Property Description*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <Text>Property Details</Text>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col">
              <label htmlFor="beds" className="text-gray-600 mb-1">
                Beds
              </label>
              <input
                type="number"
                id="beds"
                name="beds"
                value={formData.beds}
                onChange={handleInputChange}
                placeholder="Number of beds*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
                min="0"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="rooms" className="text-gray-600 mb-1">
                Rooms
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                value={formData.rooms}
                onChange={handleInputChange}
                placeholder="Number of rooms*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
                min="0"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="home_area" className="text-gray-600 mb-1">
                Home Area
              </label>
              <input
                type="text"
                id="home_area"
                name="home_area"
                value={formData.home_area}
                onChange={handleInputChange}
                placeholder="Home area in sq ft*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lot_dimensions" className="text-gray-600 mb-1">
                Lot Dimensions
              </label>
              <input
                type="text"
                id="lot_dimensions"
                name="lot_dimensions"
                value={formData.lot_dimensions}
                onChange={handleInputChange}
                placeholder="Lot dimensions*"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <Text>Location & Price</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col">
              <label htmlFor="location" className="text-gray-600 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="price" className="text-gray-600 mb-1">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="border-b placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2"
                required
                step="0.01"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="status" className="text-gray-600 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="border-b focus:outline-none focus:border-blue-500 py-2"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <Text>Media</Text>
          <div className="space-y-6 mt-4">
            <div>
              <p className="text-gray-600 mb-3">Property Image</p>

              {imagePreview && (
                <div className="mb-3">
                  <div className="w-32 h-32 bg-gray-300 rounded overflow-hidden">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <label className="border border-gray-300 text-[#0D263B] rounded px-6 py-2 hover:bg-gray-50 cursor-pointer inline-flex items-center gap-2">
                <Upload size={16} />
                Upload Image
                <input type="file" name="image1" onChange={handleImageChange} className="hidden" accept="image/*" />
              </label>
              {image1 && <span className="ml-2 text-sm text-gray-600">{image1.name}</span>}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Property"}
          </button>
        </div>
      </form>
    </div>
  )
}

