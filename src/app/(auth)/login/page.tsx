import Text from "@/components/ui/Text"

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center px-4">
      <div className="w-full sm:w-[600px] shadow-md px-10 py-6 border border-[#E6E9EC] rounded-md">
        <Text color="#0D263B" className="font-semibold text-lg leading-7 tracking-[0%] mb-[44px]">Sign in</Text>

        <Text color="#0D263B" className="font-semibold text-sm leading-5 tracking-[0%] mb-2">Login</Text>

        <div className="space-y-6">
          {["Login", "Password"].map((placeholder, index) => (
            <div key={index} className="flex flex-col">
              <input
                type={placeholder === "Password" ? "password" : "text"}
                placeholder={placeholder}
                className="border-b-2 border-b-[#E6E9EC] placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2 w-full"
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

        <div className="w-full sm:w-full h-[44px] px-10 py-3 rounded-sm mb-[38px] mt-8 cursor-pointer bg-[#0061DF] flex justify-center items-center">
          <Text color="white">Register</Text>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
