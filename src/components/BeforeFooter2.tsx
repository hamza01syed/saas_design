import Image from "next/image"
import { Input } from "./ui/input"

export default function BeforeFooter2() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <div className="relative bg-[#363fbe] mx-auto mt-20 rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-8 left-8 w-8 h-8 border-2 border-amber-400 rounded-lg transform rotate-45" />
        <div className="absolute bottom-12 right-12 w-4 h-4 bg-rose-400 rounded-full" />
        <div className="absolute bottom-24 right-24 w-6 h-6 border-2 border-blue-300 rounded-lg transform -rotate-12" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Orders Chart */}
            <div className="relative hidden top-24 right-20  md:w-1/3 md:flex justify-center">
              <Image
                src="/images/orders.png"
                alt="Orders chart"
                className="w-[235px] h-[232px] object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* Center - Main Content */}
            <div className="text-center md:text-left md:w-1/3">
              <h1 className="text-3xl md:text-4xl lg:text-[50px] font-medium text-white mb-6">
                Supercharge your growing business!
              </h1>
              <button className="bg-amber-400 hover:bg-pink-700 text-black font-semibold px-8 py-3 rounded-full transition-colors">
                Get started free
              </button>
            </div>

            {/* Right Side - Profit Chart */}
            <div className="relative hidden -top-24 -right-20 md:w-1/3 md:flex justify-center">
              <Image
                src="/images/profit.png"
                alt="Profit chart"
                className="w-[235px] h-[232px] object-cover md:relative md:top-0"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col  md:flex-row gap-12 md:gap-48">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo_6.png"
              alt="TheGem Logo"
              className="w-[191px] h-[40px] mx-auto md:mx-0"
              width={100}
              height={100}
            />
          </div>

          <div className="md:flex md:flex-row flex flex-col gap-4 items-center md:gap-8 flex-1 max-w-xl">
            <div className="text-gray-600 text-[19px] whitespace-nowrap">
              Subscribe to our newsletter:
            </div>
            <div className="flex-1 flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 w-full md:w-80 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-rose-500 hover:bg-[#363fbe] text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
