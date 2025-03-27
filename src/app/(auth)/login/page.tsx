"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Text from "@/components/ui/Text"
import { AuthService } from "@/services/auth-service"
import { LoginRequest } from "@/types"
import { LoaderCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

const LoginPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<LoginRequest>({
    username: "",
    password: "",
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await AuthService.login(formData.username, formData.password)
      localStorage.setItem("token", response.access)
      localStorage.setItem("refreshToken", response.refresh)
      router.push("/")
    } catch (error: any) {
      console.error("Login error:", error)

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center px-4">
      <div className="w-full sm:w-[600px] shadow-md px-10 py-6 border border-[#E6E9EC] rounded-md">
        <Text color="#0D263B" className="font-semibold text-lg leading-7 tracking-[0%] mb-[44px]">Sign in</Text>

        <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%] mb-2">Login</Text>

        <div className="space-y-6">
          {["username", "password"].map((name, index) => (
            <div key={index} className="flex flex-col">
              <input
                type={name === "password" ? "password" : "text"}
                name={name} // Har bir inputga name qo'shish
                placeholder={name.charAt(0).toUpperCase() + name.slice(1)} // "username" -> "Username"
                className="border-b-2 border-b-[#E6E9EC] placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2 w-full"
                value={formData[name as keyof typeof formData]} // Dinamik qiymat
                onChange={handleChange} // Yangilash funksiyasi
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-2 mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <Text color="#696969" className="font-normal text-sm">Remember me</Text>
          </label>
          <Text color="#0061DF" className="font-normal text-base underline cursor-pointer">Forgot</Text>
        </div>

        <div className="w-full sm:w-full h-[44px] px-10 py-3 rounded-sm mb-[38px] mt-8 cursor-pointer bg-[#0061DF] flex justify-center items-center" onClick={handleSubmit}>
          <Text color="white">{!isLoading ? "Login" : <LoaderCircle />}</Text>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
