import { FaPhoneAlt } from "react-icons/fa"

export const MeetMainone = () => {
  return (
    <div className='w-full p-[20pt] px-[15pt] md:px-[100pt] flex flex-col md:flex-row relative '>
      <div className="w-full px-5 md:px-10 py-10 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <div className="relative w-full flex justify-center">
              <div className="border-[7pt] md:border-[12pt] border-gray-50 shadow-2xl rounded-3xl overflow-hidden">
                <img src="./assets/images/solar-in-car.jpg" className="rounded-3xl transition duration-500 hover:scale-110 hover:grayscale" alt="" />
              </div>
              <div className="rounded-3xl border-[7pt] md:border-[10pt] border-gray-50 shadow-2xl absolute bottom-5 h-[120pt] md:h-[200pt] right-[40%] md:right-20 -rotate-12 overflow-hidden bg-gray-50">
                <img src="./assets/images/solar-roof.jpg" className="rounded-3xl h-[140pt] md:h-[200pt] transition duration-500 hover:scale-110 hover:grayscale" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 py-10 flex flex-col justify-center items-center">
            <div className="w-full md:w-[90%] flex flex-col space-y-2">
            <h5 className="text-sm font-[800] text-green-500 tracking-widest">
                GET TO KNOW US
              </h5>
              <h2 className="font-bold text-3xl md:text-5xl leading-snug">
                Welcome to Sustainable Energy Services
              </h2>

              <p className="leading-normal text-gray-600/90 text-justify py-5">
                We Provide clean, dependable, environmentally friendly, and cost-effective electrical energy to people all over the world in order to save our planet for future generations.
              </p>

              <ul className="list-inside pl-[25pt] flex flex-col space-y-4 font-[450]">
                <li className="my-2 text-gray-600/90 flex items-center space-x-4">
                  <div>
                    <div className="p-1 rounded-full border-2 border-green-500 animate-ping">
                      <div className="h-[6px] w-[6px] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    Ground Mounting System
                  </div>
                </li>

                <li className="my-2 text-gray-600/90 flex items-center space-x-4">
                  <div>
                    <div className="p-1 rounded-full border-2 border-green-500 animate-ping">
                      <div className="h-[6px] w-[6px] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    Flat Roof Mounting System
                  </div>
                </li>

                <li className="my-2 text-gray-600/90 flex items-center space-x-4">
                  <div>
                    <div className="p-1 rounded-full border-2 border-green-500 animate-ping">
                      <div className="h-[6px] w-[6px] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    Solar Carport
                  </div>
                </li>
              </ul>

              <div className="flex pt-10 flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <a href="/about" className="bg-green-600 font-[450] hover:bg-green-700 hover:text-green-100 transition px-6 py-4 shadow-md text-[11pt] text-green-50">
                  Learn More
                </a>

                <div className="md:px-6 py-4 flex space-x-4 md:items-center">
                  <div className="text-green-500 hover:text-white hover:animate-pulse">
                    <button className="px-5 py-5 rounded-full shadow-lg bg-gray-50 border-0">
                      <FaPhoneAlt />
                    </button>
                  </div>
                  <div>
                    <div className="font-extralight">
                      Call Us 24/7
                    </div>
                    <div className="font-bold text-xl">
                      +234-803-615-2300
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}