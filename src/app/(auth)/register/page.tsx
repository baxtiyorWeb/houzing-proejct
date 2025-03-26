import Text from '@/components/ui/Text'

const RegisterPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center px-4">
      <div className="w-full sm:w-[600px] shadow-md px-10 py-6 border border-[#E6E9EC] rounded-md">
        <Text color="#0D263B" className="font-semibold text-lg leading-7 tracking-[0%] mb-[44px] text-center">
          Registration
        </Text>
        <div className="space-y-6">
          {["Login", "First Name", "Last Name", "Email", "User Role", "Password", "Re enter Password"].map((placeholder, index) => (
            <div key={index} className="flex flex-col">
              <input
                type={placeholder.includes("Password") ? "password" : "text"}
                placeholder={placeholder}
                className="border-b-2 border-b-[#E6E9EC] placeholder:text-gray-600 focus:outline-none focus:border-blue-500 py-2 w-full"
              />
            </div>
          ))}
        </div>

        <div className="w-full sm:w-[400px] h-[44px] gap-2.5 px-10 py-3 rounded-sm mb-[38px] mt-8 cursor-pointer bg-[#0061DF] flex justify-center items-center">
          <Text color="white">Login</Text>
        </div>
      </div>
    </div>

  )
}

export default RegisterPage